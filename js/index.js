// Gallery
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// End of Gallery


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
const Contact = () => {
    let take1 = document.getElementById("Contact").innerHTML;
    document.getElementById("space").innerHTML = take1
}
const Information = () => {
    let take = document.getElementById("Information").innerHTML;
    document.getElementById("space2").innerHTML = take
}

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

// function openSidebar() {
//     if (!sidebarOpen) {
//         sidebar.classList.add('sidebar-responsive');
//         // sidebarOpen = true;
//     } else if (!sidebarOpen) {
//         sidebarOpen = `${style = "display:none"}`
//     }
// }

// function closeSidebar() {
//     if (sidebarOpen) {
//         sidebar.classList.remove('sidebar-responsive');
//         sidebarOpen = false;
//     }
// }


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    let sidebar = document.getElementById("main").style.marginLeft = "250px";
    // if (sidebar) {
    //     document.getElementById("openbtn").style.display = "none";
    // }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    // if (sidebar) {
    //     document.getElementById("openbtn").style.display = "visbile";
    // }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



$('body').toggleClass('loaded');

