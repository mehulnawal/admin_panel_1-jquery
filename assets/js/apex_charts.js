// sales graph
var options = {
    series: [{
        name: 'iPhone',
        data: [80, 110, 90, 80, 110, 90, 63, 120, 110, 170, 120]
    }, {
        name: 'Samsung Galaxy',
        data: [100, 130, 110, 100, 130, 110, 140, 114, 125, 190, 140]
    },],
    chart: {
        type: 'bar',
        height: 320,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: [2010, , , 2013, , , 2016, , , 2019],
        labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
        axisTicks: {
            show: false,
        },

        crosshairs: {
            show: false,
        },

        tooltip: {
            enabled: false,
        },

    },
    yaxis: {
        title: {
            text: ''
        },

        labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
                colors: ["#fff"],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },

            title: {
                text: undefined,
            },
            tooltip: {
                enabled: false,
            },
            crosshairs: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    },
    legend: {
        show: false,
    },
    colors: ['#EBEEF1', '#00C2B2'],
    tooltip: {
        enabled: true, // Enables or disables the tooltip
        theme: 'dark', // Changes the theme of the tooltip ('light', 'dark')
        style: {
            fontSize: '12px', // Sets the font size of the tooltip text
            fontFamily: 'Arial' // Sets the font family of the tooltip text
        },
        onDatasetHover: {
            highlightDataSeries: true, // Highlights the series data on hover
        },
        marker: {
            show: true, // Show or hide marker in the tooltip
        },
        y: {
            formatter: function (val) { // Customizes the text inside the tooltip
                return val;
            }
        },
        background: {
            color: '#fff', // Changes the background color of the tooltip
            borderRadius: 5, // Rounds the corners of the tooltip
            borderColor: '#333', // Changes the border color of the tooltip
            borderWidth: 1 // Changes the border width of the tooltip
        }
    }
};

var chart = new ApexCharts(document.querySelector("#sale"), options);
chart.render();

// stock graph
var options = {
    series: [95],
    chart: {
        height: 250,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: [''],
    colors: ['#7A08C2'],
    stroke: {
        show: true,
        curve: 'straight',
        width: 5,
        dashArray: 0,
    }

};

var chart = new ApexCharts(document.querySelector("#stock"), options);
chart.render();


// Account

var options = {
    series: [{
        name: '',
        data: [25, 23, 26, 24, 25, 32, 30, 24, 19, 0]
    }],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
    },
    xaxis: {
        type: null,
        categories: [""],
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },

        crosshairs: {
            show: false,
        },

        tooltip: {
            enabled: false,
        },

    },

    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    legend: {
        show: false,
    },
    colors: ['#1B5B96'],
    tooltip: {
        enabled: true, // Enables or disables the tooltip
        theme: 'dark', // Changes the theme of the tooltip ('light', 'dark')
        style: {
            fontSize: '12px', // Sets the font size of the tooltip text
            fontFamily: 'Arial' // Sets the font family of the tooltip text
        },
        onDatasetHover: {
            highlightDataSeries: true, // Highlights the series data on hover
        },
        marker: {
            show: true, // Show or hide marker in the tooltip
        },
        y: {
            formatter: function (val) { // Customizes the text inside the tooltip
                return val;
            }
        },
        background: {
            color: '#fff', // Changes the background color of the tooltip
            borderRadius: 5, // Rounds the corners of the tooltip
            borderColor: '#333', // Changes the border color of the tooltip
            borderWidth: 1 // Changes the border width of the tooltip
        }
    },
    grid: {
        show: false,
    },
};

var chart = new ApexCharts(document.querySelector("#account"), options);
chart.render();

// revenue

var options = {
    series: [{
        name: 'iPhone',
        data: [80, 90, 120, 80, 110, 170, 120]
    }, {
        name: 'Samsung Galaxy',
        data: [100, 110, 140, 125, 190, 140]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: '',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: [2010, , , 2013, , , 2016, , , 2019],
        labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
        axisTicks: {
            show: false,
        },

        crosshairs: {
            show: false,
        },

        tooltip: {
            enabled: false,
        },

    },
    yaxis: {
        title: {
            text: ''
        },

        labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
                colors: ["#fff"],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },

            title: {
                text: undefined,
            },
            tooltip: {
                enabled: false,
            },
            crosshairs: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    },
    legend: {
        show: false,
    },
    colors: ['#F15050', '#E9ECEF'],
    tooltip: {
        enabled: true, // Enables or disables the tooltip
        theme: 'dark', // Changes the theme of the tooltip ('light', 'dark')
        style: {
            fontSize: '12px', // Sets the font size of the tooltip text
            fontFamily: 'Arial' // Sets the font family of the tooltip text
        },
        onDatasetHover: {
            highlightDataSeries: true, // Highlights the series data on hover
        },
        marker: {
            show: true, // Show or hide marker in the tooltip
        },
        y: {
            formatter: function (val) { // Customizes the text inside the tooltip
                return val;
            }
        },
        background: {
            color: '#fff', // Changes the background color of the tooltip
            borderRadius: 5, // Rounds the corners of the tooltip
            borderColor: '#333', // Changes the border color of the tooltip
            borderWidth: 1 // Changes the border width of the tooltip
        }
    }
};

var chart = new ApexCharts(document.querySelector("#revenue"), options);
chart.render();

