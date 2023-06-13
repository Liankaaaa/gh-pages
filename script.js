window.addEventListener('load', () => {
    const temperatureData = [
        { time: "3:13", tempDiff: 80.60 - 26.40, food: "Walnuts" },
        { time: "1:57", tempDiff: 82.10 - 22.80, food: "Walnuts" },
        { time: "2:07", tempDiff: 76.70 - 23.30, food: "Walnuts" },
        { time: "2:31", tempDiff: 68.80 - 23.10, food: "Quinoa Crackers" },
        { time: "1:36", tempDiff: 66.60 - 23.40, food: "Quinoa Crackers" },
        { time: "1:52", tempDiff: 41.70 - 23.00, food: "Plasma Cookies" },
        { time: "2:40", tempDiff: 39.40 - 23.30, food: "Plasma Cookies" },
        { time: "2:20", tempDiff: 35.50 - 32.50, food: "Plasma Cookies" }
    ];

    const massData = [
        { time: "3:13", massDiff: 3.39 - 2.05, food: "Walnuts" },
        { time: "1:57", massDiff: 3.29 - 1.54, food: "Walnuts" },
        { time: "2:07", massDiff: 2.95 - 1.02, food: "Walnuts" },
        { time: "2:31", massDiff: 2.72 - 0.59, food: "Quinoa Crackers" },
        { time: "1:36", massDiff: 2.68 - 0.58, food: "Quinoa Crackers" },
        { time: "1:52", massDiff: 1.17 - 0.67, food: "Plasma Cookies" },
        { time: "2:40", massDiff: 1.96 - 1.25, food: "Plasma Cookies" },
        { time: "2:20", massDiff: 1.65 - 0.81, food: "Plasma Cookies" }
    ];

    const chart1 = document.getElementById('chart1');
    const ctx1 = document.createElement('canvas').getContext('2d');
    chart1.appendChild(ctx1.canvas);

    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: temperatureData.map(entry => entry.time),
            datasets: [{
                label: 'Temperature Difference (°C)',
                data: temperatureData.map(entry => entry.tempDiff),
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (minutes)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Temperature Difference (°C)'
                    }
                }
            }
        }
    });

    const chart2 = document.getElementById('chart2');
    const ctx2 = document.createElement('canvas').getContext('2d');
    chart2.appendChild(ctx2.canvas);

    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: massData.map(entry => entry.time),
            datasets: [{
                label: 'Mass Difference (g)',
                data: massData.map(entry => entry.massDiff),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (minutes)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Mass Difference (g)'
                    }
                }
            }
        }
    });
});
