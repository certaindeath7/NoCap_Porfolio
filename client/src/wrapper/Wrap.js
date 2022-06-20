import React from 'react';
import { NavigationScrolls, SocialMediaIcons } from '../components';
const Wrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMediaIcons />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationScrolls active={idName} />
      </div>
    );
  };

export default Wrap;
