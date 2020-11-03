//tehtävä 1
document.getElementById("Fetch").addEventListener("click", parseData);
function parseData() {

    var quotes1= document.getElementsByTagName("quotes");
    var firstQuote = quotes1[0];
    var secondQuote = quotes1[1];
    var quoteText = firstQuote.innerHTML;
    var quoteText1 = secondQuote.innerHTML;
    document.getElementsByTagName("div")[7].innerHTML = quoteText.bold() + "<br> "+ quoteText1.bold();
    
}


// tehtävä 2
var url='http://quotes.rest/qod.xml';
document.getElementById("Fetch2").addEventListener("click", parseData1);
function parseData1(){
      // Create AJAX object
      var xmlhttp = new XMLHttpRequest();
      // Specify the data / url to be fetched
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
      xmlhttp.onreadystatechange = function() {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
     // find myDiv and insert results there
        
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
          }
      }
  }
  
 //tehtävä 3 
  var xhttp=new XMLHttpRequest();
  document.getElementById("Fetch3").addEventListener("click", parseData2);
  function parseData2(){
        // Create AJAX object
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            display(this);
            }
        };
  xhttp.open("GET", url, true);
  xhttp.send();
  // Finally we will place the information on screen
  function display(xml) {
    var xmlDoc = xml.responseXML;
    var quot = xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue;
    var auth = xmlDoc.getElementsByTagName("quote")[0].childNodes[0].nodeValue;
    document.getElementsByTagName("td")[3].innerHTML = quot;
    document.getElementsByTagName("td")[2].innerHTML = auth;
}
}

//tehtävä 4
var iltasanomat='https://www.is.fi/rss/tuoreimmat.xml';
var xhttp2=new XMLHttpRequest();
  document.getElementById("Fetch5").addEventListener("click", parseData3);
  function parseData3(){
        // Create AJAX object

        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                display1(this);
            }
        };
  xhttp2.open("GET", iltasanomat, true);
  xhttp2.send();
  // Finally we will place the information on screen
  function display1(xml) {
    var xmlDoc = xml.responseXML;
    var uut1 = xmlDoc.getElementsByTagName("title")[3].childNodes[0].textContent;
    var uut2 = xmlDoc.getElementsByTagName("title")[4].childNodes[0].textContent;
    var uut3 = xmlDoc.getElementsByTagName("title")[5].childNodes[0].textContent;
    document.getElementsByTagName("li")[0].innerHTML = uut1;
    document.getElementsByTagName("li")[1].innerHTML = uut2;
    document.getElementsByTagName("li")[2].innerHTML = uut3;
}
}