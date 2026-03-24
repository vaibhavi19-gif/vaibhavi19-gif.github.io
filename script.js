const portfolioData = {
  signals: [
    {
      label: "Focus",
      title: "Scalable ETL",
      text: "Designing pipelines and schemas that keep analytics systems performant under heavy data volume."
    },
    {
      label: "Strength",
      title: "Data Reliability",
      text: "Building checks, monitoring layers, and process controls that protect downstream decision-making."
    },
    {
      label: "Range",
      title: "Analytics to Infra",
      text: "Comfortable across SQL modeling, dashboarding, Python workflows, and distributed data systems."
    },
    {
      label: "Foundation",
      title: "ML + Vision",
      text: "Academic work in deep learning, NLP, and computer vision complements product-facing engineering."
    }
  ],
  impacts: [
    {
      label: "Meta",
      value: "6+",
      text: "Hive data sources built from scratch to track metadata accuracy across 13+ signals and 5+ Instagram ad events."
    },
    {
      label: "Performance",
      value: "~40%",
      text: "Lower query latency from partitioning, bucketing, and dimensional modeling on large-scale ad interaction data."
    },
    {
      label: "ZS Associates",
      value: "100",
      text: "Accurate monthly business insights generated through SQL-driven ETL workflows for client sales performance."
    },
    {
      label: "Quality",
      value: "70%",
      text: "Reduction in incorrect insights and system failures through Python and PySpark data validation on HDFS."
    }
  ],
  experience: [
    {
      company: "Meta",
      role: "Data Engineer Intern",
      period: "May 2025 - Aug 2025",
      summary: "Worked on revenue-critical Instagram ads data systems, from source modeling to observability and analytics feedback loops.",
      bullets: [
        "Architected and deployed 6+ Hive data sources from scratch, defining schemas, keys, and dimensional models to track metadata accuracy across 13+ signals and 5+ critical Instagram ad events.",
        "Designed end-to-end ETL pipelines with Python, SQL, Hive, Presto, and Airflow to process petabyte-scale ad interaction logs and cut query latency by about 40 percent.",
        "Implemented an automated reliability layer with 15+ SQL checks, null monitoring, and alerting to proactively detect regressions and maintain SLA compliance across analytics pipelines.",
        "Developed 3+ UniDash dashboards on event coverage, metadata health, and compute-to-revenue ROI, uncovering a 30 percent signal logging gap that informed logging fixes and infrastructure decisions.",
        "Partnered with product, data science, and infrastructure teams to translate ad delivery requirements into production-grade data platforms."
      ],
      tools: ["Python", "SQL", "Hive", "Presto", "Airflow", "UniDash"]
    },
    {
      company: "ZS Associates",
      role: "Data Engineer",
      period: "Jul 2022 - May 2024",
      summary: "Delivered client-facing analytics systems and operationalized data workflows with a strong emphasis on correctness and efficiency.",
      bullets: [
        "Engineered ETL workflows using SQL to generate and publish about 100 accurate monthly business insights tied to client sales performance.",
        "Reduced the risk of incorrect insights and system failures by 70 percent by developing Python and PySpark scripts for data checks on Hadoop HDFS.",
        "Cut processing time from 60 minutes to 20 minutes through SQL query optimization and broader stability improvements in the insights pipeline.",
        "Created a reusable Python template for the data processing architecture, reducing manual configuration by 60 percent and accelerating multi-project delivery.",
        "Automated software testing suites, reducing manual effort by 45 percent and doubling testing speed while supporting cross-project handovers."
      ],
      tools: ["SQL", "Python", "PySpark", "Hadoop HDFS", "Testing Automation"]
    },
    {
      company: "ZS Associates",
      role: "Data Engineer Intern",
      period: "Jan 2022 - Jun 2022",
      summary: "Supported analytics delivery, quality validation, and client-facing operations during the transition into full-time engineering work.",
      bullets: [
        "Improved data integrity through 40+ quality checks, SQL optimization in AWS Redshift, and interactive Tableau dashboards.",
        "Built pipelines using SQL and Excel to generate insights for clients while leading operational runs and demos.",
        "Resolved about 70 percent of issues in real time during client sessions and documented internal processes for smoother delivery.",
        "Received the Rising Star award for strong performance and contributions to the Insights team."
      ],
      tools: ["SQL", "AWS Redshift", "Tableau", "Excel"]
    }
  ],
  projects: [
    {
      title: "Video CAPTCHA Using VQA, NLP, and Deep Learning",
      description: "Developed a video-based CAPTCHA system for user authentication that combines computer vision, natural language processing, and deep learning techniques.",
      details: [
        "Integrated sentiment analysis and used CNN and LSTM models to validate responses with 98 percent accuracy.",
        "Published the work at the 2022 IEEE-ICAST Conference."
      ],
      meta: "Academic project / 2022"
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      school: "Arizona State University, United States",
      period: "Aug 2024 - May 2026",
      note: "CGPA: 4.0 / 4.0",
      coursework: "Data Processing at Scale, Cloud Computing, Data Mining and Visualization"
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "K. J. Somaiya College of Engineering, Mumbai, India",
      period: "Aug 2018 - Jun 2022",
      note: "CGPA: 3.6 / 4.0",
      coursework: "Data Structures and Algorithms, Data Analytics, Database Management, Machine Learning"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "SQL", "JavaScript", "HTML", "CSS", "C"]
    },
    {
      category: "Libraries",
      items: ["NumPy", "Pandas", "Keras", "Scikit-learn", "Matplotlib", "OpenCV", "SciPy"]
    },
    {
      category: "Tools",
      items: ["Airflow", "Hive", "PySpark", "Presto", "MySQL", "Tableau", "AWS", "Hadoop", "Django", "Docker", "Git"]
    }
  ]
};

