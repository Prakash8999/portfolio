"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A React.js-based portfolio is a dynamic, customizable web app for showcasing projects and skills",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Prakash8999/portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MyStory-Speaks",
    description: "Your innovative companion for mastering English through interactive storytelling!",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/posts/prakash-jha-44471622b_introducing-mystory-speaks-your-innovative-activity-7197967895157452800-yA4m/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Redlone",
    description: "A Blog/Article project called Redlone using Next Js with TypeScript! 🚀",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/posts/prakash-jha-44471622b_hey-everyone-i-wanted-to-share-that-im-activity-7180166709712928769-0v3I/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pixslash",
    description: "Discover the Perfect Image: Unsplash + Pixabay = Pixslash",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7100869190818947073/?originTrackingId=t6RpgjJ5SKKNFO6fLDTshg%3D%3D",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NoSaveWhatsApp",
    description: "A React.js-based app that directly redirects to WhatsApp using a provided phone number without saving it.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Prakash8999/NoSaveWhatsApp",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
    
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
