const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mascot = document.querySelector('.hero-mascot');
const progress = document.querySelector('.page-progress span');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
const eyes = mascot.querySelectorAll('.eye');
let idleTimer;
let scrollTimer;
let previousScroll = 0;
let lockedState = false;

function setMascot(state, duration = 0) {
  if (lockedState && !['send', 'celebrate'].includes(state)) return;
  mascot.dataset.state = state;
  if (duration) {
    lockedState = true;
    window.setTimeout(() => {
      lockedState = false;
      mascot.dataset.state = 'awake';
      scheduleSleep();
    }, duration);
  }
}

function scheduleSleep() {
  window.clearTimeout(idleTimer);
  idleTimer = window.setTimeout(() => setMascot('sleep'), 7000);
}

function wake() {
  if (!lockedState) mascot.dataset.state = 'awake';
  scheduleSleep();
}

function moveEyes(clientX, clientY) {
  if (reducedMotion || mascot.dataset.state === 'sleep') return;
  const box = mascot.getBoundingClientRect();
  const x = Math.max(-1.5, Math.min(1.5, (clientX - (box.left + box.width / 2)) / 45));
  const y = Math.max(-1.2, Math.min(1.2, (clientY - (box.top + box.height / 2)) / 45));
  eyes.forEach(eye => { eye.style.translate = `${x}px ${y}px`; });
}

function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const ratio = max > 0 ? scrollY / max : 0;
  progress.style.transform = `scaleX(${ratio})`;
  const distance = Math.abs(scrollY - previousScroll);
  if (!reducedMotion && distance > 35 && !lockedState) {
    mascot.dataset.state = 'scroll';
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => { mascot.dataset.state = 'awake'; }, 420);
  }
  previousScroll = scrollY;
  scheduleSleep();
}

mascot.addEventListener('mouseenter', () => setMascot('wave', 1700));
mascot.addEventListener('click', () => setMascot('celebrate', 850));
window.addEventListener('pointermove', event => { moveEyes(event.clientX, event.clientY); wake(); }, {passive:true});
window.addEventListener('keydown', wake);
window.addEventListener('touchstart', wake, {passive:true});
window.addEventListener('scroll', onScroll, {passive:true});

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.1});
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

document.querySelectorAll('.case-card').forEach(card => {
  card.style.setProperty('--card-accent', card.dataset.accent);
  const work = () => { lockedState = true; mascot.dataset.state = 'work'; };
  const stop = () => { lockedState = false; mascot.dataset.state = 'awake'; scheduleSleep(); };
  card.addEventListener('mouseenter', work);
  card.addEventListener('focusin', work);
  card.addEventListener('mouseleave', stop);
  card.addEventListener('focusout', event => { if (!card.contains(event.relatedTarget)) stop(); });
});

document.querySelectorAll('.project-tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => setMascot('wave', 900));
  tile.addEventListener('focusin', () => setMascot('wave', 900));
});

let dialogTrigger;
document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => {
  dialogTrigger = button;
  const dialog = document.getElementById(button.dataset.dialog);
  dialog.showModal();
  dialog.querySelector('.dialog-close').focus();
  setMascot('work');
}));

document.querySelectorAll('.case-dialog').forEach(dialog => {
  const closeDialog = () => {
    dialog.close();
    lockedState = false;
    mascot.dataset.state = 'awake';
    dialogTrigger?.focus();
    scheduleSleep();
  };
  dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
  dialog.addEventListener('close', () => {
    lockedState = false;
    mascot.dataset.state = 'awake';
  });
});

document.querySelector('#contact-link').addEventListener('click', () => {
  lockedState = true;
  mascot.dataset.state = 'send';
  document.querySelector('#contact-status').textContent = 'Banu is opening your email app…';
  window.setTimeout(() => {
    mascot.dataset.state = 'celebrate';
    document.querySelector('#contact-status').textContent = 'Your email is ready—add your message and send when you are happy.';
    window.setTimeout(() => { lockedState = false; wake(); }, 800);
  }, 900);
});

wake();
onScroll();
