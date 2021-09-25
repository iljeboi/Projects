function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("contact-link").innerHTML = "About";
        document.querySelector("#contact-link").setAttribute("href", "#about");
        document.getElementById("projects-link").innerHTML = "Skills";
        document.querySelector("#projects-link").setAttribute("href", "#skills");
        document.getElementById("skills-link").innerHTML = "Projects";
        document.querySelector("#skills-link").setAttribute("href", "#projects");
        document.getElementById("about-link").innerHTML = "Contact";
        document.querySelector("#about-link").setAttribute("href", "#contact");
    } else {
        x.className = "topnav";
        document.getElementById("contact-link").innerHTML = "Contact";
        document.querySelector("#contact-link").setAttribute("href", "#contact");
        document.getElementById("projects-link").innerHTML = "Projects";
        document.querySelector("#projects-link").setAttribute("href", "#projects");
        document.getElementById("skills-link").innerHTML = "Skills";
        document.querySelector("#skills-link").setAttribute("href", "#skills");
        document.getElementById("about-link").innerHTML = "About";
        document.querySelector("#about-link").setAttribute("href", "#about");
    }
}