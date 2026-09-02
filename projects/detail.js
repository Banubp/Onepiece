const projects = {
  hobby: {
    title: "Hobby Ghar",
    category: "Community platform",
    label: "Live product design",
    role: "Product Designer · UI/UX",
    period: "Dec 2024—Dec 2025",
    platform: "Responsive product",
    thesis: "Turn an interest into a place to belong.",
    summary:
      "A connected experience for discovering hobbies, joining local communities, finding events and supporting specialist shops.",
    problem:
      "The journey from “I want to try this” to “I belong here” is scattered across social feeds, event listings, messages and stores.",
    goal: "Carry a person’s interest from discovery into participation, community and the tools needed to continue.",
    decisions: [
      [
        "Lead with interests",
        "Organise discovery around pottery, cycling or photography rather than forcing people to choose Events, Clubs or Shops first.",
      ],
      [
        "Expose commitment early",
        "Show time, distance, skill level, group size and what to bring before someone joins.",
      ],
      [
        "Connect commerce to activity",
        "Explain why a product matters to the hobby instead of presenting an unrelated marketplace.",
      ],
    ],
    journey: [
      ["Discover", "Find an approachable interest or nearby activity."],
      ["Participate", "Understand fit and take the first action."],
      ["Belong", "Return to a club, conversation or routine."],
    ],
    craft: [
      "Interest-led information architecture",
      "Responsive card and detail hierarchy",
      "Clear commitment and status copy",
      "Accessible, touch-safe interaction",
    ],
    validation:
      "The role, period and product reasoning can be shown. Original research artifacts, shipped screens and performance outcomes still need source confirmation.",
    reflection:
      "Designing belonging is less about putting communities on a screen and more about reducing uncertainty around the first step.",
    accent: "#f26545",
    soft: "#ffd36a",
    next: "ctf-platform.html",
    nextName: "CTF Platform",
  },
  ctf: {
    title: "CTF Platform",
    category: "Cybersecurity",
    label: "UX + frontend",
    role: "UX Designer · Frontend contributor",
    period: "Project work",
    platform: "Responsive learning platform",
    thesis: "Keep the challenge hard. Make the path clear.",
    summary:
      "A structured environment that helps learners practise security skills through progressive challenges and useful feedback.",
    problem:
      "Security challenges can fail beginners when setup, objectives, progress and feedback are unclear—even when the technical task itself is appropriate.",
    goal: "Separate productive difficulty from interface confusion while preserving exploration and independent problem solving.",
    decisions: [
      [
        "Orient before challenge",
        "Make scope, prerequisites, objective and completion conditions visible without revealing the answer.",
      ],
      [
        "Layer assistance",
        "Offer hints progressively so support appears only when requested and does not remove agency.",
      ],
      [
        "Make progress legible",
        "Connect completed challenges, skill areas and next recommendations into one learning picture.",
      ],
    ],
    journey: [
      ["Choose", "Compare difficulty, skill and prerequisites."],
      ["Attempt", "Work inside a focused challenge environment."],
      ["Learn", "Review evidence, hints and the next skill step."],
    ],
    craft: [
      "Challenge-state architecture",
      "Progressive disclosure for hints",
      "Terminal and task hierarchy",
      "Keyboard and status accessibility",
    ],
    validation:
      "This page documents UX and frontend intent. Completion rates, learning gains and user-test claims will be added only when evidence is available.",
    reflection:
      "A learning interface should remove accidental confusion without removing the friction that creates learning.",
    accent: "#232421",
    soft: "#c8ff4d",
    next: "job-skill.html",
    nextName: "Job & Skill",
  },
  job: {
    title: "Job & Skill",
    category: "Career technology",
    label: "Product concept",
    role: "Product and UI/UX design",
    period: "Concept project",
    platform: "Responsive web",
    thesis: "Turn a job gap into a next step.",
    summary:
      "A career product connecting relevant opportunities with the skills needed to become ready for them.",
    problem:
      "Listings describe requirements but rarely help candidates understand the gap between their current evidence and a desired role.",
    goal: "Translate role requirements into an inspectable skill path without presenting uncertain matching as objective truth.",
    decisions: [
      [
        "Explain the match",
        "Show which evidence supports a role match and which requirements remain uncertain.",
      ],
      [
        "Prioritise gaps",
        "Order missing skills by relevance and effort instead of presenting an overwhelming checklist.",
      ],
      [
        "Connect learning to proof",
        "Recommend practical work that can become portfolio or application evidence.",
      ],
    ],
    journey: [
      ["Explore", "Find roles through goals and existing strengths."],
      ["Understand", "Inspect matched evidence and skill gaps."],
      ["Act", "Choose a realistic learning or proof-building step."],
    ],
    craft: [
      "Explainable match language",
      "Skill-gap prioritisation",
      "Role-to-learning continuity",
      "Uncertainty and correction states",
    ],
    validation:
      "This is a product concept. Match percentages, hiring outcomes and recommendation quality are not presented as achieved results.",
    reflection:
      "Career guidance becomes useful when it explains why a path fits and gives the user control over the evidence.",
    accent: "#5b4fe5",
    soft: "#e2dcff",
    next: "molly.html",
    nextName: "Molly.CO",
  },
  molly: {
    title: "Molly.CO",
    category: "Digital product",
    label: "UI/UX",
    role: "UI/UX design · Frontend collaboration",
    period: "Project work",
    platform: "Responsive web",
    thesis: "One product language across every screen.",
    summary:
      "A responsive product experience shaped through interface design and close design-to-development collaboration.",
    problem:
      "A visual direction can lose coherence when hierarchy, components and responsive behaviour are resolved independently screen by screen.",
    goal: "Create a reusable interface language that protects clarity and identity from design through implementation.",
    decisions: [
      [
        "Design the system early",
        "Define repeated typography, spacing, actions and surface rules before polishing individual pages.",
      ],
      [
        "Let hierarchy transform",
        "Recompose content for narrow screens instead of simply shrinking the desktop layout.",
      ],
      [
        "Specify interaction states",
        "Treat hover, focus, loading and responsive states as part of the component—not implementation extras.",
      ],
    ],
    journey: [
      ["Recognise", "Understand the product and primary action quickly."],
      ["Navigate", "Move through a consistent responsive structure."],
      ["Complete", "Receive clear state and action feedback."],
    ],
    craft: [
      "Responsive type and spacing system",
      "Reusable component states",
      "Design-to-code specifications",
      "Visual consistency review",
    ],
    validation:
      "The page documents interface and collaboration decisions. Final screens and implementation evidence will replace illustrative surfaces when supplied.",
    reflection:
      "The best handoff is not a static screen—it is a shared model of how the product behaves.",
    accent: "#e4547d",
    soft: "#f6c4d1",
    next: "medtrack.html",
    nextName: "MedTrack",
  },
  med: {
    title: "MedTrack",
    category: "Healthcare",
    label: "Mobile UX",
    role: "Mobile product and UX design",
    period: "Concept project",
    platform: "Mobile",
    thesis: "Make the next health action unmistakable.",
    summary:
      "A clearer daily experience for organising medication and recurring health routines.",
    problem:
      "People managing repeated routines need to know what is due, what was completed and what needs attention without interpreting a dense schedule.",
    goal: "Reduce memory burden while preserving clear status, history and the ability to correct mistakes.",
    decisions: [
      [
        "Prioritise the next action",
        "Lead with what is due now while keeping the full day available one level below.",
      ],
      [
        "Make status reversible",
        "Allow accidental completion to be corrected and keep a visible record of changes.",
      ],
      [
        "Design beyond reminders",
        "Show instructions and routine context at the moment they are needed, not only a notification.",
      ],
    ],
    journey: [
      ["Prepare", "See today’s routine and upcoming needs."],
      ["Complete", "Confirm an action with clear feedback."],
      ["Review", "Understand history and correct mistakes."],
    ],
    craft: [
      "Calm daily hierarchy",
      "Completion and correction states",
      "Readable time and instruction patterns",
      "Accessible mobile targets and contrast",
    ],
    validation:
      "MedTrack is a design concept and makes no clinical, adherence or health-outcome claims. Any medical content requires expert validation.",
    reflection:
      "In healthcare, visual calm must come from clear state and recovery—not from hiding important information.",
    accent: "#2e7d61",
    soft: "#bdebd5",
    next: "solar.html",
    nextName: "Solar",
  },
  solar: {
    title: "Solar",
    category: "Sustainability",
    label: "Web experience",
    role: "Web UX and interface design",
    period: "Project work",
    platform: "Responsive web",
    thesis: "Make a technical decision feel inspectable.",
    summary:
      "A web experience that makes residential solar information and choices easier to understand.",
    problem:
      "Solar decisions combine unfamiliar terminology, variable assumptions, installation constraints and savings estimates that are difficult to compare.",
    goal: "Translate technical inputs into a transparent decision path without overstating projected benefits.",
    decisions: [
      [
        "Show assumptions with estimates",
        "Keep location, energy use, tariff and time horizon visible beside projected savings.",
      ],
      [
        "Compare meaningful trade-offs",
        "Frame options through cost, output, space and confidence rather than one headline price.",
      ],
      [
        "Separate estimate from promise",
        "Use clear ranges and explanations so projections are not mistaken for guaranteed outcomes.",
      ],
    ],
    journey: [
      ["Estimate", "Provide enough context for a useful first view."],
      ["Compare", "Understand options and their trade-offs."],
      ["Continue", "Know which details or expert checks come next."],
    ],
    craft: [
      "Transparent estimate language",
      "Comparison information hierarchy",
      "Responsive calculation summaries",
      "Clear caveats and next actions",
    ],
    validation:
      "Any figures shown in the preview are illustrative. Verified calculations, installer data and measured sustainability outcomes require authoritative sources.",
    reflection:
      "Trust grows when a product makes uncertainty visible and helps people understand what changes the answer.",
    accent: "#d69b20",
    soft: "#ffe18c",
    next: "hobby-ghar.html",
    nextName: "Hobby Ghar",
  },
};
const p = projects[document.body.dataset.project],
  root = document.querySelector("#project-root");
