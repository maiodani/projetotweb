// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart6);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Idades');
    data.addColumn('number', 'Percentagem');
    data.addRows([
    ['Jovem 0-14 anos', 15.12943321],//(3893(população 0-14 anos)/24136(população total))*100
    ['Activa 15-64 anos', 69.62628439],//(16805(população 15-64 anos)/24136(população total))*100   
    ['Idosa >65 anos', 18.86808088]//(4554(população >65 anos)/24136(população total))*100
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
    data.addColumn('number', 'Número de utentes');
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
function drawChart4() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Populaçao (0-14 anos)+(65+ anos)');
    data.addColumn('number', 'Populaçao 15-64 anos');
    data.addRows([
    ['Dependência total', 50.26480214221958],//((3893(população 0-14 anos)+4554(população >65 anos))/16805(população 15-64 anos))*100
    ['Dependência jovens', 23.16572448675989],//(3893(população 0-14 anos)/16805(população 15-64 anos))*100
    ['Dependência idosos', 27.09907765545968]//(4554(população >65 anos)/16805(população 15-64 anos))*100
    ]);


    // Set chart options
    var options = {title:'Índice de dependência total, jovens, idosos', 
        width:500, 
        height:400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div4'));
    chart.draw(data, options);
}
function drawChart5() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Populaçao 65+ anos');
    data.addColumn('number', 'Populaçao 0-14');
    data.addRows([
    ['Indice de vitalidade', 116.97919342409]
    ]);
    

    // Set chart options
    var options = {title:'Índice de vitalidade', 
        width:500, 
        height:400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div5'));
    chart.draw(data, options);
}
function drawChart6() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Número de consultas de enfermagem em planeamento familiar');//1790
    data.addColumn('number', 'Número de utilizadores em planeamento familiar');//250
    data.addRows([
    ['Média de consultas de enfermagem em planeamento familiar', 7.16]
    ]);
    

    // Set chart options
    var options = {title:'Média de consultas de enfermagem em planeamento familiar', 
        width:500, 
        height:400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div6'));
    chart.draw(data, options);
}