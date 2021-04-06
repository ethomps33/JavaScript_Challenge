// from data.js
var tableData = data;
//selecting the area of HTML that you want to create the 
var table = d3.select("tbody");

function make_table(data) {
    table.html("")
    data.forEach((table_row) => {
        var row = table.append("tr");
        Object.values(table_row).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    }
    );
};
function date_click() {
var input_date = d3.select("#datetime").property("value");

var new_data = tableData;
var new_data = new_data.filter(table_row => table_row.datetime == input_date);

make_table(new_data);
d3.select("#datetime").node().value = "";
};


// Multiple Search Categories

function city_click() {
    var input_city = d3.select("city").property("value");
    
    var new_data = tableData;
    var new_data = new_data.filter(table_row => table_row.city == input_city);
    
    make_table(new_data);
    d3.select("#city").node().value = "";
    };
    


function state_click() {
    var input_state = d3.select("#state").property("value");
    
    var new_data = tableData;
    var new_data = new_data.filter(table_row => table_row.state == input_state);
    
    make_table(new_data);
    d3.select("#state").node().value = "";
    };
  


function country_click() {
    var input_country = d3.select("#country").property("value");
    
    var new_data = tableData;
    var new_data = new_data.filter(table_row => table_row.country == input_country);
    
    make_table(new_data);
    d3.select("#country").node().value = "";
    };

    
function shape_click() {
    var input_shape = d3.select("#shape").property("value");
    
    var new_data = tableData;
    var new_data = new_data.filter(table_row => table_row.shape == input_shape);
    
    make_table(new_data);
    d3.select("#shape").node().value = "";
    };
// d3.select("#filter-btn").on("click", date_click);
d3.select("#filter-btn").on("click", shape_click);
// d3.select("#filter-btn").on("click", country_click);
// d3.select("#filter-btn").on("click", state_click);
// d3.select("#filter-btn").on("click", city_click);
    
make_table(tableData);