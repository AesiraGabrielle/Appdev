import React from 'react';

const Breadcrumb = ({ path }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        {path.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === path.length - 1 ? 'active' : ''}`}>
            {index === path.length - 1 ? (
              item
            ) : (
              <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;