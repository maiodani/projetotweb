 // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Idades');
        data.addColumn('number', 'Percentagem');
        data.addRows([
        ['0-14 anos', 15.4],
        ['15-24 anos', 10.6],
        ['25-64 anos', 56],
        ['>65 anos', 18.03]
        ]);

        // Set chart options
        var options = {title:'Percentagem de população activa', 
            width:500, 
            height:400
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }