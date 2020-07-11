import * as React from 'react';
import SortableTree from 'react-sortable-tree';
import './Todo.css';
import { Paper, Container, Typography, IconButton, Icon } from '@material-ui/core';

export interface FlexObj {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const INITIAL_TODO_ITEMS: FlexObj[] = [
  { title: 'Chicken', children: [{ title: 'Egg' }] },
  { title: 'Fish', children: [{ title: 'fingerline' }] },
];

const Todo: React.FC = () => {
  const [todoList, setTodoList] = React.useState<FlexObj[]>(INITIAL_TODO_ITEMS);
  const treeOnChangeHandler = (treeData: FlexObj[]) => setTodoList(treeData);
  return (
    <Container className="Todo-container" maxWidth="sm" component={Paper}>
      <div className="Todo-header-container">
        <div className="Todo-subtitle">
          <Typography variant="subtitle1" color="textSecondary">
            Current List
          </Typography>
        </div>
        <div className="Todo-header">
          <Typography variant="h6"> Your Projects </Typography>
        </div>
        <IconButton className="Todo-add">
          <Icon>add</Icon>
        </IconButton>
      </div>
      <div className="Todo-body">
        <SortableTree
          treeData={todoList}
          onChange={treeOnChangeHandler}
          generateNodeProps={({ node }) => ({
            title: <div>{node.title}</div>,
          })}
          isVirtualized={false}
        />
      </div>
    </Container>
  );
};

export default Todo;
