import React from 'react' ;

function ComponentCard({component}){
    return (
        <div className='component-card'>
            <img src={component.image} alt={component.name} className='component-image'/>
            <h3 className='component-name'>{component.name}</h3>
            <p className='component-description'>{component.description}</p>
            <div className='component-meta'>
                <span className='component-author'>{component.author}</span>
                <span className='component-rating'>{component.rating}</span>
            </div>
            
            <div className='component-price'>${component.price}</div>


        </div>
    )
}


export default ComponentCard ;









