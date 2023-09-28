/* :::::::::::::: START GRAFIK KESEHATAN ::::::::::::::*/
//Chart code
am5.ready(function() {


// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdivu");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([am5themes_Animated.new(root)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(
am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
})
);

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set(
"scrollbarX",
am5.Scrollbar.new(root, {
    orientation: "horizontal"
})
);

var data = [
{
    nmkategori: "usia 0-9",
    jmlpenduduk: 500,
},
{
    nmkategori: "usia 10-19",
    jmlpenduduk: 600,
},
{
    nmkategori: "usia 20-29",
    jmlpenduduk: 200,
},
{
    nmkategori: "usia 30-39",
    jmlpenduduk: 200,
    strokeSettings: {
    stroke: chart.get("colors").getIndex(1),
    strokeWidth: 3,
    strokeDasharray: [5, 5]
    }
},
{
    nmkategori: "usia..",
    jmlpenduduk: 100,
    columnSettings: {
    strokeWidth: 1,
    strokeDasharray: [5],
    fillOpacity: 0.2
    },
    //info: "(projection)"
}
];

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, {});
var xAxis = chart.xAxes.push(
am5xy.CategoryAxis.new(root, {
    categoryField: "nmkategori",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
})
);
xRenderer.grid.template.setAll({
location: 1
})

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(
am5xy.ValueAxis.new(root, {
    min: 0,
    extraMax: 0.1,
    renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
    })
})
);

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

var series1 = chart.series.push(
am5xy.ColumnSeries.new(root, {
    name: "Jumlah Penduduk",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "jmlpenduduk",
    categoryXField: "nmkategori",
    tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "horizontal",
    labelText: "{name} in {categoryX}: {valueY} {info}"
    })
})
);

// series1.columns.template.setAll({
//   tooltipY: am5.percent(10),
//   templateField: "columnSettings"
// });

series1.data.setAll(data);

var series2 = chart.series.push(
am5xy.LineSeries.new(root, {
    //name: "Expenses",
    xAxis: xAxis,
    yAxis: yAxis,
    //valueYField: "expenses",
    //categoryXField: "nmkategori",
    // tooltip: am5.Tooltip.new(root, {
    //   pointerOrientation: "horizontal",
    //   labelText: "{name} in {categoryX}: {valueY} {info}"
    // })
})
);

// series2.strokes.template.setAll({
//   strokeWidth: 3,
//   templateField: "strokeSettings"
// });


series2.data.setAll(data);

chart.set("cursor", am5xy.XYCursor.new(root, {}));

// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(
am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
})
);
legend.data.setAll(chart.series.values);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);
series1.appear();


}); // end am5.ready()

/* :::::::::::::: END GRAFIK KESEHATAN ::::::::::::::*/