import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { Wrap, Motion } from '../../wrapper';
import { urlFor, client } from '../../client';
const About = () => {
  const [abouts, setAbout] = useState([]);

  const fetchData = async (aboutsQuery) => {
    try {
      const data = await client.fetch(aboutsQuery);
      if (data) {
        setAbout(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // run once when the component loads
  useEffect(() => {
    const aboutsQuery = '*[_type == "abouts"]';
    fetchData(aboutsQuery);
  }, []);
  return (
    <>
      {/* Fragment shortcut */}
      <h2 className="head-text">
        This <span>sums</span> up me as an <span>Employee</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((content, value) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, type: 'tween' }}
            className="app__profile-item"
            key={abouts.title + value}
          >
            <img src={urlFor(content.imgUrl)} alt={content.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {content.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {content.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default Wrap(Motion(About, 'app__about'), 'about', 'app__whitebp');
