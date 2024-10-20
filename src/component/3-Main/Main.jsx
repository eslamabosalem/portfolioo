import React, { useState } from "react";
import "./Main.css";

// روابط المشاريع
const projectLinks = {
  "react-project": {
    project: "https://e-commerce-website-ruby-sigma.vercel.app/",
    github: "https://github.com/eslamabosalem/E-commerce-website",
  },
  "Yummy-Products": {
    project: "https://eslamabosalem.github.io/Yummy-Products/",
    github: "https://github.com/eslamabosalem/Yummy-Products",
  },
  "foker-project": {
    project: "https://eslamabosalem.github.io/projects/",
    github: "https://github.com/eslamabosalem/projects",
  },
  "CAUD-operations project": {
    project: "https://eslamabosalem.github.io/CAUD-operations/",
    github: "https://github.com/eslamabosalem/CAUD-operations",
  },
  "login-project": {
    project: "https://eslamabosalem.github.io/task-login/",
    github: "https://github.com/eslamabosalem/task-login",
  },
  "websideApi-project": {
    project: "https://eslamabosalem.github.io/websideApi/",
    github: "https://github.com/eslamabosalem/websideApi",
  },
  "taskoop-project": {
    project: "https://eslamabosalem.github.io/taskoop/",
    github: "https://github.com/eslamabosalem/taskoop",
  },
  "Value-project": {
    project: "https://value-seven.vercel.app/",
    github: "https://github.com/eslamabosalem/projects",
  },
};

function Main() {
  const myprojects = [
    {
      projecTitle: "react-project",
      category: ["react"],
      imgpath: "../../../images/E-commerce.jpg",
      desc: "Wish List...",
      link: projectLinks["react-project"],
    },
    {
      projecTitle: "Yummy-Products",
      category: ["css", "bootstrap", "html", "javeScript"],
      imgpath: "../../../images/Yummy.jpg",
      desc: "Responsive Product Management Site...",
      link: projectLinks["Yummy-Products"],
    },
    {
      projecTitle: "foker-project",
      category: ["css", "html"],
      imgpath: "../../../images/projectHtml.jpg",
      desc: "Lorem ipsum...",
      link: projectLinks["foker-project"],
    },
    {
      projecTitle: "CAUD-operations project",
      category: ["javeScript"],
      imgpath: "../../../images/card.jpg",
      desc: "CAUD operations design...",
      link: projectLinks["CAUD-operations project"],
    },
    {
      projecTitle: "login-project",
      category: ["css", "html", "javeScript"],
      imgpath: "../../../images/Login.jpg",
      desc: "Registration...",
      link: projectLinks["login-project"],
    },
    {
      projecTitle: "websideApi-project",
      category: ["css", "html"],
      imgpath: "../../../images/weather.jpg",
      desc: "Abis Weather Portal...",
      link: projectLinks["websideApi-project"],
    },
    {
      projecTitle: "taskoop-project",
      category: ["css", "html", "javeScript"],
      imgpath: "../../../images/quizApp.jpg",
      desc: "Users choose the type of question...",
      link: projectLinks["taskoop-project"],
    },
    {
      projecTitle: "Value-project",
      category: ["css", "html", "javeScript", "react"],
      imgpath: "../../../images/protofiy.jpg",
      desc: "The project is an Islamic values app...",
      link: projectLinks["Value-project"],
    },
  ];

  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);

  return (
    <main className="flex">
      <section className="left-section flex flex-col gap-2">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myprojects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setCurrentActive("css");
            setArr(myprojects.filter((item) => item.category.includes("css")));
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setCurrentActive("javeScript");
            setArr(
              myprojects.filter((item) => item.category.includes("javeScript"))
            );
          }}
          className={currentActive === "javeScript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setCurrentActive("react");
            setArr(
              myprojects.filter((item) => item.category.includes("react"))
            );
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
      </section>

      <section className="right-section">
        <div className="row">
          <div className="gap-5 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {arr.map((items) => (
              <article key={items.projecTitle} className="card">
                <img src={items.imgpath} alt="" />
                <div className="box">
                  <h1 className="title">{items.projecTitle}</h1>
                  <p className="sub-title">{items.desc}</p>
                  <div className="flex iconss">
                    <div className="flex gap-3">
                      <div className="icon-link">
                        <a
                          href={items.link.project}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-link"></i>
                        </a>
                      </div>
                      <div className="icon-github">
                        <a
                          href={items.link.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <a
                        className="link"
                        href={items.link.project}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        more{" "}
                        <span>
                          <i className="px-1 fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
