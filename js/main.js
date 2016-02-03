//Student: Veronica Plum, Spring'16, Geog575, 2/2/2016 

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    console.log(8);
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
    console.log(31);
    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");
    console.log(37);
    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
    addColumns(cityPop); //calls addColumns, which adds more data to cityPop, and then additionally displayed on the table via mydiv 
    addEvents(); //calls addEvents, such as mouseover and clickme functions
};

    //the text color is assigned to light blue (given there is no mouseover interaction) 
    $('#mydiv').css('color', 'lightBlue');

    //change the text size and alignment
    $('#mydiv').css({
        'font-size': '2em',
        'text-align': 'left'
    });

//this function adds another column to cityPop, adds more attributes to the objects
function addColumns(cityPop){
    console.log(61);
    $("tr").each(function(i){ //for each object in city pop
        if(i==0) {
             $(this).append('<th>City Size</th>'); //labeling the top row
        }else{
        var citySize; //variable used to represent the size of a city
            //cityPop[i-1] object is assigned a 'rating' based on the size of it's population(citySize)a
    		if (cityPop[i-1].population < 100000){ 
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
            //here the citySize
            $(this).append('<td>' + citySize + '</td>'); //adds citySize to cityPop(this) 
        }
    });
};

//this function provides #feedback to the User(#who) 
function addEvents(){
    //this function changes the color of the text as the mouse runs over it
	$("table").mouseover(function(){
		
		var color = "rgb("; //this is the beginning of the color variable 

		for (var i=0; i<3; i++){ //executes the program 3 times(i=0,1,2) to get three integers 0-255 for a color

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){        //separates the three digit color numbers so that color = rgb(###,###,###) or a value                               of a color
				color += ",";
			
			} else {
				color += ")";
		};
	};
            $(this).css('color', color); //applies color to the table(aka this) after color has fully been defined
    });
        
	function clickme() { //clicking on the table area will prompt a message to the user via pop-up
        
		alert('Hey, you clicked me!'); //message #feedback to user(considerationsOfUserAbility) #Who lecture
	};

	$("table").on('click', clickme); //the interaction connected with the above function 
};

//call the initialize function when the document has loaded
$(document).ready(initialize); 
