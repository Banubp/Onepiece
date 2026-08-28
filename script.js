const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mascot = document.querySelector('.mascot');
const progress = document.querySelector('.progress span');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-nav');
let idleTimer;

function setMascotState(state, label) {
  mascot.dataset.state = state;
  const bubble = mascot.querySelector('.mascot-label');
  if (label) bubble.textContent = label;
}

function wakeMascot() {
  clearTimeout(idleTimer);
  if (!['work', 'send', 'celebrate'].includes(mascot.dataset.state)) setMascotState('awake', 'Banu is here');
  idleTimer = setTimeout(() => setMascotState('sleep', 'Quick recharge'), 8000);
}

function updateScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const ratio = max > 0 ? scrollY / max : 0;
  progress.style.transform = `scaleX(${ratio})`;
  if (!reducedMotion && innerWidth > 760) mascot.style.top = `${16 + ratio * 58}%`;
  wakeMascot();
}

['pointermove', 'keydown', 'touchstart'].forEach(event => window.addEventListener(event, wakeMascot, {passive:true}));
window.addEventListener('scroll', updateScroll, {passive:true});

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('open', !open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('.project').forEach(project => {
  const work = () => setMascotState('work', `Exploring ${project.dataset.project}`);
  const rest = () => { setMascotState('awake', 'Banu is here'); wakeMascot(); };
  project.addEventListener('mouseenter', work);
  project.addEventListener('focusin', work);
  project.addEventListener('mouseleave', rest);
  project.addEventListener('focusout', event => { if (!project.contains(event.relatedTarget)) rest(); });
});

let lastDialogTrigger;
document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => {
  const dialog = document.getElementById(button.dataset.dialog);
  lastDialogTrigger = button;
  dialog.showModal();
  dialog.querySelector('.dialog-close').focus();
}));
document.querySelectorAll('.case-dialog').forEach(dialog => {
  const close = () => { dialog.close(); lastDialogTrigger?.focus(); };
  dialog.querySelector('.dialog-close').addEventListener('click', close);
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
});

document.querySelector('#contact-link').addEventListener('click', () => {
  setMascotState('send', 'Sending your note');
  document.querySelector('#contact-status').textContent = 'Opening your email app…';
  setTimeout(() => {
    setMascotState('celebrate', 'Message ready');
    document.querySelector('#contact-status').textContent = 'Email ready—add your message and send when you’re happy.';
    setTimeout(wakeMascot, 900);
  }, 800);
});

wakeMascot();
updateScroll();
