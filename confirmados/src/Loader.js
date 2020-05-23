class Loader {
    constructor() {
        this.datasets = []
        this.labels = []
        this.yAxes = []
        this.countries = []
        this.yAxis = []
        this.options = []
        this.cases = []
    }

    setCaseCountry(country, cases) {
        var data = []
        var labels = []
        for(var i = 0; i < cases.length; i++) {
            let item = cases[i]
            data.push(item.cases)
            labels.push(item.date)
        }
        this.setCountry(country, data, labels)
    }

    setCountry(country, data, labels) {
        this.labels = labels
        this.countries[this.countries.length+1] = country
        console.info(this.countries)
        var yAxis = `y-axis-${this.countries.length}`
        console.info(country.color)
        this.datasets.push({
            label: country.name,
            data: data,
            borderColor: country.color,
            yAxisID: yAxis,
            fill: false,
            borderWidth: 5
        })
        console.info(yAxis)
        this.options.push({
            id: yAxis,
            type: 'linear',
            display: true,
            position: 'left'
        })
    }
}

export { Loader }