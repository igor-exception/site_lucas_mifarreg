/* Keyboard and assistive-technology support for Spectral's existing panel. */
(function () {
 'use strict';
 var menu = document.getElementById('menu');
 var toggle = document.querySelector('.menuToggle');
 var close = menu.querySelector('.close');
 var wrapper = document.getElementById('page-wrapper');
 close.setAttribute('aria-label', menu.dataset.closeLabel);
 menu.setAttribute('role', 'dialog');
 menu.setAttribute('aria-modal', 'true');
 var open = false;
 function sync() {
  var next = document.body.classList.contains('is-menu-visible');
  toggle.setAttribute('aria-expanded', String(next));
  menu.inert = !next;
  menu.setAttribute('aria-hidden', String(!next));
  wrapper.inert = next;
  if (next !== open) {
   if (next) menu.querySelector('a').focus();
   else toggle.focus();
  }
  open = next;
 }
 new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['class'] });
 sync();
 menu.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
   document.body.classList.remove('is-menu-visible');
   event.preventDefault();
  }
  if (event.key === 'Tab') {
   var links = menu.querySelectorAll('a');
   var first = links[0], last = links[links.length - 1];
   if (event.shiftKey && document.activeElement === first) { last.focus(); event.preventDefault(); }
   else if (!event.shiftKey && document.activeElement === last) { first.focus(); event.preventDefault(); }
  }
 });
 if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Remove the template's animated scrolling; native anchor navigation remains.
  jQuery('.scrolly').off('click.scrolly');
 }
})();
