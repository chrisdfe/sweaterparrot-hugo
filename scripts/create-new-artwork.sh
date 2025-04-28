if [ "$1" = "" ] 
then
  echo "filename arg required"
  exit 1
fi

if [ "$2" = "" ] 
then
  echo "Title arg required"
  exit 1
fi


echo "creating files in './content/work/$1' for $2"
mkdir "./content/work/$1"
mkdir "./content/work/$1/images"
touch "./content/work/$1/index.md"

local date=$(date -u +"%Y-%m-%dT%H:%M:%SZ");
local currentcount = $(ls "./content/work" | wc -l)
local weight = $(($currentcount * 10))

cat > "./content/work/$1/index.md" <<- EOM
---
date: $date
title: $2
weight: $weight
---
EOM