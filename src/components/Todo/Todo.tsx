import * as React from 'react';
import SortableTree from 'react-sortable-tree';
import './Todo.css';
import { Paper, Container, Typography, IconButton, Icon } from '@material-ui/core';
import AddProject from '../AddProject/AddProject';

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
  const [open, setOpen] = React.useState(false);
  const treeOnChangeHandler = (treeData: FlexObj[]) => setTodoList(treeData);
  const saveHandler = (name: string) => {
    setTodoList([...todoList, { title: name, children: [] }]);
    setOpen(false);
  };
  const openHandler = () => {
    setOpen(true);
  };
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <AddProject open={open} closeHandler={closeHandler} saveHandler={saveHandler} />
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
          <IconButton className="Todo-add" onClick={openHandler}>
            <Icon>add</Icon>
          </IconButton>
        </div>
        <div className="Todo-body">
          <SortableTree
            treeData={todoList}
            onChange={treeOnChangeHandler}
            generateNodeProps={({ node }) => ({
              title: (
                <div>
                  <span style={{ verticalAlign: 'sub', margin: '0px 10px' }}>
                    <Icon fontSize="small" className="item-dot">
                      fiber_manual_record
                    </Icon>
                  </span>
                  {node.title}
                </div>
              ),
            })}
            isVirtualized={false}
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Todo;
