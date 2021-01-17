// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['table']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(pct_populacao);
google.charts.setOnLoadCallback(utentes_enfermeiros_medico);
google.charts.setOnLoadCallback(ind_dependencia);
google.charts.setOnLoadCallback(ind_vitalidade );
google.charts.setOnLoadCallback(custo_medicamento_utilizador);
google.charts.setOnLoadCallback(num_consultas_utilizador);



// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function pct_populacao() {
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
    var chart = new google.visualization.PieChart(document.getElementById('pct_populacao'));
    chart.draw(data, options);
}

function utentes_enfermeiros_medico() {
    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Element', 'Utentes', { role: 'style' }],
        ['Total', 396.8, 'color: red'],
        ['Médicos', 1666.5, 'color: blue'],
        ['Enfermeiros', 1470.5,'color: green']
    ]);
    
    // Set chart options
    var options = {width:500,height:400,legend: { position: "none" },title:"Média de utentes por médico e enfermeiros"};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('utentes_enfermeiros_medico'));
    chart.draw(data, options);
}

function ind_dependencia() {
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
    var chart = new google.visualization.PieChart(document.getElementById('ind_dependencia'));
    chart.draw(data, options);
}
function ind_vitalidade() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Indice de vitalidade');
    data.addRows([
    [116.97919342409]
    ]);
    
    // Set chart options
    var options = {title:'Índice de vitalidade', 
        width:400, 
        height:150
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Table(document.getElementById('ind_vitalidade'));
    chart.draw(data, options);
}
function custo_medicamento_utilizador() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Utilizadores');
    data.addColumn('number', 'Custo médio de medicamentos');
    data.addRows([
        ['Jovens 0-14 anos', 12.1],
        ['Adultos 15-64 anos', 15.3],
        ['Idosos >65 anos', 30.5]
    ]);
    
    // Set chart options
    var options = {title:'Custo médio de medicamentos, por utilizador', 
        width:500, 
        height:400
    };
    
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('custo_medicamento_utilizador'));
    chart.draw(data, options);
}
function num_consultas_utilizador() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Utilizadores');
    data.addColumn('number', 'Número médio de consultas de enfermagem');
    data.addRows([
        ['Jovens 0-14 anos', 1578],
        ['Adultos 15-64 anos', 1345],
        ['Idosos >65 anos', 2512]
    ]);
    
    // Set chart options
    var options = {title:'Número médio de consultas de enfermagem por utilizador', 
        width:500, 
        height:400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('num_consultas_utilizador'));
    chart.draw(data, options);
}