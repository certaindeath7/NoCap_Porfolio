import React from 'react';
import { BsLinkedin, BsGithub, BsMailbox2 } from 'react-icons/bs';

const SocialMediaIcons = () => {
  return (
    <div className="app__socialIcons">
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsMailbox2 />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
