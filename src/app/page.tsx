const links = [
  { label: "Resume", href: "/resume.pdf" },
  { label: "GitHub", href: "https://github.com/prithvi-s" },
  { label: "LinkedIn", href: "https://linkedin.com/in/prithvi-sunilkumar123" },
  { label: "Email", href: "mailto:psunilku@andrew.cmu.edu" },
];

const experience = [
  {
    company: "Rakuten",
    role: "Software Engineer",
    dates: "Jul 2023 – Jul 2026",
    bullets: [
      "Led QCC Workflow Automation, an approval-workflow platform adopted across Rakuten Group divisions worldwide. Re-architected its AI layer into a RAG pipeline over years of consultant feedback, cutting manual review time by 25%.",
      "Delivered 20+ proof-of-concept deployments for external enterprise customers on Rakuten SixthSense, a commercial observability platform, building custom OpenTelemetry components where native agents fell short.",
      "Built the React frontend, REST APIs, and database layer for Rakuten Group's company-wide OKR platform, used by teams across Japan, India, and APAC.",
      "Replaced a fully manual release process with Jenkins CI/CD pipelines deploying Dockerized microservices.",
    ],
  },
  {
    company: "Rakuten",
    role: "Software Engineer Intern",
    dates: "Jan 2023 – Jun 2023",
    bullets: [
      "Launched the first version of QCC Workflow Automation with React and Node.js; converted to a full-time offer.",
    ],
  },
  {
    company: "Diageo",
    role: "Business Analyst Intern",
    dates: "Jun 2022 – Aug 2022",
    bullets: [
      "Built a Power BI dashboard on ServiceNow data tracking ticket volumes, resolution times, and SLA compliance.",
    ],
  },
];

const projects = [
  {
    name: "Transit App",
    status: "In progress",
    description: "Details coming soon.",
  },
  {
    name: "Automated Grading System",
    status: "2023",
    description:
      "Undergraduate capstone: Random Forest and LSTM models that score student submissions automatically.",
  },
];

const education = [
  {
    school: "Carnegie Mellon University, Heinz College",
    degree: "Master of Information Systems Management · 25% Merit Scholarship",
    dates: "Aug 2026 – Dec 2027",
  },
  {
    school: "PES University",
    degree: "B.Tech in Computer Science and Engineering",
    dates: "Aug 2019 – May 2023",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "Python",
  "SQL",
  "RAG pipelines",
  "LLM APIs",
  "Docker",
  "OpenTelemetry",
  "Redis",
  "AWS",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-12 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Prithvi Sunilkumar</h1>
        <p className="text-lg leading-relaxed text-muted">
          Software engineer with three years at Rakuten building AI-assisted workflows, observability
          tooling, and company-wide platforms. Now a master&rsquo;s student in Information Systems Management at Carnegie Mellon, looking for{" "}
          <span className="text-foreground">SWE / AI / ML internships for Summer 2027</span>.
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <Section title="Experience">
        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <div key={job.role + job.dates}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-medium">{job.company}</h3>
                <span className="font-mono text-xs text-muted">{job.dates}</span>
              </div>
              <p className="mb-3 text-sm text-muted">{job.role}</p>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div key={p.name}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{p.name}</h3>
                <span className="font-mono text-xs text-muted">{p.status}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-col gap-5">
          {education.map((e) => (
            <div key={e.school}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-medium">{e.school}</h3>
                <span className="font-mono text-xs text-muted">{e.dates}</span>
              </div>
              <p className="text-sm text-muted">{e.degree}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="rounded-full border border-border px-3 py-1 text-xs">
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <footer className="border-t border-border pt-8 text-xs text-muted">
        © 2026 Prithvi Sunilkumar
      </footer>
    </main>
  );
}
