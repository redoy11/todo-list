import * as React from 'react';
import SortableTree from 'react-sortable-tree';
import { Paper, Container, Typography, IconButton, Icon } from '@material-ui/core';
import AddTodo from '../AddTodo/AddTodo';
import { Store } from 'redux';
import { getTdItems, setItems } from '../../store/ducks/tdItems';
import { connect } from 'react-redux';
import './Todo.css';

/** inteface for flexible object */
export interface FlexObj {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/** inteface for Todo component props */
export interface TodoProps {
  todoList: FlexObj[];
  setItemsActionCreator: typeof setItems;
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { todoList, setItemsActionCreator } = props;
  const [open, setOpen] = React.useState(false);
  const treeOnChangeHandler = (treeData: FlexObj[]) => setItemsActionCreator(treeData);
  const saveHandler = (name: string) => {
    setItemsActionCreator([...todoList, { title: name, children: [] }]);
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
      <AddTodo open={open} closeHandler={closeHandler} saveHandler={saveHandler} />
      <Container className="Todo-container" maxWidth="sm" component={Paper}>
        <div className="Todo-header-container">
          <div className="Todo-subtitle">
            <Typography variant="subtitle1" color="textSecondary">
              Current List
            </Typography>
          </div>
          <div className="Todo-header">
            <Typography variant="h6"> Your Task List </Typography>
          </div>
          <IconButton className="Todo-add" onClick={openHandler}>
            <Icon>add</Icon>
          </IconButton>
          {todoList.length === 0 && (
            <div className="Todo-empty-list">
              <Typography variant="subtitle1" color="secondary">
                List is empty. Please add to see items on list.
              </Typography>
            </div>
          )}
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

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  todoList: FlexObj[];
}

/** Map props to state  */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const result = {
    todoList: getTdItems(state),
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  setItemsActionCreator: setItems,
};

/** connect App to the redux store */
const ConnectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ConnectedTodo;
