#!/usr/bin/bash

function rename() {
  [ "$1" = "" ] && echo "filename arg required" && exit 1;

  [ "$2" = "" ] && echo "Title arg required" && exit 1;

  [ "$3" = "" ] && echo "year arg required" && exit 1;

  local rootdir="./content/work/$1"

  [[ -d $rootdir ]] && echo "$rootdir already exists." && exit 1;

  echo "creating files in '$rootdir' for $2"
  mkdir "$rootdir"
  mkdir "$rootdir/images/"
  touch "$rootdir/index.md"

  local date=$(date -Is);
  local currentcount="$(ls "./content/work" | wc -l)"
  local weight="$(($currentcount * 10))"

  cat > "./content/work/$1/index.md" <<- EOM
---
date: "$date"
title: "$2"
weight: "$weight"
params:
  year: "$3"
---
EOM

  echo "done."
}

rename $1 $2 $3
