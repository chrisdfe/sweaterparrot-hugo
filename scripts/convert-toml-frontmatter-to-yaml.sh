
function convert() {
  [ "$1" = "" ] && echo "filename argument required" && exit 1;
  [[ ! -f $1 ]] && echo "file '$1' does not exist" && exit 1;
}

convert $1