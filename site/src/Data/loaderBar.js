class LoaderBar {
    constructor(title) {
        this.datasets = []
        this.labels = []
        this.yAxes = []
        this.countries = []
        this.yAxis = []
        this.options = []
        this.cases = []
        this.display = true
        this.max = null
        this.title = title
        this.dateMin = null
        this.dateMax = null
        this.countryName = ""
    }

    getData() {
        return {
            labels: this.labels,
            datasets: this.datasets
        }
    }

    setCaseCountry(country) {
        this.countryName = country.name
        const that = this
        that.dateFormatData = null
        const setDateFormat = function(date) {
            const d = new Date(date)
            let dDay = d.getUTCDate()
            dDay = (dDay < 10) ? `0${dDay}` : dDay;
            let dMonth = d.getUTCMonth() + 1;
            dMonth = (dMonth < 10) ? `0${dMonth}` : dMonth
            const dYear = d.getUTCFullYear()
            that.dateFormatData = `${dYear}-${dMonth}-${dDay}`
        }
        const getDateFormat = function() {
            return that.dateFormatData
        }
        const cases = country.cases
        var data = []
        var labels = []
        for(var i = 0; i < cases.length; i++) {
            if (this.dateMin == null) {
                this.dateMin = cases[i].date
            }
            let item = cases[i]
            data.push(item.dailyCases)
            setDateFormat(item.date)
            labels.push(getDateFormat())
            this.setTicks(item)
        }

        this.dateMax = cases[cases.length-1].date
        this.setCountry(country, data, labels)
    }

    setTicks(item) {
        if (this.max < item.dailyCases) { 
            this.max = item.dailyCases
        }
    }

    getTicks() {
        return this.max
    }

    getDateMin() {
        return this.dateMin
    }

    getDateMax() {
        return this.dateMax
    }

    getMaxCases() {
        return 30
    }

    getTitle() {
        return this.title
    }

    setCountry(country, data, labels) {
        this.labels = labels
        this.countries[this.countries.length+1] = country
        var yAxis = `y-axis-${this.countries.length}`
        this.datasets.push({
            label: country.name,
            data: data,
            borderColor: "gray",
            backgroundColor: country.color,
            yAxisID: yAxis,
            fill: true,
            borderWidth: 0.5,
            pointRadius: 0,
			pointHoverRadius: 0,
            showLine: true,
            borderDash: [5, 5],
        })
        this.options.push({
            responsive: true,
            title: {
                display: true
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            id: yAxis,
            type: 'linear',
            display: this.display,
            position: 'left',
            ticks: {
                max: this.getTicks(),
                min: 0
            }
        })
        if (this.display) {
            this.display = false
        }
    }
}

export { LoaderBar }