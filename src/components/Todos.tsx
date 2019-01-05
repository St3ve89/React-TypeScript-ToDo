import * as React from 'react';

interface IAppProps {
  todos: any
}

class Todos extends React.Component<IAppProps> {
  public render() {
    console.log(this.props.todos)
    return (
      <div>
        <h1>Todos</h1>
      </div>
    );
  }
}

export default Todos;
