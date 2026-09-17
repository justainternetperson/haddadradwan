#!/usr/bin/env python3
"""Assemble site/ from src/.

Each file under src/pages/ contains the parts unique to one route:
its <head>, main content, and hydration payload. The shared header and
footer live in src/partials/ and are injected where these markers appear:

    <!--@include header active="/about/"-->   (active = nav href or "")
    <!--@include footer-->

Inside the header partial, {{CLS:<href>}} placeholders are replaced with
the active or inactive nav-link styling depending on the page's `active`
value, so the correct menu item is highlighted per page.

Run:  python3 build.py        # writes rendered pages into site/
Serve: python3 -m http.server 8000 --directory site
"""
import re, os, sys, glob

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC, SITE = f'{ROOT}/src', f'{ROOT}/site'

ACTIVE_CLS   = 'bg-[#070709] border border-[#222227] text-white'
INACTIVE_CLS = 'text-[#7E7E81] hover:text-white hover:bg-[#2a2a2a]/50'

HEADER_INC = re.compile(r'<!--@include header active="([^"]*)"\s*-->')
FOOTER_INC = re.compile(r'<!--@include footer\s*-->')
CLS_TOK    = re.compile(r'\{\{CLS:([^}]*)\}\}')
SCRIPT_TAG = re.compile(r'<script src="(/assets/js/[^"]+)"([^>]*)></script>')

def expand_header(tpl, active):
    def rep(m):
        return ACTIVE_CLS if m.group(1) == active else INACTIVE_CLS
    return CLS_TOK.sub(rep, tpl)

def dedupe_scripts(html):
    """Drop duplicate <script src="X"> tags for the same chunk.

    The browser snapshot saved some chunks both as an immediate and an
    async tag; one <script> tag per URL is enough."""
    found = {}
    for m in SCRIPT_TAG.finditer(html):
        src, attrs = m.group(1), m.group(2)
        if src not in found or 'async' in attrs and 'async' not in found[src][0]:
            found[src] = (attrs, m.span())
    keep = set(span for attrs, span in found.values())
    out, last = [], 0
    for m in SCRIPT_TAG.finditer(html):
        if m.span() in keep:
            out.append(html[last:m.start()])
            out.append(m.group(0))
        else:
            out.append(html[last:m.start()])
        last = m.end()
    out.append(html[last:])
    return ''.join(out)

def build():
    header = open(f'{SRC}/partials/header.html', encoding='utf-8').read()
    footer = open(f'{SRC}/partials/footer.html', encoding='utf-8').read()
    written = []
    for f in sorted(glob.glob(f'{SRC}/pages/**/*.html', recursive=True)):
        s = open(f, encoding='utf-8').read()
        rel = os.path.relpath(f, f'{SRC}/pages')[:-5]  # strip .html
        active = ''
        def hdr(m):
            nonlocal active
            active = m.group(1)
            return expand_header(header, active)
        s = HEADER_INC.sub(hdr, s)
        s = FOOTER_INC.sub(lambda m: footer, s)
        s = dedupe_scripts(s)
        if CLS_TOK.search(s):
            sys.exit(f'{rel}: unexpanded CLS token')
        out = f'{SITE}/{rel}/index.html' if rel != 'index' else f'{SITE}/index.html'
        os.makedirs(os.path.dirname(out), exist_ok=True)
        open(out, 'w', encoding='utf-8').write(s)
        written.append('/' + ('' if rel == 'index' else rel + '/'))
    print(f'built {len(written)} pages: ' + ' '.join(written))

if __name__ == '__main__':
    build()
