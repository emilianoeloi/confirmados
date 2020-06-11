## Sexta-feira, 29 de maio de 2020

Eu gostaria de gráfico bem simples, mas que mostra muito sobre comparando as mundos. Por exemplo, como a Japão, Nova Zelandia comparada com o Brazilzão!

## Sábado, 6 de junho de 2020

Implementei a integraçao, na verdade estou fazendo ainda! tem uma parte que é ordenar os "confirmados", pois o scritp ler os arquivos assincronos.

## Domingo, 7 de junho de 2020

Agora sim está feito. O script de integração está feito de ***integrate/countries*** para ***confirmados/src/casesCountries/countries/***, no entanto, a quantidade de dados é muito grande e demora muito para integrar. Para melhorar seria bom usar um banco de dados.

## Segunda-feira, 8 de junho de 2020

A integração ta melhorando. E tem um "bug bizarro", pois os dados são inseridos em dadsa anteriores, por exemplo: O arqvuio é do dia 01/03/2020(***integrate/csse_covid_19_daily_reports/03-01-2020.csv***) tem dados do dia 12/02/2020. Para o gráfico é importante limpar esse dados anteriores.

## Quarta-feira, 10 de junho de 2020

A integração também está esquisito: Os dados dados estão "errados", pois os dados no relatório de dia de maio começa no dia 2/5/2020 e fica assim poe exemplo o dados hoje é: 10/6/2020, ou seja os dados são de 9/6/2020.

## Quinta-feira, 11 de junho de 2020

Bug: Precisa validar se existem linha diferetnes do dia. Por exemplo, existe uma linha 12/03/2020, mas só podem linhas 13/03/2020.
Os dados estão "errados" de 23/04/2020 e agora os dados são 24/04/2020 

*** Primeira Versão v1.0.0-alpha ***
Então fiz um site pra eu ver e fazer uma referecnai entre paises e as confirmaados do COVID-19.
