import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Wrap } from '../../wrapper';
import { client, urlFor } from '../../client';

import './Works.scss';

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [projectItem, setProjectItem] = useState([]);
  const [activeChosenItem, setActiveChosenItem] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const fetchData = async (projectsQuery) => {
    try {
      const data = await client.fetch(projectsQuery);
      if (data) {
        setProjects(data);
        setProjectItem(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const projectsQuery = '*[_type == "works"]';
    fetchData(projectsQuery);
  }, []);

  const handlePastProjects = (project) => {
    setProjectItem(project);
    setAnimateCard([
      {
        y: 100,
        opacity: 0,
      },
    ]);
  };
  return (
    <>
      <h2>
        My <span>Work</span>
      </h2>
      <div className="app__pastProjects">
        {['Web Apps', 'React', 'Mobile App', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handlePastProjects(item)}
            className={`app__pastProjects-item app__flex p-text ${
              activeChosenItem === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {projectItem.map((content, value) => (
          <div className="app__project-item app__flex" key={value}>
            <div className="app__project-img app__flex">
              <img src={urlFor(content.imgUrl)} alt={content.imgUrl} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.2 }}
                className="app__project-item-hover app__flex"
              >
                {/* Open in new tab */}
                {/* Project Link */}
                <a href={content.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    whileInView={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                {/* Open in new tab */}
                {/* Source code Link */}
                <a href={content.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    whileInView={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__project-content app__flex">
              <h4 className="bold-text">{content.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {content.description}
              </p>

              <div className="app__project-tag app__flex">
                <p className="p-text">{content.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Wrap(Works, 'works');
