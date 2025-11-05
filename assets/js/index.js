/*=============== TESTIMONIAL SWIPER ===============*/
const testimonialSwiper = new Swiper('.testimonial__swiper', {
   loop: true,
   spaceBetween: 32,
   grabCursor: true,
   
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 48,
      },
   },
});

/*=============== JOB TITLE ANIMATION ===============*/
const jobTitles = [
   'Full Stack Data Scientist',
   'Python Developer',
   'Machine Learning Engineer',
   'Data Analyst',
   'AI Enthusiast',
   'Web Developer'
];

let titleIndex = 0;
const jobTitleElement = document.getElementById('job-title');

if (jobTitleElement) {
   setInterval(() => {
      titleIndex = (titleIndex + 1) % jobTitles.length;
      jobTitleElement.style.opacity = '0';
      
      setTimeout(() => {
         jobTitleElement.textContent = jobTitles[titleIndex];
         jobTitleElement.style.opacity = '1';
      }, 300);
   }, 3000);
}

/*=============== SCROLL REVEAL LIBRARY ===============*/
const ScrollReveal = (function() {
   return {
      reveal: function(selector, options) {
         const elements = document.querySelectorAll(selector);
         const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
               }
            });
         }, { threshold: 0.1 });
         
         elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = `translateY(${options.distance || '60px'})`;
            el.style.transition = `all ${options.duration || 2500}ms ease ${options.delay || 400}ms`;
            observer.observe(el);
         });
      }
   };
})();
