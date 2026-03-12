// Platinum Series
const platinumchart = LightweightCharts.createChart(
    document.getElementById("platinumchart"),
    {
        width: 800,
        height: 400,
        layout: {
            backgroundColor: "#ffffff",
            textColor: "#000",
        },
        grid: {
            vertLines: { color: "#eee" },
            horzLines: { color: "#eee" }
        }
    }
);

const platinumSeries = platinumchart.addSeries(LightweightCharts.LineSeries, {
    color: "#8E44AD",
    lineWidth: 3
});

platinumSeries.setData([
    { time: "2023-01-01", value: 20 },
    { time: "2023-02-01", value: 24 },
    { time: "2023-03-01", value: 22 },
    { time: "2023-04-01", value: 30 },
    { time: "2023-05-01", value: 28 },
    { time: "2023-06-01", value: 35 },
    { time: "2023-07-01", value: 38 },
    { time: "2023-08-01", value: 45 },
    { time: "2023-09-01", value: 42 },
    { time: "2023-10-01", value: 50 },
    { time: "2023-11-01", value: 48 },
    { time: "2023-12-01", value: 55 },
    { time: "2024-01-01", value: 60 },
    { time: "2024-02-01", value: 65 },
    { time: "2024-03-01", value: 63 },
    { time: "2024-04-01", value: 72 },
    { time: "2024-05-01", value: 70 },
    { time: "2024-06-01", value: 78 },
    { time: "2024-07-01", value: 80 },
    { time: "2024-08-01", value: 88 },
    { time: "2024-09-01", value: 85 },
    { time: "2024-10-01", value: 95 },
    { time: "2024-11-01", value: 92 },
    { time: "2024-12-01", value: 105 },
    { time: "2025-01-01", value: 100 },
    { time: "2025-02-01", value: 110 },
    { time: "2025-03-01", value: 108 },
    { time: "2025-04-01", value: 120 },
    { time: "2025-05-01", value: 118 },
    { time: "2025-06-01", value: 130 }
]);