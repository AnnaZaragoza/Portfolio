//////////////////////////////////////////////////////
// HEADER

const nav = document.querySelector('.nav-bar');
const section1 = document.querySelector('#section-1');
const initialCoods = section1.getBoundingClientRect();

//////////////////////////////////////////////////////
// Menu fade animation
const handleHoverMenuLinks = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.nav-bar').querySelectorAll('.nav-link');
    const logo = link.closest('.nav-bar').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHoverMenuLinks.bind(0.5));
nav.addEventListener('mouseout', handleHoverMenuLinks.bind(1));

//////////////////////////////////////////////////////
// // Sticky navigation - using scroll event

// window.addEventListener("scroll", function () {
//   console.log(initialCoods);
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoods.top - 200)
//     nav.classList.add("nav-bar-sticky");
//   else nav.classList.remove("nav-bar-sticky");
// });

//////////////////////////////////////////////////////
// Sticky navigation bar - using intersection observer API
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('nav-bar-sticky');
  else nav.classList.remove('nav-bar-sticky');
};

const section1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

section1Observer.observe(section1);

//////////////////////////////////////////////////////
// SECTION 1 - ME
const skills = document.querySelector('.me-skills');
const animation1 = document.querySelector('.animation1');
const animation2 = document.querySelectorAll('.animation2');
const animation3 = document.querySelector('.animation3');
const animation4 = document.querySelectorAll('.animation4');
const animation5 = document.querySelectorAll('.animation5');

//////////////////////////////////////////////////////
// Delaying animated icons (from skills section)
setTimeout(() => (skills.style.visibility = 'visible'), 1000);

// Animating icons
function animationIndividualSkills(animation, time) {
  setInterval(
    () => (animation.style.animation = 'wiggle 1.5s ease-in-out'),
    time
  );
}
function animationDobleSkills(animation, time) {
  setInterval(function () {
    Array.from(animation).forEach(
      a => (a.style.animation = 'wiggle 1.5s ease-in-out')
    );
  }, time);
}

animationIndividualSkills(animation1, 5000);
animationIndividualSkills(animation3, 10000);
animationDobleSkills(animation2, 15000);
animationDobleSkills(animation5, 20000);
animationDobleSkills(animation4, 15000);

//////////////////////////////////////////////////////
// Timeline - trying to reproduce this timeline: file:///C:/Users/marde/Pulpit/ANNA/PROGRAMMING/portfolio/new/horizontal-timeline-master/index.html

//////////////////////////////////////////////////////
// SECTION 2 - PROJECTS

const projects = document.querySelectorAll('.project-container');
const modals = document.querySelectorAll('.project-modal--container');
const overlays = document.querySelectorAll('.project-modal--overlay');

const btnsCloseModal = document.querySelectorAll(
  '.project-modal--button-close'
);

const openModal = function (modal) {
  modal.classList.remove('hidden');
};
const closeModal = function (modal) {
  modal.classList.add('hidden');
};

const openOverlay = function (overlay) {
  overlay.classList.remove('hidden');
};
const closeOverlay = function (overlay) {
  overlay.classList.add('hidden');
};

projects.forEach(function (el) {
  el.addEventListener('click', function () {
    const idProject = this.getAttribute('id');

    // Find modal and open it
    modals.forEach(modal => {
      const idModal = [...modal.classList].find(el => el === idProject);
      if (idModal === undefined) return;
      openModal(modal);

      // Find overlay and open it
      overlays.forEach(overlay => {
        const idOverlay = [...overlay.classList].find(el => el === idProject);
        if (idOverlay === undefined) return;
        openModal(overlay);
      });

      //  Get screen to focus on the modal window
      modal.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  });
});

// Close modals
btnsCloseModal.forEach(function (el) {
  el.addEventListener('click', function (e) {
    const btn = e.target;
    const modal = btn.closest('.project-modal--container');
    const overlay = modal
      .closest('.modal')
      .querySelector('.project-modal--overlay');

    closeModal(modal);
    closeOverlay(overlay);
  });
});

//////////////////////////////////////////////////////
// SECTION 3 - CONTACT

const contactIcons = document.querySelectorAll('.contact-icon');

// Handle Hover Contact Icons
const setColor = function (element, color) {
  element.style.color = color;
};

contactIcons.forEach(function (el) {
  el.addEventListener('mouseover', function (e) {
    const id = this.getAttribute('id');
    if (id === 'email') setColor(el, '#cc0000');
    if (id === 'phone') setColor(el, '#008000');
    if (id === 'linkedin') setColor(el, '#0e76a8');
    if (id === 'github') setColor(el, '#171515');
  });
});

contactIcons.forEach(function (el) {
  el.addEventListener('mouseout', function (e) {
    setColor(el, 'rgba(64, 64, 64, 0.9)');
  });
});
