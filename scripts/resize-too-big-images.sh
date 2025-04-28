find . \
  -wholename "./content/work/*/images/*.png" \
  -size +25M |
# -I{} -> {} interpolates the filename piped in from find
xargs -I{} \
convert \
  -resize "3000x" "{}" "{}"
echo "done."