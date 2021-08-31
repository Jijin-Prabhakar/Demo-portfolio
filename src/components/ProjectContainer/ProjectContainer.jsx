import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const client_projects = [
    {
      img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
      title: "Demo Project",
      desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`,
      link: "https://www.google.co.in/",
    },
    {
      img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
      title: "Demo Project",
      desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`,
      link: "https://www.google.co.in/",
    },
    {
      img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
      title: "Demo Project",
      desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`,
      link: "https://www.google.co.in/",
    },
    {
      img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
      title: "Demo Project",
      desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`,
      link: "https://www.google.co.in/",
    },
    {
      img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
      title: "Demo Project",
      desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`,
      link: "https://www.google.co.in/",
    },
    {
      img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
      title: "Demo Project",
      desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`,
      link: "https://www.google.co.in/",
    },
  ];
  return (
    <Element className="projectContainer" name="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which I done for making lives of people easy.
      </p>
      <div className="projectContainer_projects">
        {client_projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
