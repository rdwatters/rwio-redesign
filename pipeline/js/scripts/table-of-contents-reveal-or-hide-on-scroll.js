var fullHeight = Math.max(document.documentElement["clientHeight"], document.body["scrollHeight"], document.documentElement["scrollHeight"], document.body["offsetHeight"], document.documentElement["offsetHeight"]);
var toc = document.querySelector('aside.toc');
var tocl = document.querySelectorAll('aside#toc a').length;
if (toc && tocl > 3) {
  window.onscroll = function() {
    var scrollPosition = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollPosition;
    var fromBottom = fullHeight - 800;
    if (scrollPosition < 300 || scrollPosition > fromBottom) {
      document.querySelector('aside.toc').classList.remove('fadeIn');
      document.getElementById('toggle-toc').classList.remove('fadeIn');
    } else if (scrollPosition > 300) {
      document.querySelector('aside.toc').classList.add('fadeIn');
      document.getElementById('toggle-toc').classList.add('fadeIn');
    }
  }
}
