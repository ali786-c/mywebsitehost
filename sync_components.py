#!/usr/bin/env python3
"""
ZedgeHost - Header, Footer & Asset Version Synchronization Script
==================================================================
This script ensures that all HTML pages contain:
1. Direct links to header.css and footer.css in <head> for 0.0s instant styling.
2. The full static HTML for the header inside #zedge-header.
3. The full static HTML for the footer inside #zedge-footer.
4. Cache-busting version tags (?v=VERSION_TAG) on all CSS and JS assets so browsers fetch fresh files.
"""

import os
import glob
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

HEADER_FILE = os.path.join(SCRIPT_DIR, 'header.html')
FOOTER_FILE = os.path.join(SCRIPT_DIR, 'footer.html')

SKIP_FILES = {
    'header.html',
    'footer.html',
    'index_backup.html',
    'login.html',
    'sign-up.html',
    'forgot-password.html',
}

VERSION_TAG = '20261107b'

def load_canonical_components():
    with open(HEADER_FILE, 'r', encoding='utf-8') as f:
        header_html = f.read().strip()
    with open(FOOTER_FILE, 'r', encoding='utf-8') as f:
        footer_html = f.read().strip()
    return header_html, footer_html

def bump_asset_versions(content):
    # Regex to bump or add ?v=VERSION_TAG to our key assets
    assets = [
        'assets/css/index-style.css',
        'assets/css/style.css',
        'assets/css/header.css',
        'assets/css/footer.css',
        'assets/css/blog.css',
        'assets/js/header.js',
        'assets/js/footer.js',
        'assets/js/index-main.js',
        'assets/js/main.js'
    ]
    
    for asset in assets:
        escaped = re.escape(asset)
        pattern = re.compile(rf'{escaped}(?:\?v=[a-zA-Z0-9_\-\.]+)?')
        content = pattern.sub(f'{asset}?v={VERSION_TAG}', content)
        
    return content

def sync_page(filepath, header_html, footer_html):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    orig_content = content

    # 1. Ensure header.css and footer.css in <head>
    if 'header.css' not in content:
        header_css_link = f'    <link rel="stylesheet" href="assets/css/header.css?v={VERSION_TAG}">\n'
        if 'assets/css/index-style.css' in content:
            content = re.sub(r'(assets/css/index-style\.css(?:\?v=[^\"]*)?\">)', r'\1\n' + header_css_link, content, count=1)
        elif 'assets/css/style.css' in content:
            content = re.sub(r'(assets/css/style\.css(?:\?v=[^\"]*)?\">)', r'\1\n' + header_css_link, content, count=1)
        elif '</head>' in content:
            content = content.replace('</head>', f'{header_css_link}</head>')

    if 'footer.css' not in content:
        footer_css_link = f'    <link rel="stylesheet" href="assets/css/footer.css?v={VERSION_TAG}">\n'
        if 'assets/css/header.css' in content:
            content = re.sub(r'(<link[^>]*assets/css/header\.css[^>]*>\n?)', r'\1' + footer_css_link, content, count=1)
        elif '</head>' in content:
            content = content.replace('</head>', f'{footer_css_link}</head>')

    # 2. Build the wrapped header and footer
    wrapped_header = (
        '<div id="zedge-header">\n'
        f'{header_html}\n'
        f'<script defer src="assets/js/header.js?v={VERSION_TAG}"></script>\n'
        '</div>'
    )

    wrapped_footer = (
        '<div id="zedge-footer">\n'
        f'{footer_html}\n'
        f'<script defer src="assets/js/footer.js?v={VERSION_TAG}"></script>\n'
        '</div>'
    )

    # 3. Replace #zedge-header
    header_pattern = re.compile(r'<div id=["\']zedge-header["\'][^>]*>[\s\S]*?</div>', re.MULTILINE)
    if header_pattern.search(content):
        content = header_pattern.sub(wrapped_header, content, count=1)
    
    # 4. Replace #zedge-footer
    footer_pattern = re.compile(r'<div id=["\']zedge-footer["\'][^>]*>[\s\S]*?</div>', re.MULTILINE)
    if footer_pattern.search(content):
        content = footer_pattern.sub(wrapped_footer, content, count=1)
    else:
        standalone_footer_script = re.compile(r'<script[^>]*src=["\'][^"\']*assets/js/footer\.js[^"\']*["\'][^>]*></script>', re.MULTILINE)
        if standalone_footer_script.search(content):
            content = standalone_footer_script.sub(wrapped_footer, content, count=1)

    # 5. Bump all asset version parameters
    content = bump_asset_versions(content)

    if content != orig_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    header_html, footer_html = load_canonical_components()
    html_files = sorted(glob.glob(os.path.join(SCRIPT_DIR, '*.html')))
    
    synced_count = 0
    skipped_count = 0

    for filepath in html_files:
        filename = os.path.basename(filepath)
        if filename in SKIP_FILES:
            skipped_count += 1
            continue

        was_synced = sync_page(filepath, header_html, footer_html)
        status = "BUMPED" if was_synced else "UNCHANGED"
        print(f"[{status}] {filename}")
        if was_synced:
            synced_count += 1

    print("\n" + "=" * 50)
    print(f"Version Bump & Sync Complete! {synced_count} pages updated to {VERSION_TAG}, {skipped_count} skipped.")
    print("=" * 50)

if __name__ == '__main__':
    main()
