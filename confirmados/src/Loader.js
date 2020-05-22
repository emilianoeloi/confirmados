class Loader {
    constructor(
        datasets,
        labels,
        yAxes,
        data, 
        countries,
        yAxis,
        country,
        cases) {
            
        this.datasets = datasets
        this.labels = labels
        this.yAxes = yAxes
        this.data = data
        this.countries = countries
        this.yAxis = yAxis
        this.country = country
        this.cases = cases
        this.options = []

        let total = 10

        for(var i = 0; i < total; i++) {
            let item = cases[i]
            this.setDate(item)
        }
        this.setCountry(country)
    }

    setDate(item) {
        this.data.push(item.cases)
        this.labels.push(item.date)
    }

    setCountry(country) {
        this.countries[this.countries+1] = country
        this.yAxis = `y-axis-${this.countries.length}`
        this.datasets.push({
            label: this.country.name,
            data: this.data,
            borderColor: this.country.color,
            yAxisID: this.yAxis,
            fill: false,
            borderWidth: 5
        })
        this.options.push({
            id: this.yAxis,
            type: 'linear',
            display: true,
            position: 'left'
        })
    }
}

export { Loader }