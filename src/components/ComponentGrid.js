import React from 'react';
import ComponentCard from './ComponentCard';
import { SimpleGreeting, Counter, Timer, Greeting, TodoList } from './DemoComponents';

const components = [
  {
    id: 1,
    name: 'Simple Greeting',
    description: 'A basic stateless component',
    author: 'John Doe',
    rating: '4.5',
    price: '0.00',
    component: SimpleGreeting
  },
  {
    id: 2,
    name: 'Counter',
    description: 'A component with state',
    author: 'Jane Smith',
    rating: '4.7',
    price: '1.99',
    component: Counter
  },
  {
    id: 3,
    name: 'Timer',
    description: 'A component with useEffect',
    author: 'Bob Johnson',
    rating: '4.2',
    price: '2.99',
    component: Timer
  },
  {
    id: 4,
    name: 'Greeting with Props',
    description: 'A component that uses props',
    author: 'Alice Brown',
    rating: '4.8',
    price: '0.99',
    component: () => <Greeting name="User" />
  },
  {
    id: 5,
    name: 'Todo List',
    description: 'A more complex component with state management',
    author: 'Charlie Wilson',
    rating: '4.9',
    price: '4.99',
    component: TodoList
  }
];

function ComponentGrid({ title = "React Component Showcase" }) {
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

