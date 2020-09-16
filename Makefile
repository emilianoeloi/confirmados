.SILENT:
.PHONY: help install start itgt_install itgt_start itgt_test itgt_delete_report draft bd_update

# ## Help screen
help:
	echo
	printf "Targets available:\n\n"
	awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "%-25s %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	echo

## Instalar o Site
install:
	cd site && yarn

## Iniciando o Site	
start:
	cd site && yarn start

## Instalar o integrador
itgt_install:
	cd integrate && yarn

## Iniciando o Integrador	
itgt_start:
	cd integrate && yarn start && cp ./countries/* ../site/src/CountryCases/countries

## Testando o Integrador
itgt_test:
	cd integrate && yarn test

## Testando o Integrador com o watch 
itgt_test_watch:
	cd integrate && yarn test:watch

## Deletar os relatóriso do integrador
itgt_delete_reports:
	cd integrate/countries/ && rm *.json
	cd site/src/CountryCases/countries/ && rm *.json

## É um rascunho pra rodar um javascript
draft:
	cd draft && node index.js	

## Atualizar o banco de dados
bd_update:
	## Confirmados
	git submodule update --init --recursive
	cd ./BD/COVID-19 && git pull origin master
	cp ./BD/COVID-19/csse_covid_19_data/csse_covid_19_daily_reports/* ./integrate/csse_covid_19_daily_reports/
    ## Países
	cp BD/Paises/integrate.json integrate/Paises/