
// open side nav
function toggleNav () {

  const btn = document.querySelector('label.hamburger-btn');
  const drw = document.querySelector('#nav-drawer');

  btn.addEventListener("click", function() {
    drw.style.cssText += 'transform: translateX(0)'; 
  });

}

toggleNav();

// close side nav
function closeNav () {

  const btn = document.querySelector('.material-icons.close');
  const drw = document.querySelector('#nav-drawer');

  btn.addEventListener("click", function() {
    drw.style.cssText += 'transform: translateX(100%)'; 
  });

}

closeNav();


function accordion() {
  // Listen for click on the document
  document.addEventListener('click', function (event) {
    
    //Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains('accordion-toggle')) return;
    
    // Get the target content
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    
    // Prevent default link behavior
    event.preventDefault();
    
    // If the content is already expanded, collapse it and quit
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      return;
    }
    
    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    // Toggle our content
    content.classList.toggle('active');
  })
}

accordion();

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
