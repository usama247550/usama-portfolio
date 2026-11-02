"use client";

import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Database,
  Rocket,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

const experienceItems = [
  {
    icon: BriefcaseBusiness,
    company: "Web Developer | Arswift",
    period: "2026 — Present",
    bullets: [
      "Building and maintaining web applications with the MERN stack and Next.js",
      "Developing an email marketing automation platform and a recruitment and hiring system",
      "Working on multilingual German websites and REST API integration",
    ],
  },
  {
    icon: Building2,
    company: "Metal Detection | Interloop",
    period: "2021 — 2026",
    bullets: [
      "Inspected products against quality standards and reported defects",
      "Documented quality issues and coordinated with production teams for fixes",
      "Ensured quality and efficiency in production with strong attention to detail",
    ],
  },
];

const serviceItems = [
  { title: "Frontend\nDevelopment", icon: Code2 },
  { title: "Backend\nDevelopment", icon: ServerCog },
  { title: "Database\nDesign", icon: Database },
  { title: "API\nIntegration", icon: ShieldCheck },
  { title: "Deployment &\nDevOps", icon: Rocket },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section scroll-mt-24 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <h2 className="experience-heading text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          <span className="experience-gradient">Experience</span>
        </h2>
        <div className="section-title-underline mt-6" />

        <div className="experience-list mt-10">
          {experienceItems.map(({ icon: Icon, company, period, bullets }) => (
            <div key={company} className="experience-item">
              <div className="experience-marker-wrap">
                <div className="experience-marker">
                  <Icon className="h-5 w-5 stroke-[2.4]" />
                </div>
              </div>

              <article className="experience-card">
                <div className="experience-card-header">
                  <h3 className="experience-company">{company}</h3>
                  <span className="experience-date">{period}</span>
                </div>

                <ul className="experience-points">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>

        <div className="what-i-do">
          <h2 className="what-i-do-heading text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            What I Do
          </h2>
          <div className="section-title-underline mt-6" />

          <div className="service-grid mt-10">
            {serviceItems.map(({ title, icon: Icon }) => (
              <div key={title} className="service-card">
                <div className="service-icon">
                  <Icon className="h-8 w-8" />
                </div>
                <span className="service-title">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
