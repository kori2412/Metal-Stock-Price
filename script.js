const goldchart = LightweightCharts.createChart(
    document.getElementById("goldchart"),
    {
    width:800,
    height:400,
    layout:{
        backgroundColor:"#ffffff",
        textColor:"#000",
    },
    grid:{
        vertLines:{color:"#eee"},
        horzLines:{color:"#eee"}
    }
});


const lineSeries = goldchart.addSeries(LightweightCharts.LineSeries,
    {
    color:"#00b386",
    lineWidth: 3
});

lineSeries.setData([
{ time: "2023-01-01", value: 10 },
{ time: "2023-02-01", value: 18 },
{ time: "2023-03-01", value: 14 },
{ time: "2023-04-01", value: 25 },
{ time: "2023-05-01", value: 19 },
{ time: "2023-06-01", value: 32 },
{ time: "2023-07-01", value: 28 },
{ time: "2023-08-01", value: 40 },
{ time: "2023-09-01", value: 35 },
{ time: "2023-10-01", value: 50 },
{ time: "2023-11-01", value: 45 },
{ time: "2023-12-01", value: 60 },

{ time: "2024-01-01", value: 55 },
{ time: "2024-02-01", value: 70 },
{ time: "2024-03-01", value: 65 },
{ time: "2024-04-01", value: 85 },
{ time: "2024-05-01", value: 75 },
{ time: "2024-06-01", value: 95 },
{ time: "2024-07-01", value: 90 },
{ time: "2024-08-01", value: 110 },
{ time: "2024-09-01", value: 100 },
{ time: "2024-10-01", value: 120 },
{ time: "2024-11-01", value: 115 },
{ time: "2024-12-01", value: 140 },

{ time: "2025-01-01", value: 130 },
{ time: "2025-02-01", value: 150 },
{ time: "2025-03-01", value: 145 },
{ time: "2025-04-01", value: 170 },
{ time: "2025-05-01", value: 160 },
{ time: "2025-06-01", value: 185 }
]);





