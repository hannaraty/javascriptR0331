// tehtävä 1
function getData()    {
    var maili = document.getElementsByTagName("input")[0].value;
    var comment = document.getElementsByTagName("textarea")[0].value;
    var maili1 = document.getElementsByTagName("input")[0];
    var comment1 = document.getElementsByTagName("textarea")[0];
     
    var pituus=maili.length;
    var merkki=maili.lastIndexOf("@");
    var commentPituus=comment.length;
     
    if(pituus>=6 && pituus<15 && merkki!=-1 && commentPituus<50 && commentPituus>0){
     
            alert("Data entered: " + maili + " " + comment);
     
    }else if(pituus<6||pituus>15){
            maili1.style.borderColor="red";
            var h = document.createElement("b");
            var t = document.createTextNode("* Please fill email properly");
    
            h.appendChild(t);
            document.getElementById('feedback').appendChild(h); 
            return false;
    }
    else if(commentPituus > 50 || commentPituus < 1){
        comment1.style.borderColor="red";
        var h = document.createElement("b");
        var t = document.createTextNode("* Please fill textarea properly");
        h.appendChild(t);
        document.getElementById('feedback2').appendChild(h);
         return false;
    }
        
    }
    
    // tehtävä 2
    
    
var element = document.getElementById('submit');
function laske(){
	var vuosi=document.getElementById('years').value;
	var tulos=document.getElementById('cost');
	var tyyppi=document.getElementById('type').value;
	var basic="basic";
	var gold="gold";
	var premium="premium";
	var platinum="platinum";
	var numero;
 
        if(vuosi > 2) {
                var t = document.createTextNode("You get a discount!");
                document.getElementById('theForm').appendChild(t);
        }     
        
	        if(tyyppi==basic&&vuosi<3){
		numero=10;
                tulos.value=vuosi*numero;
                
	}       if (tyyppi==basic&&vuosi>2 && vuosi < 5){
		numero=10;
                tulos.value=vuosi*numero*0.8;
                }
                        else if (tyyppi ==basic && vuosi > 4) {
                        numero=10;
		        tulos.value=vuosi*numero*0.8-5;
                        }
        
        
                if(tyyppi==gold&&vuosi<3){
		numero=20;
                tulos.value=vuosi*numero;
                
	}       if (tyyppi==gold&&vuosi>2 && vuosi < 5){
		numero=20;
                tulos.value=vuosi*numero*0.8;
                }
                        else if(tyyppi == gold && vuosi > 4) {
                        numero=15;
		        tulos.value=vuosi*numero*0.8-5;
                        }
        
        
                if (tyyppi==premium&&vuosi<3){
		numero=15;
                tulos.value=vuosi*numero;
                
	}       if (tyyppi==premium&&vuosi>2 && vuosi < 5){
		numero=15;
                tulos.value=vuosi*numero*0.8;
                }               
                        else if(tyyppi == premium && vuosi > 4) {
                        numero=20;
                        tulos.value=vuosi*numero*0.8-5;
                        }
	
	        if(tyyppi==platinum&&vuosi<3){
		numero=25;
		tulos.value=vuosi*numero;
	}       if (tyyppi==platinum&&vuosi>2 && vuosi < 5){
		numero=25;
		tulos.value=vuosi*numero*0.8;
                 }               
                        else if(tyyppi == platinum && vuosi > 4) {
                        numero=25;
                        tulos.value=vuosi*numero*0.8-5;
                }
	return false;
}
 
element.addEventListener("submit", init());
function init(){
var theForm = document.getElementById('theForm');
    theForm.onsubmit = laske;
}
window.onload = init;
// tehtävä 4

var p = document.getElementById("typeEmail");
p.style.display = "none";
var l = document.getElementById("typePhone");
l.style.display = "none";
var m = document.getElementById("typeSms");
m.style.display = "none";

function showExtra() {
        var showEmail = document.getElementById("typeEmail");
        var showPhone = document.getElementById("typePhone");
        var showSms = document.getElementById("typeSms");
        var checkBox = document.forms.formi1.email1.checked;
        var checkBox1 = document.forms.formi1.phone.checked;
        var checkBox2 = document.forms.formi1.sms.checked;
       
        if(!checkBox) {
                showEmail.style.display = "none";
        } else {
                showEmail.style.display ="block";
        }
        if(!checkBox1) {
                showPhone.style.display = "none";
        } else {
                showPhone.style.display ="block";
        }
        if(!checkBox2) {
                showSms.style.display = "none";
        } else {
                showSms.style.display ="block";
        }
}