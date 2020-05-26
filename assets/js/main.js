/*
  Open and close header on click on a small window (like mobile browser).
*/
function NavOpen() {
	document.getElementById("site-nav").style.display = "block";
	document.getElementById("site-nav-trigger").getElementsByClassName("icon-bars")[0].style.display = "none";
	document.getElementById("site-nav-trigger").getElementsByClassName("icon-close")[0].style.display = "block";
}

function NavClose() {
	document.getElementById("site-nav").style.display = "none";
	document.getElementById("site-nav-trigger").getElementsByClassName("icon-bars")[0].style.display = "block";
	document.getElementById("site-nav-trigger").getElementsByClassName("icon-close")[0].style.display = "none";
}



/*
  Obfuscate email.
*/
var email = document.getElementById("email");
if (email) {
	email.onclick=function() {
		var u = 'criptowiki';
	    var d = 'protonmail' + '.ch';
	    var e = u+'@'+d;
	    email.innerHTML='<a href="mailto:'+e+'">'+e+'</a>';
	}
}



/*
  Load images as user scrolls through the page. 
  (Not my code. Can't find source. Add it if you find it).
*/
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})