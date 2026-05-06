const root = document.documentElement;
const themeToggleButton = document.querySelector('.theme-toggle');
const navToggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');

const data = {
  impact: [
    {
      title: 'Innovation Programs',
      detail: 'Nodal Officer, IEDC SJCET Palai (2015–Present)',
      description:
        'Guides student founders and faculty innovators across Kerala Startup Mission initiatives, from early ideation to investor showcases.',
    },
    {
      title: 'IEEE Kerala Leadership',
      detail: 'Vice Chair, IEEE Computer Society Kerala Chapter',
      description:
        'Designs statewide professional development roadmaps and hackathons that empower 5K+ members and faculty advisors across Kerala’s campuses.',
    },
    {
      title: 'GTech μLearn Community',
      detail: 'Lead Enabler, μLearn',
      description:
        'Architects peer-learning challenges and innovation quests that connect Kerala’s student makers with mentors, startup missions, and AI-first opportunities.',
    },
    {
      title: 'Community Reach',
      detail: '6K+ followers • 500+ connections',
      description:
        'Creates visibility for early founders by amplifying success stories, opportunities, and ecosystem calls-to-action.',
    },
  ],
  projects: [
    {
      title: 'SJCET Palai WordPress Presence',
      role: 'WordPress Developer',
      description:
        'Leads the public-facing sjcetpalai.ac.in digital experience through custom theming, CMS governance, and impactful community storytelling for the college.',
      link: 'https://sjcetpalai.ac.in',
    },
    {
      title: 'GitHub Knowledge Base',
      role: 'Open-source maintainer',
      description:
        'Maintains 60+ repositories spanning Java, Python, and curriculum starter kits that support KTU-aligned coursework and student clubs.',
      link: 'https://github.com/sarjus',
    },
    {
      title: 'SJCET LMS Portal',
      role: 'Product designer & builder',
      description:
        'Ships cselms.sjcetpalai.ac.in as a secure, scalable learning management system for Computer Science students and faculty, supporting analytics, mentorship, and digital coursework delivery.',
      link: 'https://cselms.sjcetpalai.ac.in',
    },
    {
      title: 'SIIF Incubator Platform',
      role: 'Platform architect & DevOps builder',
      description:
        'Built and maintains siifincubator.org on a VPS with Coolify-based deployment and a self-hosted Supabase stack for scalable data, auth, and backend workflows.',
      link: 'https://siifincubator.org/',
    },
    {
      title: 'Admissions Automation Suite',
      role: 'Platform architect',
      description:
        'Builds admission.sjcetpalai.ac.in, streamlining multi-step intake, preference capture, and communications for thousands of applicants.',
      link: 'https://admission.sjcetpalai.ac.in/',
    },
    {
      title: 'SJCET Repository Portal',
      role: 'Software designer & Developer',
      description:
        'repo.sjcetpalai.ac.in leads the Paperless Campus initiative — a project built to significantly reduce paper usage by providing a digital repository that enables efficient storage and retrieval of faculty course files with secure, authenticated access.',
      link: 'https://repo.sjcetpalai.ac.in/login',
    },
    {
      title: 'NBA CO Attainment Toolkit',
      role: 'Excel macro engineer',
      description:
        'Ships a VBA-powered workbook that lets faculty compute CO-PO attainment in minutes, complete with reusable templates and automated reporting.',
      link: 'https://github.com/sarjus/NBA-CO-Attainment',
    },
  ],
  experience: [
    {
      role: 'CEO, SJCET Innovation and Incubation Foundation (SIIF) Incubator',
      org: 'SJCET Innovation and Incubation Foundation (SIIF)',
      period: 'Present',
      highlights: [
        'Leads the institutional incubator strategy, founder support systems, and innovation partnerships.',
        'Builds pathways for student ventures from ideation to incubation, validation, and growth.',
      ],
    },
    {
      role: 'Computer Science Professor & Innovation Lead',
      org: "St. Joseph's College of Engineering and Technology, Palai",
      period: '2009 — Present',
      highlights: [
        'Builds experiential curricula that blend research, product thinking, and competition prep.',
        'Guides hundreds of student founders from idea validation to funded prototypes each year.',
      ],
    },
    {
      role: 'Startup Bootcamp Nodal Officer',
      org: 'Kerala Startup Mission · SJCET',
      period: '2015 — Present',
      highlights: [
        'Runs the Innovation & Entrepreneurship Development Center and statewide demo programs.',
        'Connects campus teams with grants, mentors, and industry partners for rapid scaling.',
      ],
    },
    {
      role: 'IEEE & Kerala Ecosystem Leadership',
      org: 'Vice Chair, IEEE CS Kerala Chapter & Faculty Advisor, IEEE SJCET',
      period: '2014 — Present',
      highlights: [
        'Chairs professional development roadmaps that empower 5K+ members and faculty advisors.',
        'Curates hackathons and research summits that champion inclusive innovation.',
      ],
    },
    {
      role: 'Community Architect',
      org: 'GTech μLearn · Google Developer Student Clubs · Slate “N” Pencil',
      period: '2016 — Present',
      highlights: [
        'Designs peer-learning challenges, storytelling labs, and AI-first bootcamps for students.',
        'Hosts build sprints that keep Kerala campuses plugged into global tech ecosystems.',
      ],
    },
    {
      role: 'Open-source & GitHub Advisor',
      org: 'GitHub (sarjus) · GitHub Campus Program',
      period: '2015 — Present',
      highlights: [
        'Maintains 60+ public repositories used across KTU-aligned coursework and clubs.',
        'Helps institutions adopt GitHub Classroom, Actions, and Codespaces with best practices.',
      ],
    },
    {
      role: 'Industry Foundation',
      org: 'Ernst & Young · SPM ITC, Paravur',
      period: '2004 — 2009',
      highlights: [
        'Engineered enterprise-grade software at EY, shaping a quality-first mindset.',
        'Began career as an instructor, introducing project-first pedagogy to young engineers.',
      ],
    },
  ],
  education: [
    {
      role: 'Master of Engineering · Computer Science',
      org: 'KCG College of Technology',
      period: '2012 — 2014',
      highlights: ['Research focused on scalable distributed systems and trustworthy computing.'],
    },
    {
      role: 'Bachelor of Technology',
      org: 'Engineering foundation in emerging technologies',
      period: 'Pre-2012',
      highlights: ['Laid the groundwork for combining pedagogy with practical innovation.'],
    },
  ],
  volunteer: [
    {
      title: 'Nodal Officer, IEDC SJCET Palai',
      org: 'Kerala Startup Mission',
      period: 'Mar 2015 — Present',
      description: 'Leads student innovation labs, grant submissions, and statewide demo days.',
    },
    {
      title: 'Professional Organizer',
      org: 'Startup Weekend (Techstars + Google for Startups)',
      period: 'Feb 2020 — Present',
      description:
        'Curates facilitators, mentors, and judges to help weekend founders deliver investment-ready demos.',
    },
    {
      title: 'GitHub Campus Advisor',
      org: 'GitHub Education',
      period: 'Se 2020 — Present',
      description:
        'Helps institutions adopt GitHub Classroom, Actions, and Codespaces with best practices.',
    },
  ],
  awards: [
    {
      title: '2 Million+ Karma Achiever -Institutional Category',
      issuer: 'GTECH μLearn',
      year: 'Mar 2025',
    },
    {
      title: 'Top Lead Enabler 2024',
      issuer: 'GTECH μLearn',
      year: 'Mar 2025',
    },
     {
      title: '1 Million+ Karma Achiever -Institutional Category',
      issuer: 'GTECH μLearn',
      year: 'Mar 2024',
    },
    {
      title: 'Top 5 Karma — Enabler Category',
      issuer: 'GTECH μLearn',
      year: 'Mar 2024',
    },
    {
      title: 'Top Performing Facilitator — YIP 4.0',
      issuer: 'Kerala Development and Innovation Strategic Council (K-DISC)',
      year: 'Mar 2023',
    },
    {
      title: 'Smart India Hackathon — Winners & Inspiration Awards',
      issuer: 'MHRD, AICTE',
      year: '2018,2019',
    },
    {
      title: 'Entrepreneurship Enabler Award',
      issuer: 'Kerala Startup Mission',
      year: '2018',
    },
    {
      title: 'ICT TECHATHLON Champion Mentor',
      issuer: 'ICT Academy of Kerala',
      year: '2017',
    },
    {
      title: 'C.V. Raman Research Award',
      issuer: 'The Institution of Engineering and Technology',
      year: '2013',
    },
    {
      title: 'IBM Drona Award',
      issuer: 'IBM India',
      year: '2011',
    },
  ],
  certifications: [
    {
      title: 'Python for Everybody Specialization',
      issuer: 'Coursera',
      year: 'Mar 2020',
      credential: '6MEL8AE4QV48',
    },
    {
      title: 'Programming for Everybody',
      issuer: 'Coursera',
      year: 'Mar 2020',
      credential: 'N34NVPS7GSTA',
    },
    {
      title: 'Python Data Structures',
      issuer: 'Coursera',
      year: 'Mar 2020',
      credential: 'N7LLKXZ7PH6H',
    },
    {
      title: 'Using Databases with Python',
      issuer: 'Coursera',
      year: 'Mar 2020',
      credential: 'FUUUXH4GKKZ4',
    },
    {
      title: 'Python Programming: A Concise Introduction',
      issuer: 'Coursera',
      year: 'Apr 2020',
      credential: 'TJMGGDZ8YQ5K',
    },
    {
      title: 'EMPRETEC',
      issuer: 'UNCTAD',
      year: 'Apr 2016',
    },
  ],
  publications: [
    {
      title: 'A Scalable and Cost-Effective Data Anonymization Over Big Data Using MapReduce on Cloud',
      venue: 'Journal on Cloud Computing · Apr 2015',
    },
    {
      title: 'A Multi-Classifier Prediction Model for Phishing Detection',
      venue: 'International Journal of Research in Engineering and Technology · Mar 2014',
    },
    {
      title: 'Spam Email Detection using Structural Features',
      venue: 'Foundation of Computer Science, New York · Mar 2014',
    },
  ],
  recommendations: [
    {
      author: 'Reenphy George',
      quote:
        '“Having Prof. Sarju in class meant being pushed to build. He made our clubs vibrant innovation labs where ideas mattered more than titles.”',
    },
    {
      author: 'Tomin Joy',
      quote:
        '“Prof. Sarju mentored me through four years of engineering. His mix of technical rigor and empathy helped me grow beyond the syllabus.”',
    },
  ],
};

