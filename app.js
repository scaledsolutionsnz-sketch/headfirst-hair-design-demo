/* Headfirst Hair Design — interactions */
(function () {
  "use strict";

  // Intro overlay fade-out
  var intro = document.querySelector(".intro");
  if (intro) {
    window.addEventListener("load", function () {
      setTimeout(function () { intro.classList.add("done"); }, 900);
    });
    // safety: never trap the page
    setTimeout(function () { intro.classList.add("done"); }, 2600);
  }

  // Nav scroll state
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile nav toggle
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.style.display === "flex";
      links.style.display = open ? "" : "flex";
      links.style.position = "absolute";
      links.style.top = "100%";
      links.style.right = "16px";
      links.style.flexDirection = "column";
      links.style.background = "#fff";
      links.style.padding = open ? "" : "18px 22px";
      links.style.borderRadius = "14px";
      links.style.boxShadow = "0 18px 50px -24px rgba(40,20,28,.35)";
    });
  }

  // Rolling hero
  var slides = document.querySelectorAll(".hero__slide");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove("active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("active");
    }, 6000);
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Footer year
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
