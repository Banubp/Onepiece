const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mascot = document.querySelector('.hero-mascot');
const progress = document.querySelector('.page-progress span');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
const mascotCanvas = mascot.querySelector('canvas');
const mascotContext = mascotCanvas.getContext('2d');
const mascotVectorHead = mascot.querySelector('.mascot-vector-head');
const mascotVectorPupils = mascot.querySelector('.mascot-vector-pupils');
const designWord = document.querySelector('#design-word');
let idleTimer;
let scrollTimer;
let previousScroll = 0;
let lockedState = false;
let eyeTarget = {x: 0, y: 0};
let eyePosition = {x: 0, y: 0};
let mascotStateStarted = performance.now();
const directionTarget = {x:0,y:0};
const directionPosition = {x:0,y:0};

const mascotPalette = {ink:'#20211f',skin:'#d7a47f',olive:'#66724d',oliveDark:'#4f593c',cargo:'#b58b59',cargoDark:'#8e6d48',paper:'#f5f2eb',purple:'#6847e8'};

function mascotLine(width = 1.35) {
  mascotContext.lineWidth = width;
  mascotContext.strokeStyle = mascotPalette.ink;
  mascotContext.lineCap = 'round';
  mascotContext.lineJoin = 'round';
}

function mascotShape(fill) {
  mascotContext.fillStyle = fill;
  mascotContext.fill();
  mascotContext.stroke();
}

function drawMascotHead(x, y, sleeping = false, lookingDown = false, blink = false) {
  const c = mascotContext;
  mascotLine();
  c.beginPath(); c.arc(x, y, 8.4, 0, Math.PI * 2); mascotShape(mascotPalette.skin);
  c.fillStyle = mascotPalette.ink;
  c.beginPath(); c.arc(x, y - 2.7, 8.4, Math.PI, Math.PI * 2); c.lineTo(x + 7.4, y - 1); c.quadraticCurveTo(x + 2, y - 7.8, x - 7.8, y - 1); c.fill();
  if (sleeping || blink) {
    mascotLine(1.05); c.beginPath(); c.moveTo(x - 4.4, y + 1); c.lineTo(x - 1.8, y + 1); c.moveTo(x + 1.8, y + 1); c.lineTo(x + 4.4, y + 1); c.stroke();
  } else {
    const dx = lookingDown ? 0 : eyePosition.x; const dy = lookingDown ? 1.1 : eyePosition.y;
    c.fillStyle = mascotPalette.ink; c.beginPath(); c.arc(x - 3.2 + dx, y + .3 + dy, 1, 0, Math.PI * 2); c.arc(x + 3.2 + dx, y + .3 + dy, 1, 0, Math.PI * 2); c.fill();
    mascotLine(.9); c.beginPath(); c.moveTo(x - 5, y - 2.2); c.lineTo(x - 1.8, y - 2.5); c.moveTo(x + 1.8, y - 2.5); c.lineTo(x + 5, y - 2.2); c.stroke();
  }
  mascotLine(.8); c.beginPath(); c.arc(x, y + 2.8, 2.4, .2, Math.PI - .2); c.stroke();
}

