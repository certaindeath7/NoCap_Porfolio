import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrap, Motion } from '../../wrapper';
import { client, urlFor } from '../../client';
import ReactTooltip from 'react-tooltip';

import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperience] = useState([]);

  const fetchDataSkills = async (skillsQuery) => {
    try {
      const data = await client.fetch(skillsQuery);
      if (data) {
        // get all the skills available in the database
        setSkills(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataExperience = async (experienceQuery) => {
    try {
      const data = await client.fetch(experienceQuery);
      if (data) {
        // get all the skills available in the database
        setExperience(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';

    fetchDataSkills(skillsQuery);
    fetchDataExperience(experienceQuery);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills and Experience</h2>
      <div className="app__skills-container">
        {/*  skills part*/}
        <motion.div className="app__skill-list">
          {/* iterate skills section */}
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skill-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__experience-list">
          {experiences.map((experience) => (
            <motion.div className="app__experience-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exprience-item-description">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-popup"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wrap(Motion(Skills, 'app__skills'), 'skills', 'app__whitebg');
