#!/bin/sh

if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    printf "%s\n" "$1"
    [ $# -ge 2 ] && printf "%s\n" "$2"
    [ $# -ge 3 ] && printf "%s\n" "$3"
fi
