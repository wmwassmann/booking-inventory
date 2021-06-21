import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  ordersBackground: {
  
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgb(65, 65, 65)',
    display: 'flex',
    justifyContent: 'center'
  },

  paper: {
    background: 'rgb(130 164 169 / 42%)',
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    width: '1200px',
    height: '650px',
    position:' relative',
    top: '70px',
    right: '400px'
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
    marginTop: theme.spacing(3),
    // display: 'flex'
    
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  formBase: {
    
  },
  formInfo: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  formMaintenance: {

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