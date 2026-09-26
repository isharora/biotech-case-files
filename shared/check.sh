#!/bin/bash
# Usage: shared/check.sh <case-id> [light|dark|both]
# Prints CF_STATS / missing glossary terms / JS errors, and writes viewport screenshots top to bottom to /tmp/cf_<id>/<mode>_NN.png
id="$1"; modes="${2:-both}"; [ -z "$id" ] && { echo "usage: shared/check.sh <case-id> [light|dark|both]"; exit 1; }
[ "$modes" = both ] && modes="light dark"
cd "$(dirname "$0")/.."
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
out=/tmp/cf_$id; rm -rf "$out"; mkdir -p "$out"
log=$("$C" --headless=new --disable-gpu --enable-logging=stderr --v=0 --window-size=1300,1500 --virtual-time-budget=6000 --dump-dom "file://$PWD/case.html?id=$id&reveal=1" 2>&1)
echo "== console"; echo "$log" | grep "CONSOLE" | grep -vE "DevTools|Autofill" | sed -E 's/.*CONSOLE:[0-9]+\] //' | cut -c1-700
echo "$log" | grep -c "Render error" | sed 's/^/render errors in DOM: /'
h=$(echo "$log" | grep -oE "CF_HEIGHT [0-9]+" | awk '{print $2}'); h=${h:-3000}
echo "== page height ${h}px"
for mode in $modes; do
  n=0; for ((y=0; y<h; y+=1400)); do
    "$C" --headless=new --disable-gpu --hide-scrollbars --window-size=1300,1500 --virtual-time-budget=5000 --screenshot="$out/${mode}_$(printf %02d $n).png" "file://$PWD/case.html?id=$id&reveal=1&theme=$mode&scroll=$y" >/dev/null 2>&1
    n=$((n+1)); done
done
echo "== screenshots: $out/<mode>_NN.png (1300x1500 each, NN = scroll position / 1400)"; ls "$out" | tr '\n' ' '; echo
