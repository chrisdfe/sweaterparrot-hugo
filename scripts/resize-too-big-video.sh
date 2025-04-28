function resize() {
  [ "$1" = "" ] && echo "filename argument required" && exit 1;
  [[ ! -f $1 ]] && echo "file '$1' does not exist" && exit 1;

  [ "$2" = "" ] && echo "output filename argument required" && exit 1;

  ffmpeg \
    -i $1 \
    -filter:v scale=1440:-1 \
    -c:a copy $2
}

resize $1 $2