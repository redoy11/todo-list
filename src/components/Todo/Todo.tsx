import * as React from 'react';
import SortableTree from 'react-sortable-tree';
import './Todo.css';

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
    <div>
      <SortableTree
        treeData={todoList}
        onChange={treeOnChangeHandler}
        generateNodeProps={({ node }) => ({
          title: <div>{node.title}</div>,
        })}
        isVirtualized={false}
      />
    </div>
  );
};

export default Todo;
