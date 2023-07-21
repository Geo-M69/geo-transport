// Parallax animation for background image //

document.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxImage = document.querySelector('.background-image');
    parallaxImage.style.transform = 'translate3d(0, ' + scrollTop * 0.4 + 'px, 0)';
  });

// Services button fade-out animation //

var colorButton = document.querySelector('.services-button');
var originalBackgroundColor = colorButton.style.backgroundColor;
var originalTextColor = colorButton.style.color;

colorButton.addEventListener('mouseenter', function() {
  colorButton.style.backgroundColor = '#A91F1F'; /* New background color on hover */
  colorButton.style.color = '#fff'; /* New text color on hover */
});

colorButton.addEventListener('mouseleave', function() {
  colorButton.style.backgroundColor = originalBackgroundColor; /* Restore original background color */
  colorButton.style.color = originalTextColor; /* Restore original text color */
});

// Taskbar animations when scrolling //

var prevScrollPos = window.pageYOffset;
var taskbar = document.querySelector('.taskbar');

// Event listener for scroll events
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  // Scroll direction detection
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    taskbar.classList.remove('scrolled-down');
    taskbar.classList.add('scrolled-up');
    taskbar.classList.add('show');
  } else {
    // Scrolling down
    taskbar.classList.remove('scrolled-up');
    if (currentScrollPos !== 0) {
      // If not at the top of the page, hide the taskbar
      taskbar.classList.add('scrolled-down');
    }
    taskbar.classList.remove('show');
  }

  prevScrollPos = currentScrollPos;
});

// Event listener for page load
window.addEventListener('load', function() {
  if (window.pageYOffset === 0) {
    // If page is at the top, explicitly show the taskbar
    taskbar.classList.add('show');
  }
});


