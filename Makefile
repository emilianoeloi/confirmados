install:
	cd confirmados && yarn
start:
	cd confirmados && yarn start
itgt_start:
	cd integrate && yarn start && cp ./countries/* ../confirmados/src/casesCountries/countries
itgt_test:
	cd integrate && yarn test
