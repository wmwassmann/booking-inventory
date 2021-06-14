import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    background: 'rgb(130 164 169 / 42%)',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  mascot: {
    width: '200px'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  text: {
    color: 'black'
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    color: 'black'
   
  },
}));