const createCard = ({ title, detail, description }) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <h3>${title}</h3>
    ${detail ? `<span class="tag">${detail}</span>` : ''}
    <p>${description}</p>
  `;
  return card;
};

const renderList = (selector, items, builder) => {
  const container = document.querySelector(selector);
  if (!container) return;
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.appendChild(builder(item)));
  container.appendChild(fragment);
};

renderList('[data-section="impact"]', data.impact, createCard);
renderList(
  '[data-section="projects"]',
  data.projects,
  ({ title, role, description, link }) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${title}</h3>
      <span class="tag">${role}</span>
      <p>${description}</p>
      <a href="${link}" target="_blank" rel="noopener noreferrer">Visit project →</a>
    `;
    return card;
  },
);
renderList('[data-section="volunteer"]', data.volunteer, createCard);
renderList(
  '[data-section="awards"]',
  data.awards,
  ({ title, issuer, year }) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${title}</h3>
      <span class="tag">${issuer}</span>
      <p>${year}</p>
    `;
    return card;
  },
);

renderList(
  '[data-section="certifications"]',
  data.certifications,
  ({ title, issuer, year, credential }) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${title}</h3>
      <span class="tag">${issuer}</span>
      <p>Issued ${year}${credential ? ` · ID ${credential}` : ''}</p>
    `;
    return card;
  },
);

