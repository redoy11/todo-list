import * as React from 'react';
import { Modal, TextField, Typography, Button, Paper } from '@material-ui/core';
import './AddTodo.css';

interface AddTodoProps {
  closeHandler: () => void;
  saveHandler: (name: string) => void;
  open: boolean;
}

const AddTodo: React.FC<AddTodoProps> = (props: AddTodoProps) => {
  const { open, closeHandler, saveHandler } = props;
  const [value, setValue] = React.useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    setValue('');
  }, [open]);
  return (
    <Modal open={open} onClose={closeHandler}>
      <Paper className="AddTodo-modal-container">
        <Typography variant="h6" color="textPrimary">
          New
        </Typography>
        <TextField label="Task" value={value} onChange={handleChange} variant="outlined" /> <br />
        <Button
          className="AddTodo-save-btn"
          variant="contained"
          disabled={value === ''}
          onClick={() => {
            saveHandler(value);
          }}
        >
          Save
        </Button>
      </Paper>
    </Modal>
  );
};

export default AddTodo;
