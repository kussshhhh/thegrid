import React from 'react';

function ComponentCard({ component }) {
  const ComponentToRender = component.component;
  const iframeContent = `
    <html>
      <head>
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/babel">
          const ComponentToRender = ${ComponentToRender.toString()};
          ReactDOM.render(<ComponentToRender />, document.getElementById('root'));
        </script>
      </body>
    </html>
  `;

  return (
    <div className='component-card'>
      <iframe
        srcDoc={iframeContent}
        title={component.name}
        className='component-preview'
        sandbox="allow-scripts"
      />
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


