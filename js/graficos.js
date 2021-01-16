// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);

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
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
function drawChart2() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Nº de enfermeiros');
    data.addColumn('number', 'Média do número de utentes');
    data.addRows([
    ['4 enfermeiros', 2000]//(3893(população 0-14 anos)/24136(população total))*100

    ]);

    // Set chart options
    var options = {title:'Média de utentes por enfermeiro', 
        width:500, 
        height:400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}
function drawChart3() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Nº de Médicos');
    data.addColumn('number', 'Média do número de utentes');
    data.addRows([
    ['1 médico', 8000]

    ]);

    // Set chart options
    var options = {title:'Média de utentes por médico', 
        width:500, 
        height:400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}