function drawMascotAwake(state, time) {
  const c = mascotContext; const wave = state === 'wave' || state === 'celebrate'; const sending = state === 'send'; const bob = Math.sin(time / 420) * .65;
  c.save(); c.translate(0, bob); mascotLine();
  c.fillStyle='rgba(32,33,31,.12)'; c.beginPath(); c.ellipse(35,64,16,2.2,0,0,Math.PI*2); c.fill();
  c.beginPath(); c.roundRect(24,43,10,18,3); mascotShape(mascotPalette.cargo); c.beginPath(); c.roundRect(36,43,10,18,3); mascotShape(mascotPalette.cargo);
  mascotLine(.75); c.beginPath(); c.roundRect(25.5,47,6,5,1); c.roundRect(38.5,47,6,5,1); c.stroke();
  c.beginPath(); c.roundRect(21.5,58,13.5,5,2.5); mascotShape(mascotPalette.ink); c.beginPath(); c.roundRect(35,58,13.5,5,2.5); mascotShape(mascotPalette.ink);
  c.beginPath(); c.roundRect(21,26,28,21,7); mascotShape(mascotPalette.olive);
  c.strokeStyle=mascotPalette.oliveDark; c.beginPath(); c.arc(35,29,7,Math.PI,Math.PI*2); c.stroke();
  mascotLine(.75); c.beginPath(); c.moveTo(32.5,29); c.lineTo(32,36); c.moveTo(37.5,29); c.lineTo(38,36); c.stroke();
  drawMascotHead(35,18,false,false,time % 3400 > 3280);
  mascotLine(4.8); c.strokeStyle=mascotPalette.olive;
  const leftHand={x:wave?17:18,y:wave?17:43}; const rightHand={x:sending?58:(wave?55:52),y:sending?20:(wave?14:43)};
  c.beginPath(); c.moveTo(24,31); c.lineTo(leftHand.x,leftHand.y); c.stroke();
  c.beginPath(); c.moveTo(46,31); c.lineTo(rightHand.x,rightHand.y); c.stroke();
  mascotLine(1); c.fillStyle=mascotPalette.skin; c.beginPath(); c.arc(leftHand.x,leftHand.y,3,0,Math.PI*2); c.fill(); c.strokeStyle=mascotPalette.ink; c.stroke(); c.beginPath(); c.arc(rightHand.x,rightHand.y,3,0,Math.PI*2); c.fill(); c.stroke();
  mascotLine(1.1); c.strokeStyle=mascotPalette.ink;
  if (wave) { c.beginPath(); c.moveTo(55,14); c.lineTo(55,9); c.moveTo(55,11); c.lineTo(51,8); c.moveTo(55,11); c.lineTo(59,8); c.stroke(); }
  if (sending) { const p=Math.min(1,(time-mascotStateStarted)/850); c.fillStyle=mascotPalette.purple; c.beginPath(); c.moveTo(56+p*10,18-p*12); c.lineTo(64+p*10,15-p*12); c.lineTo(60+p*10,22-p*12); c.closePath(); c.fill(); }
  c.restore();
}

function drawMascotWork(time) {
  const c=mascotContext; const tap=Math.sin(time/85)*.7; mascotLine();
  c.fillStyle='rgba(32,33,31,.12)'; c.beginPath(); c.ellipse(35,64,20,2.2,0,0,Math.PI*2); c.fill();
  c.beginPath(); c.roundRect(18,48,19,10,4); mascotShape(mascotPalette.cargo); c.beginPath(); c.roundRect(34,49,20,10,4); mascotShape(mascotPalette.cargo);
  c.beginPath(); c.roundRect(23,25,24,26,7); mascotShape(mascotPalette.olive); drawMascotHead(35,18,false,true,time % 3400 > 3280);
  mascotLine(4.3); c.strokeStyle=mascotPalette.olive; c.beginPath(); c.moveTo(26,35); c.lineTo(30,45+tap); c.moveTo(44,35); c.lineTo(40,45-tap); c.stroke();
  mascotLine(); c.beginPath(); c.moveTo(19,39); c.lineTo(51,39); c.lineTo(48,54); c.lineTo(22,54); c.closePath(); mascotShape('#ddd8ce');
  c.fillStyle=mascotPalette.purple; c.beginPath(); c.arc(35,46,1.8,0,Math.PI*2); c.fill();
}

function drawMascotSleep(time) {
  const c=mascotContext; const breathe=1+Math.sin(time/520)*.025; c.save(); c.translate(35,48); c.scale(breathe,breathe); c.translate(-35,-48); mascotLine();
  c.fillStyle='rgba(32,33,31,.12)'; c.beginPath(); c.ellipse(34,62,19,2.2,0,0,Math.PI*2); c.fill();
  c.beginPath(); c.roundRect(16,43,38,17,8); mascotShape(mascotPalette.cargo); c.beginPath(); c.arc(28,39,17,0,Math.PI*2); mascotShape(mascotPalette.olive);
  c.beginPath(); c.roundRect(13,54,13,6,3); mascotShape(mascotPalette.ink); c.beginPath(); c.roundRect(39,54,13,6,3); mascotShape(mascotPalette.ink);
  c.strokeStyle=mascotPalette.oliveDark; c.beginPath(); c.arc(28,36,11,Math.PI*.9,Math.PI*2.1); c.stroke(); drawMascotHead(28,39,true);
  c.restore(); c.fillStyle=mascotPalette.purple; c.font='600 7px DM Mono'; c.fillText('z',47,31); c.font='600 5px DM Mono'; c.fillText('z',54,25);
}

