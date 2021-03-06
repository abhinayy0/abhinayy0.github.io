var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {


    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);





var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var Interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {

    navMenuAnchorTags[i].addEventListener('click', function (event) {
        
        var targetSectionID = this.textContent.trim().toLowerCase();

        var targetSection = document.getElementById(targetSectionID);
      
        if (targetSectionID == 'contact' || targetSectionID == 'home' ){
   			return;
   		}
   		event.preventDefault();
        Interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(Interval);
        return;
    } 
    window.scrollBy(0, 50);
}


