am5.ready(function() {

var root = am5.Root.new("chartdiv"); 

root.setThemes([
    am5themes_Animated.new(root)
]);

var chart = root.container.children.push( 
    am5xy.XYChart.new(root, {
    panY: false,
    wheelY: "zoomX",
    layout: root.verticalLayout,
    maxTooltipDistance: 0
    }) 
);

// Define data
var data = [{
    category: "Semester 1 2016",
    value: 7242
}, {
    category: "Semester 1 2017",
    value: 7192
}, {
    category: "Semester 2 2017",
    value: 7172
}, {
    category: "Semester 1 2018",
    value: 7289
}, {
    category: "Semester ...",
    value: 7345
}];

// Create Y-axis
var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
    extraTooltipPrecision: 1,
    renderer: am5xy.AxisRendererY.new(root, {})
    })
);

// Create X-Axis
var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
    categoryField: "category",
    renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 20
    }),
    })
);
xAxis.data.setAll(data);

// Create series

var series = chart.series.push(
    am5xy.LineSeries.new(root, {
    name: "Jumlah Penduduk",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    categoryXField: "category",
    legendLabelText: "{name}: {categoryX}",
    legendRangeLabelText: "{name}"
    })
);
    
series.data.setAll(data);

// Add cursor
chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "zoomXY",
    xAxis: xAxis
}));

xAxis.set("tooltip", am5.Tooltip.new(root, {
    themeTags: ["axis"]
}));

yAxis.set("tooltip", am5.Tooltip.new(root, {
    themeTags: ["axis"]
}));

var legend = chart.children.push(am5.Legend.new(root, {}));
legend.data.setAll(chart.series.values);

}); // end am5.ready()