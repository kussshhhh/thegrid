import React from 'react';

function ComponentCard({ component }) {
  const ComponentToRender = component.component;

  return (
    <div className='component-card'>
      <div className='component-preview'>
          {component.websiteUrl?(
            <iframe
                src={component.websiteUrl}
                title= '${component.name}'
                width="100%"
                height="200"
                allowFullScreen
            />
          ):(
            <ComponentToRender/>
          )}
       </div>
      <h3 className='component-name'>{component.name}</h3>
      <p className='component-description'>{component.description}</p>
      <div className='component-meta'>
        <span className='component-author'>{component.author}</span>
        <span className='component-rating'>{component.rating}</span>
      </div>
      <div className='component-price'>${component.price}</div>
    </div>
  );
}

export default ComponentCard;