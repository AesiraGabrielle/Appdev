import React from 'react';

const Breadcrumb = ({ items }) => {
  if (!items || !Array.isArray(items)) {
    return null; // If items is undefined or not an array, render nothing
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
            {index === items.length - 1 ? (
              item.name
            ) : (
              <a href={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>{item.name}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
