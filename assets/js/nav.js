// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#fs-navigation");
const CShamburgerMenu = document.querySelector("#fs-navigation .fs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("fs-active");
    CSnavbarMenu.classList.toggle("fs-active");
    CSbody.classList.toggle("fs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the fs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#fs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#fs-navigation .fs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('fs-active')
    }
    item.addEventListener('click', onClick)
    }
                            