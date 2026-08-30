document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.case-nav');

window.toggleCaseNav = trigger => {
  const open = nav.classList.toggle('open');
  trigger.setAttribute('aria-expanded', String(open));
};

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const progress = document.querySelector('.progress span');
function updateProgress() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress?.style.setProperty('transform', `scaleX(${max > 0 ? scrollY / max : 0})`);
}
addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.08});
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const sections = [...document.querySelectorAll('[data-section]')];
const tocLinks = [...document.querySelectorAll('.toc a')];
if (sections.length && tocLinks.length) {
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
    if (!visible) return;
    tocLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-24% 0px -58%',threshold:[0,.15,.4]});
  sections.forEach(section => sectionObserver.observe(section));
}
