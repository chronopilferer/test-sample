import React from 'react';

function IconButton({ href, icon: Icon }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="icon-link">
            <Icon />
        </a>
    );
  }
  
export default IconButton;