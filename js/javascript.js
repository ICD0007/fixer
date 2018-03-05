//var
var send = document.getElementById('send');
var nam = document.getElementById('name');
var mail = document.getElementById('mail');
var subject = document.getElementById('subject');
var yourmessage = document.getElementById('message');
var redbutton = document.getElementById('knopf');

//Task 1:
document.getElementById('navbar-over').onmouseover = function(){
	document.getElementById('navbar-over').style.backgroundColor = "black";
}; 

document.getElementById('navbar-over').onmouseout = function(){
	document.getElementById('navbar-over').style.backgroundColor = "#383E4C";
};

// Task 2: When I click the send button in the contact form I want to see all the information entered into the box popped up in an alert box &
// Task 3: If any field is missing/empty when user clicks submit button on contact form, pop up and alert box saying the name of the missing field/fields

window.onload = function(){
    send.onclick = function(){
        if(nam.value === '' || mail.value === '' || subject.value === '' || yourmessage.value === ''){
        alert("Field missing");
        }else{
        alert(nam.value)
        alert(mail.value)
        alert(subject.value)
        alert(yourmessage.value);
        }
    }
}

// Task 4: On click of the green button, change the text of the button to a different text and the color of the button to a different colour 

document.getElementById("gb").onclick = function(){
    document.getElementById("gb").style.backgroundColor = "black"
    document.getElementById("gb").style.fontFamily =  "WildWest";
}

// Task 5: Link one of the div buttons to your public Facebook or Github profile (feel free to select any button you live" 

redbutton.onclick = function(){
    window.location='https://github.com/maxkandzia';
}