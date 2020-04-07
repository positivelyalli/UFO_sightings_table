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


tableData.forEach(function(line) {
    console.log(line);
    var row = tbody.append('tr');

    Object.entries(line).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell t the row for each value in line
        var cell = row.append("td");
        cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen for events
// And search through the date/time column to find rows that match user input.

//google how to clear the table after searching and filtering