const signalGrid = document.querySelector("#signalGrid");
const impactGrid = document.querySelector("#impactGrid");
const experienceList = document.querySelector("#experienceList");
const projectGrid = document.querySelector("#projectGrid");
const educationGrid = document.querySelector("#educationGrid");
const skillsGrid = document.querySelector("#skillsGrid");

portfolioData.signals.forEach((signal) => {
  const article = document.createElement("article");
  article.className = "panel-card reveal";
  article.innerHTML = `
    <p class="card-label">${signal.label}</p>
    <h3>${signal.title}</h3>
    <p>${signal.text}</p>
  `;
  signalGrid.appendChild(article);
});

portfolioData.impacts.forEach((impact) => {
  const article = document.createElement("article");
  article.className = "impact-card reveal";
  article.innerHTML = `
    <p class="card-label">${impact.label}</p>
    <strong>${impact.value}</strong>
    <p>${impact.text}</p>
  `;
  impactGrid.appendChild(article);
});

portfolioData.experience.forEach((job) => {
  const article = document.createElement("article");
  article.className = "experience-card reveal";

  const bulletMarkup = job.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  const toolMarkup = job.tools.map((tool) => `<li class="chip">${tool}</li>`).join("");

  article.innerHTML = `
    <div class="experience-header">
      <div class="experience-title-block">
        <div class="role-line">
          <h3>${job.company}</h3>
          <span>${job.role}</span>
        </div>
        <p>${job.summary}</p>
      </div>
      <p class="meta-row">${job.period}</p>
    </div>
    <div class="experience-body">
      <ul class="bullet-list">${bulletMarkup}</ul>
      <ul class="chip-row">${toolMarkup}</ul>
    </div>
  `;

  experienceList.appendChild(article);
});

portfolioData.projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project-card reveal";

  const detailMarkup = project.details.map((detail) => `<li>${detail}</li>`).join("");

  article.innerHTML = `
    <p class="card-label">${project.meta}</p>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <ul class="bullet-list">${detailMarkup}</ul>
  `;

  projectGrid.appendChild(article);
});

portfolioData.education.forEach((item) => {
  const article = document.createElement("article");
  article.className = "education-card reveal";
  article.innerHTML = `
    <p class="card-label">${item.period}</p>
    <h3>${item.degree}</h3>
    <p>${item.school}</p>
    <p class="meta-row">${item.note}</p>
    <p><strong>Relevant coursework:</strong> ${item.coursework}</p>
  `;
  educationGrid.appendChild(article);
});

portfolioData.skills.forEach((skillGroup) => {
  const article = document.createElement("article");
  article.className = "skill-card reveal";

  const skillMarkup = skillGroup.items.map((item) => `<li>${item}</li>`).join("");

  article.innerHTML = `
    <p class="card-label">${skillGroup.category}</p>
    <ul>${skillMarkup}</ul>
  `;

  skillsGrid.appendChild(article);
});

const revealElements = document.querySelectorAll(".reveal");

// Keep motion subtle and only reveal sections once they enter the viewport.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}
