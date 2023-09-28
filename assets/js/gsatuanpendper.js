/* :::::::::::::: START SECTION GRAFIK 1 SATUAN PENDIDIKAN ::::::::::::::*/
am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdivs4");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
    am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(
    am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
    })
);

var data = [{
    "tingkat": "SMP 1...",
    "laki-laki": 50,
    "perempuan": 30,
}, {
    "tingkat": "SMP 2...",
    "laki-laki": 40,
    "perempuan": 30,
}, {
    "tingkat": "SMP 3...",
    "laki-laki": 50,
    "perempuan": 50,
}]


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.1,
    cellEndLocation: 0.9
})

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "tingkat",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
}));

xRenderer.grid.template.setAll({
    location: 1
})

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
    })
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    categoryXField: "tingkat"
    }));

    series.columns.template.setAll({
    tooltipText: "{name}, {categoryX}:{valueY}",
    width: am5.percent(90),
    tooltipY: 0,
    strokeOpacity: 0
    });

    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    series.bullets.push(function() {
    return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
        text: "{valueY}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true
        })
    });
    });

    legend.data.push(series);
}

makeSeries("Laki-laki", "laki-laki");
makeSeries("Perempuan", "perempuan");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()
/* :::::::::::::: END SECTION GRAFIK 1 SATUAN PENDIDIKAN ::::::::::::::*/

/* :::::::::::::: START SECTION GRAFIK 2 SATUAN PENDIDIKAN ::::::::::::::*/
am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdivs5");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
    am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(
    am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
    })
);

var data = [{
    "tingkat": "SMP 1...",
    "guru": 30,
}, {
    "tingkat": "SMP 2...",
    "laki-laki": 40,
    "guru": 30,
}, {
    "tingkat": "SMP 3...",
    "guru": 50,
}]


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.1,
    cellEndLocation: 0.9
})

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "tingkat",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
}));

xRenderer.grid.template.setAll({
    location: 1
})

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
    })
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    categoryXField: "tingkat"
    }));

    series.columns.template.setAll({
    tooltipText: "{name}, {categoryX}:{valueY}",
    width: am5.percent(90),
    tooltipY: 0,
    strokeOpacity: 0
    });

    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    series.bullets.push(function() {
    return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
        text: "{valueY}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true
        })
    });
    });

    legend.data.push(series);
}

makeSeries("Jumlah Rata-rata", "guru");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()
/* :::::::::::::: END SECTION GRAFIK 2 SATUAN PENDIDIKAN ::::::::::::::*/


/* :::::::::::::: START SECTION GRAFIK 3 SATUAN PENDIDIKAN ::::::::::::::*/
am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdivs6");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
    am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(
    am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
    })
);

var data = [{
    "tingkat": "SMP 1...",
    "rombel": 50,
    "ruang kelas": 30,
}, {
    "tingkat": "SMP 2...",
    "rombel": 40,
    "ruang kelas": 30,
}, {
    "tingkat": "SMP 3...",
    "rombel": 50,
    "ruang kelas": 50,
}]


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.1,
    cellEndLocation: 0.9
})

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "tingkat",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
}));

xRenderer.grid.template.setAll({
    location: 1
})

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
    })
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    categoryXField: "tingkat"
    }));

    series.columns.template.setAll({
    tooltipText: "{name}, {categoryX}:{valueY}",
    width: am5.percent(90),
    tooltipY: 0,
    strokeOpacity: 0
    });

    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    series.bullets.push(function() {
    return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
        text: "{valueY}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true
        })
    });
    });

    legend.data.push(series);
}

makeSeries("Rombel", "rombel");
makeSeries("Ruang Kelas", "ruang kelas");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()