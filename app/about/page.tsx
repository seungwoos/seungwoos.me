"use client";
interface Publication {
  title: string;
  authors: string;
  venue: string;
  links?: {
    paper?: string;
    github?: string;
  };
}

interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  details: string[];
}

interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string[];
}

export default function Project() {
  const experiences: Experience[] = [
    {
      role: "AI Engineer",
      company: "3Billion",
      companyUrl: "https://3billion.io/ko/index",
      period: "Dec. 2023 - Present",
      details: [
        "Working on Large Language Models (LLMs) for medical diagnosi.",
        "Generated an instruction dataset for ACMG guidelines using Self-Instruct",
        "Conducted parameter-efficient fine-tuning (PEFT) and alignment learning on Llama and Mistral models",
        "Building a Retrieval Augmented Generation (RAG) pipeline using clinical papers:",
        "Implementing prompt engineering techniques",
        "Developing image and table embedding methods",
        "Utilizing dify for pipeline construction and management",
      ],
    },
    {
      role: "Software Engineer",
      company: "Dancers Connect",
      companyUrl: "https://www.dancers-connect.com/",
      period: "Oct. 2023 - Dec. 2023",
      details: [
        "Worked as a front-end engineer, developed and maintained services at danceapply.com using ReactJS and Typescript.",
      ],
    },
    {
      role: "Research Assistant",
      company: "UNIST",
      companyUrl: "https://www.unist.ac.kr",
      period: "Mar. 2021 - Jun. 2023",
      details: [
        "Implemented and conducted research on hilbert diffusion models.",
        "Conducted experiments on 2D cytology and CT image generation using proposed diffusion model with acceleration.",
      ],
    },
  ];

  const education: Education[] = [
    {
      school: "Ulsan National Institute of Science and Technology (UNIST)",
      degree: "M.S. in Artificial Intelligence",
      period: "Mar. 2021 - Aug. 2023",
      details: [
        "Learning Intelligent Machine (LIM) Lab advised by Prof. Sungbin Lim",
      ],
    },
    {
      school: "Handong Global University (HGU)",
      degree: "B.S. in Computer Science and Engineering",
      period: "Mar. 2013 - Feb. 2021",
      details: [
        "Compulsory military service in R.O.K. Air Force (Dec. 2014 - Dec. 2016)",
      ],
    },
  ];

  const publications: Publication[] = [
    {
      title:
        "Differentiation of gliblastoma from solitary brain metastasis using deep ensembles: Empirical estimation of uncertainty for clinical reliability",
      authors:
        "Yae Won Park*, Sujeong Eom*, Seungwoo Kim, Sungbin Lim, Seng Chan You, Seung-Koo Lee, Sung Soo Ahn",
      venue: "Computer Methods and Programs in Biomedicine Volume 254",
      links: {
        paper:
          "https://www.sciencedirect.com/science/article/abs/pii/S0169260724002839",
      },
    },
    {
      title:
        "Score-based Generative Modeling through Stochastic Evolution Equations in Hilbert Spaces",
      authors:
        "Sungbin Lim, Eunbi Yoon, Taehyun Byun, Taewon Kang, Seungwoo Kim, Kyungjae Lee, Sungjoon Choi",
      venue: "NeurIPS, 2023 (Spotlight)",
      links: {
        paper:
          "https://proceedings.neurips.cc/paper_files/paper/2023/hash/76c6f9f2475b275b92d03a83ea270af4-Abstract-Conference.html",
        github: "https://github.com/KU-LIM-Lab/hdm-official",
      },
    },
  ];

  return (
    <main className="bg-white dark:bg-black text-slate-900 dark:text-slate-50">
      {" "}
      <section>
        <h1 className="text-3xl font-bold mb-6">Experiences</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold">
              {exp.role} @{" "}
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h3>
            <p className="text-gray-600 mb-2">{exp.period}</p>
            <ul className="list-disc pl-5 space-y-1">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h1 className="text-3xl font-bold mb-6">Education</h1>
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-lg font-medium">{edu.degree}</p>
            <p className="text-gray-600">{edu.period}</p>
            {edu.details && (
              <ul className="list-disc pl-5 mt-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      <section>
        <h1 className="text-3xl font-bold mb-6">Publications</h1>
        {publications.map((pub, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium">{pub.title}</h3>
            <p className="mt-1">{pub.authors}</p>
            <p className="text-gray-600 mt-1">{pub.venue}</p>
            {pub.links && (
              <div className="mt-2 space-x-4">
                {pub.links.paper && (
                  <a
                    href={pub.links.paper}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [paper]
                  </a>
                )}
                {pub.links.github && (
                  <a
                    href={pub.links.github}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [github]
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
