import * as React from 'react';
import { Modal, TextField, Typography, Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import './AddProject.css';

interface AddProjectProps {
  closeHandler: () => void;
  saveHandler: (name: string) => void;
  open: boolean;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: 'none',
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      outline: 0,
      position: 'absolute',
      width: 400,
      height: 200,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      color: 'rebeccapurple',
    },
  }),
);

const AddProject: React.FC<AddProjectProps> = (props: AddProjectProps) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
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
      <div style={modalStyle} className={classes.paper}>
        <Typography variant="h6"> Add new </Typography>
        <TextField label="Name" value={value} onChange={handleChange} variant="outlined" /> <br />
        <Button
          className="AddProject-save-btn"
          variant="contained"
          onClick={() => {
            saveHandler(value);
          }}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default AddProject;
