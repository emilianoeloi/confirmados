***Primeira Versão v1.0.0-alpha***
Então fiz um site pra eu ver e fazer uma referencia entre paises e os casos confirmados do COVID-19.

## Sábado, 19 de dezembro de 2020

Eu vou publicar um projeto "confirmado" no npm, para obter os dados nos estados do Brasil.
```bash
$ confirmados --state para --ini 01/06/2020 --end 19/12/2020
```

## Sexta-feira, 11 de dezembro de 2020

Já que fiz uma lista de Países, eu vou colocar com os estados. PRa começar o Estados do Brasil.

## Sábado, 20 de novembro de 2020

De Callback para Promise. Quando rodei em uma máquina com processador muito potente (12 nucleos), e quebrou a coisa toda! :) MAs o Promise resolvei as coisas.

## Sábado, 10 de outubro de 2020

Finalmente agora o Confirmados integra com paídes por classe para o Country!

```javascript
// ...
const argentina = new Country("argentina", "Argentina", "")
const brazil = new Country("brazil", "Brazil", "")
const contries = [brazil, argentina]
// ...
```

## Sábado, 12 de setembro de 2020

Olha, estou de volta! E olha ai, mais confirmados. E os Brics está no "top". 

## Quinta-feira, 11 de junho de 2020

Bug: Precisa validar se existem linha diferentes do dia. Por exemplo, existe uma linha 12/03/2020, mas só podem linhas 13/03/2020.
Os dados estão "errados" de 23/04/2020 e agora os dados são 24/04/2020 

## Quarta-feira, 10 de junho de 2020

A integração também está esquisita: Os dados estão "errados", pois os dados no relatório dos dias de maio começam no dia 2/5/2020 e fica assim. Por exemplo, hoje é 10/6/2020, ou seja os dados são de 9/6/2020.

## Segunda-feira, 8 de junho de 2020

A integração ta melhorando. E tem um "bug bizarro", pois os dados são inseridos em datas anteriores, por exemplo: O arquivo é do dia 01/03/2020(***integrate/csse_covid_19_daily_reports/03-01-2020.csv***) tem dados do dia 12/02/2020. Para o gráfico é importante limpar esse dados anteriores.

## Domingo, 7 de junho de 2020

Agora sim está feito. O script de integração está feito de ***integrate/countries*** para ***confirmados/src/casesCountries/countries/***, no entanto, a quantidade de dados é muito grande e demora muito para integrar. Para melhorar seria bom usar um banco de dados.

## Sábado, 6 de junho de 2020

Implementei a integração, na verdade estou fazendo ainda! tem uma parte que é ordenar os "confirmados", pois o script lê os arquivos assincronos.

## Sexta-feira, 29 de maio de 2020

Eu gostaria de um gráfico bem simples, mas que mostra comparação dos casos confirmados no mundo. Por exemplo Japão ou Nova Zelandia comparados com o Brasilzão!

