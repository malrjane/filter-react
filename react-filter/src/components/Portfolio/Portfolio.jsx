import React, { useState } from "react";
import "./Portfolio.css";
import ProjectList from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";

export default function Portfolio({ projects }) {
  const filterButtons = ["All", "Websites", "Flayers", "Business Cards"];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selected, setSelected] = useState("All");

  const filterProjects = (selectedFilter) => {
    setSelected(selectedFilter);

    if (selectedFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedFilter)
      );
    }
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={filterButtons}
        selected={selected}
        onSelectFilter={filterProjects}
      />

      <div className="container">
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}
