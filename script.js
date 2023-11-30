// Script for navigation bar



var bar = document.getElementsByClassName("bar")[0];
var nav = document.getElementsByClassName("navbar")[0];

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

const close = document.getElementsByClassName("close")[0];

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}




// remove table data


const removeLinks = document.querySelectorAll('.remove-row');


removeLinks.forEach(link => {
 
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const row = this.closest('tr'); 
        row.parentNode.removeChild(row); 
    });
});


// get  data contact form

const form = document.querySelector("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const msg = document.getElementById("msg")

form.addEventListener("submit", (e)=>{
     e.preventDefault()
     console.log(name.value);
     console.log(email.value);
     console.log(subject.value);
     console.log(msg.value);

     name.value ="";
     email.value = "";
     subject.value = "";
     msg.value = "";



})

