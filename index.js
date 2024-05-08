let aboutMe = document.getElementById("about");
let contactMe = document.getElementById("contactMe");

//buttons for nav
aboutMe.addEventListener("click", aboutChange);
contactMe.addEventListener("click", contactChange);

function aboutChange(){
    window.location.replace("about.html");
    }
    function contactChange(){
        window.location.replace("ContactMe.html");
        }
    



