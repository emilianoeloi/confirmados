class Loader {
    constructor() {
        this.datasets = []
        this.labels = []
        this.yAxes = []
        this.countries = []
        this.yAxis = []
        this.options = []
        this.cases = []
        this.display = true
        this.max = 0
    }

    setCaseCountry(country) {
        const setDateFormat = function(date) {
            const d = new Date(date)
            let dDay = d.getUTCDate()
            dDay = (dDay < 10) ? `0${dDay}` : dDay;
            let dMonth = d.getUTCMonth() + 1;
            dMonth = (dMonth < 10) ? `0${dMonth}` : dMonth
            const dYear = d.getUTCFullYear()
            return `${dYear}-${dMonth}-${dDay}`
        }
        const cases = country.cases
        var data = []
        var labels = []
        for(var i = 0; i < cases.length; i++) {
            let item = cases[i]
            data.push(item.cases)
            labels.push(setDateFormat(item.date))
            if (item.cases > this.max) {
                this.max = item.cases
            }
        }
        this.setCountry(country, data, labels)
    }

    setCountry(country, data, labels) {
        this.labels = labels
        this.countries[this.countries.length+1] = country
        var yAxis = `y-axis-${this.countries.length}`
        this.datasets.push({
            label: country.name,
            data: data,
            borderColor: country.color,
            yAxisID: yAxis,
            fill: false,
            borderWidth: 3,
            pointRadius: 0,
			pointHoverRadius: 2,
            showLine: true,
            borderDash: [5, 5],
        })
        console.info(yAxis)
        this.options.push({
            id: yAxis,
            type: 'linear',
            display: this.display,
            position: 'left',
            ticks: {
                max: this.max,
                min: 0
            }
        })
        if (this.display) {
            this.display = false
        }
    }
}

export { Loader }