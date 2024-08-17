import React, {useState, useEffect} from 'react';
import ComponentCard from './ComponentCard';
import { SimpleGreeting, Counter, Timer, Greeting, TodoList } from './DemoComponents';

const components = [

];

function ComponentGrid({ title = "React Component Showcase" }) {

  const [components, setComponents] = useState([]) ;
  const [isLoading, setIsLoading] = useState(true) ;
  const [error, setError] = useState(null) ;

  useEffect(() => {
    fetchComponents() ;

  }, []) ;

  const fetchComponents = async () => {
    try {
      setIsLoading(true) ;
      const response = await fetch('http://localhost:3000/components')
      if(response.ok) {
        const data = await response.json() ;
        setComponents(data) ;
      }else{
        setError('Failed to fetch components') ;
      }
    } catch (error) {
      setError('Error fetching components: ' + error.message) ;
    } finally{
      setIsLoading(false) ;
    }
  }

  if(isLoading) return <div> Loading components...</div>
  if(error) return <div>Error:{error}</div>

  return (
    <section className='component-grid'>
      <h2 className='section-title'>{title}</h2>
      <div className='grid'>
        {components.map(component => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>
    </section>
  );
}

export default ComponentGrid;

