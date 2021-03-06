import React from 'react';
import { Navbar } from './components/Navbar';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="uk-container">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
