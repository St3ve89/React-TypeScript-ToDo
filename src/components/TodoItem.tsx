import * as React from 'react';

interface IAppProps {
  todo: any
}

export class TodoItem extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

export default TodoItem
