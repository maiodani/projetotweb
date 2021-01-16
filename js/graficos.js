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
        ['0-14 anos', 15.12943321],//(3893(população 0-14 anos)/24136(população total))*100
        ['15-64 anos', 69.62628439],//(16805(população 15-64 anos)/24136(população total))*100   
        ['>65 anos', 18.86808088]//(4554(população >65 anos)/24136(população total))*100
        ]);

        // Set chart options
        var options = {title:'Percentagem de população activa, jovem e idosa', 
            width:500, 
            height:400
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }