import * as React from 'react';
import TodoItem from './TodoItem'
interface IAppProps {
  todos: any
}

class Todos extends React.Component<IAppProps> {
  public render() {
    return this.props.todos.map( (todo: any) => {
        <TodoItem key={todo.id} todo={todo} />
      })
  }
}

export default Todos;
