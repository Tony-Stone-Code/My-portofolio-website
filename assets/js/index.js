/*=============== TESTIMONIAL SWIPER ===============*/
// Simple manual testimonial slider (no external library dependency)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial__card');
const paginationContainer = document.querySelector('.swiper-pagination');

if (testimonials.length > 0 && paginationContainer) {
   // Create pagination bullets
   testimonials.forEach((_, index) => {
      const bullet = document.createElement('span');
      bullet.className = 'swiper-pagination-bullet';
      if (index === 0) bullet.classList.add('swiper-pagination-bullet-active');
      bullet.addEventListener('click', () => goToTestimonial(index));
      paginationContainer.appendChild(bullet);
   });

   function goToTestimonial(index) {
      currentTestimonial = index;
      testimonials.forEach((card, i) => {
         card.style.display = i === index ? 'block' : 'none';
      });
      
      document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, i) => {
         bullet.classList.toggle('swiper-pagination-bullet-active', i === index);
      });
   }

   // Initialize - show only first testimonial
   goToTestimonial(0);

   // Auto-rotate testimonials every 5 seconds
   setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      goToTestimonial(currentTestimonial);
   }, 5000);
}

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
   jobTitleElement.style.transition = 'opacity 0.3s ease';
   
   setInterval(() => {
      titleIndex = (titleIndex + 1) % jobTitles.length;
      jobTitleElement.style.opacity = '0';
      
      setTimeout(() => {
         jobTitleElement.textContent = jobTitles[titleIndex];
         jobTitleElement.style.opacity = '1';
      }, 300);
   }, 3000);
}
