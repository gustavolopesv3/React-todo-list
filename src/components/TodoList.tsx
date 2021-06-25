import { Todo } from '../models/Todo';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const todos: Todo[] = [
    {
      id: 1,
      title: 'supermercado',
      done: false,
    },
    {
      id: 2,
      title: 'academia',
      done: true,
    },
  ];
  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Terefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((item) => {
          return <TodoListItem key={item.id} todo={item}></TodoListItem>;
        })}
      </tbody>
    </table>
  );
};
