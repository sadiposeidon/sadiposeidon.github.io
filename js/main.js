// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });

// document.addEventListener('keydown', function(e) {
//     if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'p')) {
//         e.preventDefault();
//     } else if (e.key === 'F12') {
//         e.preventDefault();
//     }
// });

// document.addEventListener('mousedown', function(e) {
//     if (e.detail > 1) {
//         e.preventDefault();
//     }
// });

// document.addEventListener('selectstart', function(e) {
//     e.preventDefault();
// });


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-to-top').style.display = "block";
    } else {
        document.querySelector('.scroll-to-top').style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const backgroundTextDiv = document.getElementById("background-text");
    if (backgroundTextDiv) {
        backgroundTextDiv.textContent = "@sadiposeidon";
    }
    document.title = "@sadiposeidon | Java";
});