document.documentElement.style.setProperty("--accent", p.accent);
document.documentElement.style.setProperty("--soft", p.soft);
const decisions = p.decisions
  .map(
    (d, i) =>
      `<article><small>0${i + 1}</small><h3>${d[0]}</h3><p>${d[1]}</p></article>`,
  )
  .join("");
const journey = p.journey
  .map(
    (j, i) =>
      `<article><small>0${i + 1}</small><h3>${j[0]}</h3><p>${j[1]}</p></article>`,
  )
  .join("");
const craft = p.craft.map((c) => `<li>${c}</li>`).join("");
const motionTiles = Array.from(
  { length: 8 },
  (_, index) => `<i style="--tile:${index}" aria-hidden="true"></i>`,
).join("");
root.innerHTML = `<a class="skip" href="#main">Skip to project</a><div class="progress" aria-hidden="true"><i></i></div><header><a class="brand" href="../"><b>BANU</b><span>/ PRODUCT DESIGNER</span></a><nav aria-label="Primary"><a href="../#projects">Portfolio</a><a href="index.html">All projects</a><a href="#reflection">Next</a></nav></header><main id="main"><section class="detail-hero" id="overview"><div class="hero-copy"><a class="back-link" href="../#projects">← Selected projects</a><p class="kicker">${p.category} · ${p.label}</p><h1>${p.title}</h1><p class="thesis">${p.thesis}</p><p class="summary">${p.summary}</p><div class="meta"><span>Role<b>${p.role}</b></span><span>Timeline<b>${p.period}</b></span><span>Platform<b>${p.platform}</b></span></div></div><div class="hero-panel"><div class="project-motion" aria-hidden="true">${motionTiles}</div><small>PROJECT THESIS</small><strong>${p.thesis}</strong><div class="signal"><i></i><i></i><i></i></div><p>Project reasoning preview · visual mockups will be added when supplied.</p></div></section><nav class="reading-nav" aria-label="On this page"><span>On this page</span><a href="#problem">Problem</a><a href="#decisions">Decisions</a><a href="#walkthrough">Walkthrough</a><a href="#craft">Craft</a><a href="#validation">Validation</a><a href="#reflection">Reflection</a></nav><section class="problem content-section" id="problem"><p class="section-label">01 / Problem and goal</p><div class="problem-grid"><article><small>PROBLEM</small><h2>${p.problem}</h2></article><article><small>PRODUCT GOAL</small><h2>${p.goal}</h2></article></div></section><section class="decision-section content-section" id="decisions"><div class="section-heading"><p class="section-label">02 / Selected decisions</p><h2>What shaped the product.</h2><p>Focused product judgement instead of a generic process timeline.</p></div><div class="decision-grid">${decisions}</div></section><section class="walkthrough content-section" id="walkthrough"><div class="section-heading"><p class="section-label">03 / Product walkthrough</p><h2>From entry to outcome.</h2></div><div class="journey-grid">${journey}</div></section><section class="craft content-section" id="craft"><div><p class="section-label">04 / System and craft</p><h2>How the experience holds together.</h2></div><ul>${craft}</ul></section><section class="validation content-section" id="validation"><p class="section-label">05 / Validation boundary</p><div><h2>Evidence before theatre.</h2><p>${p.validation}</p></div></section><section class="reflection content-section" id="reflection"><p class="section-label">06 / Reflection</p><div><h2>${p.reflection}</h2><a class="next-project" href="${p.next}"><span>Next project</span><strong>${p.nextName}</strong><i>→</i></a></div></section></main><footer><a href="../#projects">← Portfolio projects</a><a href="#overview">Back to top ↑</a></footer>`;
const bar = document.querySelector(".progress i");
const sectionLinks = [...document.querySelectorAll(".reading-nav a")];
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
function updatePage() {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = `${max ? (scrollY / max) * 100 : 0}%`;
  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 180) active = section;
  }
  sectionLinks.forEach((link) => {
    const current = link.hash === `#${active.id}`;
    link.classList.toggle("active", current);
    if (current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
addEventListener("scroll", updatePage, { passive: true });
updatePage();