renderList(
  '[data-section="publications"]',
  data.publications,
  ({ title, venue }) => {
    const item = document.createElement('li');
    item.innerHTML = `<h3>${title}</h3><p>${venue}</p>`;
    return item;
  },
);

renderList(
  '[data-section="recommendations"]',
  data.recommendations,
  ({ quote, author }) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<p>${quote}</p><strong>${author}</strong>`;
    return card;
  },
);

const timelineBuilder = ({ role, org, period, highlights }) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <h4>${role}</h4>
    <span>${org}</span>
    <small>${period}</small>
    <ul>${highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
  `;
  return li;
};

renderList('[data-section="experience"]', data.experience, timelineBuilder);
renderList('[data-section="education"]', data.education, timelineBuilder);

const hydrateYear = () => {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

hydrateYear();

const storedTheme = localStorage.getItem('tp-theme');
if (storedTheme) {
  root.dataset.theme = storedTheme;
  themeToggleButton.querySelector('.theme-icon').textContent =
    storedTheme === 'light' ? '🌙' : '☀️';
}

const toggleTheme = () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = nextTheme;
  themeToggleButton.querySelector('.theme-icon').textContent =
    nextTheme === 'light' ? '🌙' : '☀️';
  localStorage.setItem('tp-theme', nextTheme);
};

themeToggleButton?.addEventListener('click', toggleTheme);

navToggleButton?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  const navClose = document.getElementById('nav-close');
  if (navLinks.classList.contains('open')) {
    navClose.style.display = 'flex';
  } else {
    navClose.style.display = 'none';
  }
  navClose.onclick = () => {
    navLinks.classList.remove('open');
    navClose.style.display = 'none';
  };
});

navLinks?.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      const navClose = document.getElementById('nav-close');
      if (navClose) navClose.style.display = 'none';
    }
  })
);

