import React from "react";
import "./ProjectList.css";

export default function ProjectList({ projects }) {
  let count = 0;
  return projects.map((project) => {
    return (
      <div className="project" key={count++}>
        <img src={project.img} alt={project.category} />
      </div>
    );
  });
}
