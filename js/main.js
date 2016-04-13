//Student: Veronica Plum, Spring'16, Geog575, 2/10/2016, module 3

//initialize function called when the script loads
function initialize(){
    debugAjax();
};

function jsAjax(){
    //step1: create request
    var ajaxRequest = new XMLHttpRequest();
    
    //step2: create an event handler to send recieving data to callback function
    //ajaxRequest(object) holds an event listener
    ajaxRequest.onreadystatechange = function(){ //onreadystatechange is an event listener
        //for kicks:
        console.log("readyState: ", ajaxRequest.readyState);
        //whenever readyState gets to 4, the response is recived from the server
        if(ajaxRequest.readyState === 4){ 
            debugCallback(ajaxRequest.response); //changed to debug-callback, line 51
        };
    };
    //Step3: open server connection
    ajaxRequest.open('GET', 'data/MegaCities.geojson', true);
    
    //step4: Set the response data type
    ajaxRequest.responseType = "json";
    
    //step5: Send the request 
    ajaxRequest.send();
};

//define AJAX function
function debugAjax(){
    //basic jQuery ajax method
    var mydata; //declared mydata variable
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){ // response(mydata) is sent to 20, which will next go to line 51
            mydata = response; 

            $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata)); //attaches mydata in the geojson to mydiv, displaying it on the web page. We need this statement here so that it only prints once
        }
    }); 
    //check data
    console.log(mydata); //UNDEFINED, unable to access data here
    //would be unfitting to place a GeoJSON attachment to myDiv here
};

//the debugCallback
function debugCallback(response){ //collects response from line 20, mydata comes from debugAJAX before that (line 34 function) 
    var mydata = response;  //we must reasign mydata, but the data within 'mydata' and the GeoJSON file is passed via the 'response' parameter
    console.log(mydata); //Data can be accessed here via response, mydata reassignment
    //unfiting to place mydiv and GeoJSON mydata relationship statement here as it would display three sets of mydata to the webpage (unnessisary) 
};

//removed countToThree method, since it reassigns 'mydata' and would allow 'mydata' to come out as defined, which it was, but the mydata variable attached to the geoJSON was not accessible here. So it was removed

//computational thinking structure: initalize executed[ln59],debugAjax called[ln5]>debugAjax(mydata is assigned)[ln39]>jsAjax executed[ln60]>jsAjax response begins[ln8]>windowloads on request[ln60] 
$(document).ready(initialize);
console.log(response);
window.onload = jsAjax();
