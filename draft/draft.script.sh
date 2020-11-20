#!/bin/bash
file1="draft.text.txt"
file5="draft.text5.txt"
files=""
space=" "

## -f
echo "Verificar se tem arquivos com o comando -f"
if [ -f $file1 ];
then
    echo "➕ file1 -f"
fi

if [ -f $file5 ];
then
    echo "✖️ file5 -f"
else
    echo "➕ not file5 -f"
fi

## -e
echo "Verificar se tem arquivos com o comando -e"
if [ -e $file1 ];
then
    echo "➕ file1 -e"
fi

if [ -f $file5 ];
then
    echo "✖️ file5 -e"
else
    echo "➕ not file5 -e"
fi

## -f
echo "Validar todos os aquivos"
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
else
    echo "Nao tem arquivo"
fi