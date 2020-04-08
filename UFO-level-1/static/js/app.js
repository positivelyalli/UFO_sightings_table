// from data.js
var tableData = data;

// Write code that appends a table to your web pageUsing the UFO dataset of an array of JavaScript objects
//Define columns

// var table = d3.select('table', id='ufo-table').append('table');

var tbody = d3.selectAll('tbody')
    // .data(tableData).enter()


// Then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// tbody.append('tr').attr('class','date').html(function(d) { return d.datetime; });
// tbody.append('tr').attr('class','location').html(function(d) { return d.city; });
// tbody.append('tr').attr('class','location').html(function(d) { return d.state; });
// tbody.append('tr').attr('class','location').html(function(d) { return d.country; });
// tbody.append('tr').attr('class','text').html(function(d) { return d.shape; });
// tbody.append('tr').attr('class','text').html(function(d) { return d.durationMinutes; });
// tbody.append('tr').attr('class','text').html(function(d) { return d.comments; });

function appendTable(ufoData, tbody) {
    ufoData.forEach(function(record) {
        console.log(record);
        // Draw the row in D3
        var row = tbody.append('tr');

        Object.entries(record).forEach(function([key, value]) {
            console.log(key, value);

            // Append a cell for the row for each value in line
            var cell = row.append("td");
            cell.text(value);
        }); 
    });
};

function clearTable(tbody) {
    console.log("clear table");
    tbody.html("");   
};

function drawTable(ufoData, tbody) {
    clearTable(tbody);
    appendTable(ufoData, tbody);
};

drawTable(tableData, tbody);

function filterData(filter, ufoData, tbody) {
    var filteredData = ufoData.filter( function(info) {
        // console.log('INFO', info);

        return info.datetime === filter;
    });

    console.log(filteredData);
    drawTable(filteredData, tbody);
}

// Use a date form in your HTML document and write JavaScript code that will listen for events
// And search through the date/time column to find rows that match user input.
//google how to clear the table after searching and filtering
var button = d3.select("#filter-btn")

button.on("click", function() {

    // Select the input element and get the raw html node
    var inputForm = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputForm.property("value");

    console.log(inputValue);
    console.log(tableData);

    filterData( inputValue, tableData, tbody);

    
});


// ### Level 2: Multiple Search Categories (Optional)

// * Complete all of Level 1 criteria.

// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`;

// tableData.forEach(function(line) {
//     console.log(line);
//     var row = tbody.append('tr');

//     Object.entries(line).forEach(function([key, value]) {
//         console.log(key, value);

//         // Append a cell t the row for each value in line
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
