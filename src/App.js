import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/forms/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;