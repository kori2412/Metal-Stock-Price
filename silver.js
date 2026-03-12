// Silver Series
const silverchart = LightweightCharts.createChart(
    document.getElementById("silverchart"),
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

const silverSeries = silverchart.addSeries(LightweightCharts.LineSeries, {
    color: "#C0C0C0",
    lineWidth: 3
});

silverSeries.setData([
    { time: "2023-01-01", value: 8 },
    { time: "2023-02-01", value: 12 },
    { time: "2023-03-01", value: 10 },
    { time: "2023-04-01", value: 15 },
    { time: "2023-05-01", value: 14 },
    { time: "2023-06-01", value: 18 },
    { time: "2023-07-01", value: 20 },
    { time: "2023-08-01", value: 24 },
    { time: "2023-09-01", value: 22 },
    { time: "2023-10-01", value: 28 },
    { time: "2023-11-01", value: 26 },
    { time: "2023-12-01", value: 30 },
    { time: "2024-01-01", value: 32 },
    { time: "2024-02-01", value: 35 },
    { time: "2024-03-01", value: 34 },
    { time: "2024-04-01", value: 38 },
    { time: "2024-05-01", value: 36 },
    { time: "2024-06-01", value: 40 },
    { time: "2024-07-01", value: 42 },
    { time: "2024-08-01", value: 46 },
    { time: "2024-09-01", value: 44 },
    { time: "2024-10-01", value: 48 },
    { time: "2024-11-01", value: 50 },
    { time: "2024-12-01", value: 55 },
    { time: "2025-01-01", value: 54 },
    { time: "2025-02-01", value: 60 },
    { time: "2025-03-01", value: 58 },
    { time: "2025-04-01", value: 65 },
    { time: "2025-05-01", value: 63 },
    { time: "2025-06-01", value: 70 }
]);
