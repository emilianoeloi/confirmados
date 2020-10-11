.SILENT:
.DEFAULT_GOAL := help

COLOR_RESET = \033[0m
COLOR_COMMAND = \033[36m
COLOR_YELLOW = \033[33m
COLOR_GREEN = \033[32m
COLOR_RED = \033[31m

PROJECT := Confirmados COVID-19

INTEGRATE_FILE=./integrate/countries/integrate.json
COUNTRIES_FILES=./site/src/CountryCases/countries/cases*.json

## Instalar o Site
site_install:
	cd site && yarn

## Iniciando o Site	
site_start:
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
	# [ -f $(INTEGRATE_FILE) ] && rm -f $(INTEGRATE_FILE) || echo ""
	[ -f $(COUNTRIES_FILES) ] && rm -rf $(COUNTRIES_FILES) || echo ""

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

## Configurar o projeto todo
install:
	make site_install
	make itgt_install

## Atualizar os dados do projeto
update:
	make itgt_delete_reports
	make bd_update
	make itgt_start
	make site_start

## Prints help message
help:
	printf "\n${COLOR_YELLOW}${PROJECT}\n------\n${COLOR_RESET}"
	awk '/^[a-zA-Z\-\_0-9\.%]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "${COLOR_COMMAND}$$ make %s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST) | sort
	printf "\n"