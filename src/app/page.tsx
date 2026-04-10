import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Lora } from "next/font/google";
import styles from "./page.module.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Mercedes Rend",
  description:
    "Personal website for Mercedes Rend, a Johns Hopkins biomedical engineering student building AI systems for educational equity, college access, and student opportunity.",
  openGraph: {
    images: [{ url: "/mercedes-rend-headshot.png", width: 961, height: 1024, alt: "Mercedes Rend" }],
  },
};

type Project = {
  name: string;
  href: string;
  tag: string;
  tagClassName: string;
  description: string;
  pills: string[];
  featured: boolean;
  secondary?: string;
};

type AdvisingOutcome = {
  school: string;
  detail: string;
  badge?: string;
};

type Experience = {
  date: string;
  location: string;
  role: string;
  org: string;
  description: string;
  href?: string;
};

const navigationLinks = [
  { href: "#story", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#advising", label: "Advising" },
  { href: "#experience", label: "Experience" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Contact" },
] as const;

const heroStats = [
  { value: "7+", label: "Life-changing advising outcomes" },
  { value: "18 months", label: "Of one-on-one college advising" },
  { value: "50+", label: "Learners reached through AI tutoring work" },
  { value: "'28", label: "JHU BME, Hodson-Gilliam Scholar" },
] as const;

const storyCards = [
  {
    label: "Currently building",
    text: "STRIDE — AI college navigation for first-gen and underserved high school students",
  },
  {
    label: "Education",
    text: "Johns Hopkins University, B.S. Biomedical Engineering · Class of 2028 · Hodson-Gilliam Scholar",
  },
  {
    label: "Lived experience",
    text: "First-gen student. Minds Matter mentee. Matriculate advisee turned advisor. QuestBridge Prep Scholar & Finalist. MIT MITES Scholar.",
  },
  {
    label: "Domains",
    text: "AI/ML · Biomedical Engineering · Educational Equity · Product Design · Market Strategy",
  },
] as const;

const equityFocus = [
  {
    name: "College access",
    detail:
      "I build for students who do not have private counselors, family playbooks, or inherited access to the rules of the system.",
    badge: "Core mission",
  },
  {
    name: "First-gen design",
    detail:
      "The product lens starts with lived experience: what would have made the process clearer, earlier, and more humane for students like me?",
    badge: "Lived experience",
  },
  {
    name: "Sustained support",
    detail:
      "Students do not just need one essay review. They need guidance that stays with them across deadlines, decisions, and self-doubt.",
    badge: "Built into STRIDE",
  },
  {
    name: "Scale with care",
    detail:
      "AI should widen access without flattening students into templates. The goal is more personalization, not less.",
    badge: "Equity by design",
  },
] as const;

const projects: Project[] = [
  {
    name: "STRIDE",
    href: "https://stride-three-omega.vercel.app/",
    tag: "Founder · Live",
    tagClassName: styles.tagFounder,
    description:
      "An AI-powered college navigation platform for first-gen and underserved high school students, offering personalized roadmaps, essay feedback, and milestone tracking — the kind of sustained guidance private counselors charge $200–$500/hr for, made free and accessible.",
    pills: ["React", "Node.js", "LLM APIs", "Full-stack", "Feb 2026 – Present"],
    secondary:
      "Built to turn educational equity into product infrastructure: resume analysis agents, essay feedback pipelines, grade-specific roadmap generation, authenticated accounts, and shareable dashboards. Live and deployed.",
    featured: true,
  },
  {
    name: "Altera Labs",
    href: "https://altera-labs.com/",
    tag: "Core Team",
    tagClassName: styles.tagTeam,
    description:
      "JHU-founded AI tutoring that actually teaches — using adaptive mastery tracking and Bayesian Knowledge Tracing. I support outreach, product design, and equity strategy so stronger learning support reaches more students, not just the best-resourced ones.",
    pills: ["UI/UX", "Outreach & Equity", "$190K+ raised"],
    featured: false,
  },
  {
    name: "UVU Bio",
    href: "https://www.uvubio.com/uvu-bio-is-reimagining-product-development-and-innovation-in-africa/",
    tag: "Field Work · Cape Town",
    tagClassName: styles.tagField,
    description:
      "Five weeks embedded in Cape Town leading market-entry strategy for UVU Bio's R&D division, targeting R10M (~$550K) in first-year revenue across a $28B sector. Recommendations implemented at the Rwanda Bioeconomy Hub. Featured on UVU Bio's website.",
    pills: ["Market Strategy", "Africa R&D", "Rwanda Implementation"],
    featured: false,
  },
] as const;

const advisingOutcomes: AdvisingOutcome[] = [
  { school: "Cornell University", detail: "Undergraduate admission" },
  {
    school: "Columbia University",
    detail: "Full four-year scholarship",
    badge: "QuestBridge Match",
  },
  { school: "Boston College", detail: "Undergraduate admission" },
  {
    school: "MIT MITES Semester",
    detail: "Highly selective STEM summer program — under 10% acceptance",
    badge: "×2 Selected",
  },
  {
    school: "QuestBridge Prep Scholar",
    detail: "National recognition for high-achieving, low-income students",
    badge: "×2 Selected",
  },
] as const;

const experiences: Experience[] = [
  {
    date: "Feb 2026 – Present",
    location: "Baltimore, MD",
    role: "Founder & ML Builder",
    org: "STRIDE ↗",
    href: "https://stride-three-omega.vercel.app/",
    description:
      "Designing and building an AI college navigation platform from scratch — full-stack architecture, LLM integration, resume analysis agents, essay feedback pipelines, and grade-specific roadmap generation. Live and deployed.",
  },
  {
    date: "Dec 2024 – Present",
    location: "Remote",
    role: "Advising Fellow",
    org: "Matriculate",
    description:
      "One-on-one advisor to high-achieving, low-income high school students over 18 months. Cohort outcomes include Cornell, Columbia (QuestBridge Match), Boston College, 2× MIT MITES, and 2× QuestBridge Prep Scholar.",
  },
  {
    date: "Apr 2026 – Present",
    location: "Baltimore, MD · Remote",
    role: "Administrative Coordinator",
    org: "JHU School of Nursing",
    description:
      "High-level administrative support to a Principal Investigator across multiple research studies — calendar management, meeting coordination, records organization, and cross-functional collaboration using OneDrive, SharePoint, and Microsoft Office.",
  },
  {
    date: "Mar 2026 – Present",
    location: "Baltimore, MD",
    role: "Outreach, Equity Lead & UI/UX",
    org: "Altera Labs ↗",
    href: "https://altera-labs.com/",
    description:
      "Core team member shaping outreach strategy, equity-focused design, and UI/UX for a JHU-founded AI tutoring startup. Backed by NVIDIA Inception, Google Cloud, and Canvas LMS. Supporting $190K+ fundraising history; 50+ students on platform with classroom pilot launching fall 2026.",
  },
  {
    date: "Apr 2025 – Present",
    location: "Baltimore, MD",
    role: "Whiting School of Engineering Senator",
    org: "JHU Student Government Association",
    description:
      "Elected representative for the Whiting School of Engineering, advocating for engineering students in university-wide governance.",
  },
  {
    date: "Jun – Jul 2025",
    location: "Cape Town, South Africa",
    role: "Project Manager",
    org: "UVU Bio ↗",
    href: "https://www.uvubio.com/uvu-bio-is-reimagining-product-development-and-innovation-in-africa/",
    description:
      "Five weeks embedded in Cape Town leading market-entry strategy for UVU Bio's for-profit R&D division, targeting R10M (~$550K) in first-year revenue. Analyzed South Africa's $28B R&D sector across 20+ competitors. Recommendations implemented at the Rwanda Bioeconomy Hub. Featured in UVU Bio's published case study.",
  },
  {
    date: "Jan 2025 – Present",
    location: "Baltimore, MD",
    role: "Research Assistant",
    org: "Durr Lab of Computational Biophotonics, JHU",
    description:
      "Applying focusing techniques and optimization methods to locate capillaries in nailfold to test for hemoglobin levels — contributing to non-invasive diagnostics research in computational biophotonics.",
  },
  {
    date: "Sep 2025 – Mar 2026",
    location: "Baltimore, MD",
    role: "Research Assistant",
    org: "Doloff Lab for Immunoengineering, JHU",
    description:
      "Coordinated experimental workflows across immunoengineering assays, maintaining data integrity across quantitative imaging and assay results to support evidence-based decision-making.",
  },
  {
    date: "Sep 2021 – Present",
    location: "New York, NY",
    role: "Mentee",
    org: "Minds Matter NYC",
    description:
      "Multi-year participant in Minds Matter's college-bound program connecting driven, low-income students with mentors, internships, and college preparation resources throughout high school and university.",
  },
] as const;

const honors = [
  {
    name: "Hodson-Gilliam Scholar",
    issuer: "Johns Hopkins University · 2024",
    description:
      "Awarded to twenty exceptional first-year students on the basis of leadership, academic, and personal achievement.",
  },
  {
    name: "Ed Equity Lab Honor Society Scholar",
    issuer: "University of Pennsylvania · 2024",
    description:
      "Top 20% nationally in Wharton's Essentials of Personal Finance. Selected from thousands of students across the country.",
  },
  {
    name: "QuestBridge Prep Scholar",
    issuer: "QuestBridge",
    description:
      "National recognition for high-achieving, low-income students demonstrating exceptional academic potential.",
  },
  {
    name: "QuestBridge Finalist",
    issuer: "QuestBridge",
    description:
      "Selected as a QuestBridge College Match Finalist — one of the most competitive college access programs in the country.",
  },
  {
    name: "Stanford Education Equity Scholar",
    issuer: "Stanford University",
    description:
      "Selected for Stanford's Bioengineering education equity program in partnership with Ed Equity Lab.",
  },
  {
    name: "Young Leader Summit Scholar",
    issuer: "Young Leader Summit",
    description:
      "Recognized for leadership potential and commitment to community impact.",
  },
] as const;

const skills = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "MATLAB", "Java", "SQL"],
  },
  {
    group: "Frameworks & Tools",
    items: ["React", "Node.js", "REST APIs", "LLM APIs", "Git", "ImageJ/Fiji"],
  },
  {
    group: "Product & Design",
    items: ["UI/UX", "AI System Design", "Product Roadmapping", "Agile"],
  },
] as const;

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main
      id="top"
      className={`${styles.page} ${dmSans.variable} ${lora.variable}`}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <nav className={styles.nav}>
        <a href="#top" className={styles.navName}>
          Mercedes Rend
        </a>
        <ul className={styles.navLinks}>
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTop}>
            <div className={styles.headshotFrame}>
              {/* Plain img: avoids Next/Image + flex/aspect-ratio sizing edge cases; file is in /public */}
              <img
                src="/mercedes-rend-headshot.png"
                alt="Mercedes Rend"
                width={961}
                height={1024}
                className={styles.headshotImage}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className={styles.heroTitleBlock}>
              <span className={styles.heroTag}>Educational Equity · Founder · Advisor · Builder</span>
              <h1 className={styles.heroName}>
                Mercedes
                <br />
                <em>Rend</em>
              </h1>
            </div>
          </div>
          <p className={styles.heroBio}>
            I build AI tools for educational equity: products that help first-gen and
            underserved students navigate college access with the kind of support that is
            usually reserved for families who can already afford it.
          </p>
          <div className={styles.heroCtas}>
            <a href="#projects" className={styles.buttonPrimary}>
              See my work
            </a>
            <a href="mailto:mrend1@jh.edu" className={styles.buttonSecondary}>
              Get in touch
            </a>
          </div>
        </div>

        <aside className={styles.heroRight} aria-label="Highlights">
          <div className={styles.heroRightInner}>
            <div className={styles.heroStats}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statNumber}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
            <blockquote className={styles.heroQuote}>
              <p>
                &quot;The gap isn&apos;t ability. It&apos;s access to the right information, at the right
                time, with someone still there when things get hard.&quot;
              </p>
            </blockquote>
          </div>
        </aside>
      </section>

      <div className={styles.divider} />

      <section id="story" className={styles.sectionWrap}>
        <div className={styles.sectionLabel}>About</div>
        <h2 className={styles.sectionTitle}>Why educational equity became my work</h2>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p>
              I navigated the college application process <strong>largely on my own</strong> — no
              private counselor, no family playbook, no one to tell me which APs to take in
              9th grade or how to write an essay that sounded like me. I was a Minds Matter
              mentee, a Matriculate advisee, a QuestBridge Prep Scholar and Finalist. I found
              every program that existed for students like me, and I used all of them.
            </p>
            <p>
              I&apos;m originally from <strong>Queens, New York</strong>, and my perspective has also
              been shaped by living in <strong>Romania</strong> and <strong>Hawaii</strong>, and by
              constantly moving between different communities. That experience made one thing
              clear early: talent is everywhere, but access is not.
            </p>
            <p>
              Those programs changed my trajectory. They got me to <strong>Johns Hopkins</strong> as
              a Hodson-Gilliam Scholar, into <strong>MIT MITES</strong>, into pre-college study at
              Columbia, and into dual-enrollment coursework through Stanford and UPenn —
              and ultimately to building a startup in college. But I also know how lucky I
              was to find them — and how many students with equal ability never do.
            </p>
            <p>
              Now, as a <strong>Matriculate Advising Fellow</strong>, I sit across from those
              students every week. STRIDE is my attempt to scale what one advisor can do — to
              make personalized, persistent college guidance available to every student,
              everywhere, for free.
            </p>
            <p>
              I&apos;m especially drawn to work at the intersection of <strong>educational equity</strong>,
              <strong> technology</strong>, and <strong>new opportunity</strong> — the kind of work
              that lets me keep learning, keep building, and keep opening doors for other
              students.
            </p>
          </div>
          <div className={styles.storyAside}>
            {storyCards.map((card) => (
              <div key={card.label} className={styles.storyCard}>
                <div className={styles.storyCardLabel}>{card.label}</div>
                <div className={styles.storyCardText}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="background" className={styles.backgroundRibbon}>
        <div className={styles.backgroundInner}>
          <div className={styles.ribbonLabel}>Educational Equity</div>
          <h2 className={styles.ribbonTitle}>The focus that ties the work together</h2>
          <div className={styles.ribbonGrid}>
            {equityFocus.map((item) => (
              <div key={item.name} className={styles.ribbonItem}>
                <div className={styles.ribbonItemName}>{item.name}</div>
                <div className={styles.ribbonItemDetail}>{item.detail}</div>
                <span className={styles.ribbonBadge}>{item.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section id="projects" className={styles.sectionWrap}>
        <div className={styles.sectionLabel}>Projects</div>
        <h2 className={styles.sectionTitle}>What I&apos;m building for students</h2>
        <p className={styles.sectionIntro}>
          Every project here is tied to the same question: how do we make guidance,
          learning, and opportunity more accessible for students who have the least margin
          for error?
        </p>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ExternalLink
              key={project.name}
              href={project.href}
              className={`${styles.projectCard} ${project.featured ? styles.featuredProject : ""}`}
            >
              <div>
                <span className={`${styles.projectTag} ${project.tagClassName}`}>{project.tag}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectPills}>
                  {project.pills.map((pill) => (
                    <span key={pill} className={styles.pill}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              {project.featured ? (
                <div>
                  <span
                    className={`${styles.projectTag} ${project.tagClassName} ${styles.projectTagSpacer}`}
                    aria-hidden="true"
                  >
                    {project.tag}
                  </span>
                  <p className={styles.projectDesc}>{project.secondary}</p>
                  <p className={`${styles.projectDesc} ${styles.projectSecondaryLink}`}>
                    stride-three-omega.vercel.app ↗
                  </p>
                </div>
              ) : null}
              <span className={styles.projectArrow} aria-hidden="true">
                ↗
              </span>
            </ExternalLink>
          ))}
        </div>
      </section>

      <section id="advising" className={styles.outcomesSection}>
        <div className={styles.outcomesInner}>
          <div className={styles.ribbonLabel}>Matriculate Advising</div>
          <h2 className={`${styles.sectionTitle} ${styles.darkSectionTitle}`}>
            Students I&apos;ve advised
          </h2>
          <p className={`${styles.sectionIntro} ${styles.darkSectionIntro}`}>
            One-on-one college advising for high-achieving, low-income students over 18 months.
            These outcomes are what STRIDE is built to scale.
          </p>
          <div className={styles.outcomesGrid}>
            {advisingOutcomes.map((outcome) => (
              <div key={outcome.school} className={styles.outcomeItem}>
                <div className={styles.outcomeSchool}>{outcome.school}</div>
                <div className={styles.outcomeDetail}>{outcome.detail}</div>
                {outcome.badge ? <span className={styles.outcomeBadge}>{outcome.badge}</span> : null}
              </div>
            ))}
            <div className={`${styles.outcomeItem} ${styles.outcomeHighlight}`}>
              <div>
                <div className={`${styles.outcomeSchool} ${styles.outcomeHighlightValue}`}>7+</div>
                <div className={`${styles.outcomeDetail} ${styles.outcomeHighlightText}`}>
                  life-changing outcomes from sustained, personalized advising
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={styles.sectionWrap}>
        <div className={styles.sectionLabel}>Experience</div>
        <h2 className={styles.sectionTitle}>Work that informs the mission</h2>
        <div>
          {experiences.map((experience) => (
            <div key={`${experience.role}-${experience.date}`} className={styles.expItem}>
              <div>
                <div className={styles.expDate}>{experience.date}</div>
                <div className={styles.expLocation}>{experience.location}</div>
              </div>
              <div>
                <div className={styles.expRole}>{experience.role}</div>
                <div className={styles.expOrg}>
                  {experience.href ? (
                    <ExternalLink href={experience.href}>{experience.org}</ExternalLink>
                  ) : (
                    experience.org
                  )}
                </div>
                <p className={styles.expDesc}>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      <section id="honors" className={styles.sectionWrap}>
        <div className={styles.sectionLabel}>Honors &amp; Recognition</div>
        <h2 className={styles.sectionTitle}>Scholarships &amp; awards</h2>
        <div className={styles.honorsGrid}>
          {honors.map((honor) => (
            <div key={honor.name} className={styles.honorCard}>
              <div className={styles.honorName}>{honor.name}</div>
              <div className={styles.honorIssuer}>{honor.issuer}</div>
              <div className={styles.honorDesc}>{honor.description}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      <section className={`${styles.sectionWrap} ${styles.skillsSection}`}>
        <div className={styles.sectionLabel}>Skills</div>
        <h2 className={`${styles.sectionTitle} ${styles.skillsTitle}`}>
          How I build access-focused products
        </h2>
        <p className={`${styles.sectionIntro} ${styles.skillsIntro}`}>
          Technical fluency matters, but so does judgment. I use engineering, product, and
          design tools together to make systems that are actually usable for students
          navigating high-stakes decisions.
        </p>
        <div className={styles.skillsBelt}>
          {skills.map((skillGroup) => (
            <div key={skillGroup.group} className={styles.skillLane}>
              <div className={styles.skillLaneLabel}>{skillGroup.group}</div>
              <div className={styles.skillTrackViewport}>
                <div
                  className={`${styles.skillTrack} ${
                    skillGroup.group === "Frameworks & Tools" ? styles.skillTrackReverse : ""
                  }`}
                >
                  {[...skillGroup.items, ...skillGroup.items].map((skill, index) => (
                    <span key={`${skillGroup.group}-${skill}-${index}`} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactInner}>
          <span className={`${styles.sectionLabel} ${styles.contactLabel}`}>Get in touch</span>
          <h2 className={styles.sectionTitle}>Let&apos;s talk</h2>
          <p className={styles.contactCopy}>
            I&apos;m especially interested in conversations about educational equity, college
            access, and how AI can extend support to students who are too often expected to
            figure everything out alone.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:mrend1@jh.edu" className={styles.buttonPrimary}>
              mrend1@jh.edu
            </a>
            <ExternalLink
              href="https://linkedin.com/in/mercedes-rend-6997a0283/"
              className={styles.buttonSecondary}
            >
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://stride-three-omega.vercel.app/" className={styles.buttonSecondary}>
              STRIDE ↗
            </ExternalLink>
            <ExternalLink
              href="https://www.uvubio.com/uvu-bio-is-reimagining-product-development-and-innovation-in-africa/"
              className={styles.buttonSecondary}
            >
              UVU Bio feature ↗
            </ExternalLink>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Mercedes Rend · Johns Hopkins University &apos;28 · Hodson-Gilliam Scholar</p>
        <p>Baltimore, MD · mrend1@jh.edu</p>
      </footer>
    </main>
  );
}
