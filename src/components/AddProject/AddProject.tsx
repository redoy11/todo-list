import * as React from 'react';
import { Modal, TextField, Typography, Button, Paper } from '@material-ui/core';
import './AddProject.css';

interface AddProjectProps {
  closeHandler: () => void;
  saveHandler: (name: string) => void;
  open: boolean;
}

const AddProject: React.FC<AddProjectProps> = (props: AddProjectProps) => {
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
      <Paper className="AddProject-modal-container">
        <Typography variant="h6"> Add new Project </Typography>
        <TextField label="Name" value={value} onChange={handleChange} variant="outlined" /> <br />
        <Button
          className="AddProject-save-btn"
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

export default AddProject;
