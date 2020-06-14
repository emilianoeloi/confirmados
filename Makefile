.SILENT:
.PHONY: install start itgt_install itgt_start itgt_test itgt_delete_report draft bd_update

install:
	cd site && yarn
start:
	cd site && yarn start
itgt_install:
	cd integrate && yarn
itgt_start:
	cd integrate && yarn start && cp ./countries/* ../site/src/CountryCases/countries
itgt_test:
	cd integrate && yarn test
itgt_test_watch:
	cd integrate && yarn test:watch
itgt_delete_reports:
	cd integrate/countries/ && rm *.json
	cd site/src/CountryCases/countries/ && rm *.json
draft:
	cd draft && node index.js	
bd_update:
	cp ./BD/COVID-19/csse_covid_19_data/csse_covid_19_daily_reports/* ./integrate/csse_covid_19_daily_reports/
