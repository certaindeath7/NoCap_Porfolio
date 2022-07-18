import React from 'react';

const NavigationScrolls = ({ active }) => {
  return (
    <div className="app__navigationScrolls">
      {['home', 'about', 'works', 'skills', 'contact'].map((item, index) => (
        // return to single value
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigationScrolls-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavigationScrolls;
