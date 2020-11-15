#!/bin/sh
file=""
space=" "
if [ $# > 2 ]; then
    for argval in "$@"
    do
        if [ -f $argval ]; then
            files+=$argval$space
        else
            echo "$argval não existe"
        fi
    done
    echo "Vários arquivos $files"
    rm -f $files
else
    echo "Nao tem arquivo"
fi