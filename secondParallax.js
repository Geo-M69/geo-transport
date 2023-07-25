var isPC = window.matchMedia("(min-width: 768px)").matches;

if (isPC) {
  document.addEventListener('DOMContentLoaded', function() {
    var parallaxContainer = document.querySelector('.second-background-container');
    var parallaxContent = document.querySelector('.second-background-image');
  
    function scrollParallax() {
      var scrollTop = window.pageYOffset;
      parallaxContent.style.transform = 'translate3d(0, ' + scrollTop * 0.5 + 'px, 0)';
    }
  
    window.addEventListener('scroll', scrollParallax);
  });
}