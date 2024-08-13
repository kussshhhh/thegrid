import React from 'react' ;
import ComponentCard from './ComponentCard' ;

function ComponentGrid({title, components}){
    return (
        <section className='component-grid'>
            <h2 className='section-title'>{title}</h2>

            <div className='grid'>
                {components.map(component => (
                    <ComponentCard key = {component.id} component ={component}/>
                ))}
            </div>
        </section>
    )
}



export default ComponentGrid ;









