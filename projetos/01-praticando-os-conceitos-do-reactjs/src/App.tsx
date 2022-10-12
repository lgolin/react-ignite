import { Header } from './components/Header';
import { Search } from './components/Search';
import { Task } from './components/Task';
import { TaskList } from './components/TaskList';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Search />
      <Task />
    </div>
  )
}