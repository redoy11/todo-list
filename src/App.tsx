import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import 'react-sortable-tree/style.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

export default App;
