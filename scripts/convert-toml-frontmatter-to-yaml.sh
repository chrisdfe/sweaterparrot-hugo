
function convert() {
  [ "$1" = "" ] && echo "filename argument required" && exit 1;
  [[ ! -f $1 ]] && echo "file '$1' does not exist" && exit 1;

  cat $1 |
    sed -e "s/+++/---/" |
    sed -e "s/ =/:/" |
    sed -e "s/\[params\]/params: /" |
    sed -e "s/'/\"/g" \
    > $1

  echo "done."
}

convert $1