//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Oslo',
            population: 958378
        },
        {
            city: 'Bergen',
            population: 250420
        },
        {
            city: 'Stavanger',
            population: 210874
        },
        {
            city: 'Trondheim',
            population: 175068
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};

//call the initialize function when the document has loaded
$(document).ready(initialize);

    //Added below Example 3.6...
    //change the text color
    $('#mydiv').css('color', 'lightBlue');

    //change the text size and alignment
    $('#mydiv').css({
        'font-size': '2em',
        'text-align': 'left'
    });

   //Added below Example 3.8...
    //click listener with anonymous handler function
    $('table').on('click', function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //alias method for the click event listener
    $('table').click(function(){
        alert('Visit Superior and see the big lake!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    $('table').on('click', clickme);

    //remove the event listener
    $('table').off('click', clickme);