function renderMascot(time) {
  const c=mascotContext; c.setTransform(2,0,0,2,0,0); c.clearRect(0,0,70,70);
  eyePosition.x += (eyeTarget.x-eyePosition.x)*.14; eyePosition.y += (eyeTarget.y-eyePosition.y)*.14;
  const state=mascot.dataset.state;
  if (state==='sleep') drawMascotSleep(time); else if (state==='work'||state==='scroll') drawMascotWork(time); else drawMascotAwake(state,time);
  requestAnimationFrame(renderMascot);
}

new MutationObserver(() => { mascotStateStarted=performance.now(); }).observe(mascot,{attributes:true,attributeFilter:['data-state']});
requestAnimationFrame(renderMascot);

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
  const box = mascot.getBoundingClientRect();
  const distance = Math.hypot(clientX - (box.left + box.width / 2), clientY - (box.top + box.height / 2));
  eyeTarget.x = Math.max(-1.4, Math.min(1.4, (clientX - (box.left + box.width / 2)) / 42));
  eyeTarget.y = Math.max(-1, Math.min(1, (clientY - (box.top + box.height / 2)) / 42));
  const dx = clientX - (box.left + box.width / 2);
  const dy = clientY - (box.top + box.height / 2);
  const length = Math.max(90, Math.hypot(dx, dy));
  directionTarget.x = Math.max(-1, Math.min(1, dx / length));
  directionTarget.y = Math.max(-1, Math.min(1, dy / length));
  if (distance < 150 && mascot.dataset.state === 'sleep') setMascot('awake');
}

function renderDirectionFrames() {
  directionPosition.x += (directionTarget.x - directionPosition.x) * .085;
  directionPosition.y += (directionTarget.y - directionPosition.y) * .085;
  const x = reducedMotion ? 0 : directionPosition.x;
  const y = reducedMotion ? 0 : directionPosition.y;
  mascotVectorHead.style.transform = `translate(${(x*4).toFixed(2)}px, ${(y*2.5).toFixed(2)}px) rotate(${(x*5).toFixed(2)}deg)`;
  mascotVectorPupils.style.transform = `translate(${(x*2.7).toFixed(2)}px, ${(y*2).toFixed(2)}px)`;
  requestAnimationFrame(renderDirectionFrames);
}

requestAnimationFrame(renderDirectionFrames);

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
window.addEventListener('pointermove', event => { moveEyes(event.clientX, event.clientY); scheduleSleep(); }, {passive:true});
window.addEventListener('keydown', wake);
window.addEventListener('touchstart', wake, {passive:true});
window.addEventListener('scroll', onScroll, {passive:true});

window.togglePrimaryNav = () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
};
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
  const stop = () => {
    lockedState = false;
    mascot.dataset.state = 'awake';
    card.style.setProperty('--mx', '0px');
    card.style.setProperty('--my', '0px');
    scheduleSleep();
  };
  card.addEventListener('pointermove', event => {
    if (reducedMotion || event.pointerType === 'touch') return;
    const box = card.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width - .5) * 12;
    const y = ((event.clientY - box.top) / box.height - .5) * 10;
    card.style.setProperty('--mx', `${x.toFixed(2)}px`);
    card.style.setProperty('--my', `${y.toFixed(2)}px`);
  }, {passive:true});
  card.addEventListener('mouseenter', work);
  card.addEventListener('focusin', work);
  card.addEventListener('mouseleave', stop);
  card.addEventListener('focusout', event => { if (!card.contains(event.relatedTarget)) stop(); });
});

document.querySelectorAll('.project-tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => setMascot('wave', 900));
  tile.addEventListener('focusin', () => setMascot('wave', 900));
});

const sherlockCards = [...document.querySelectorAll('.sherlock-card')];
sherlockCards.forEach(card => {
  card.addEventListener('mouseenter', () => setMascot('wave', 750));
  card.addEventListener('focus', () => setMascot('wave', 750));
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

mascot.dataset.state = 'sleep';
scheduleSleep();
onScroll();

if (!reducedMotion && designWord) {
  const words = ['obvious.', 'intuitive.', 'trustworthy.', 'human.'];
  let wordIndex = 0;
  window.setInterval(() => {
    designWord.classList.add('changing');
    window.setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      designWord.textContent = words[wordIndex];
      designWord.classList.remove('changing');
    }, 150);
  }, 1800);
}
