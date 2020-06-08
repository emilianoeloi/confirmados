.SILENT:
.PHONY: install start itgt_install itgt_start itgt_test itgt_delete_report draft

install:
	cd confirmados && yarn
start:
	cd confirmados && yarn start
itgt_install:
	cd integrate && yarn
itgt_start:
	cd integrate && yarn start && cp ./countries/* ../confirmados/src/casesCountries/countries
itgt_test:
	cd integrate && yarn test
itgt_test_watch:
	cd integrate && yarn test:watch
itgt_delete_reports:
	cd integrate/countries/ && rm *.json
	cd confirmados/src/casesCountries/countries/ && rm *.json
draft:
	cd draft && node index.js	
