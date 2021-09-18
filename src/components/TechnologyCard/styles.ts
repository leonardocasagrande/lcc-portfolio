import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRight: "1px solid #BDBDBD",
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      borderBottom: "1px solid #BDBDBD",
    },
    "&:last-child": {
      borderRight: 'none',
      borderBottom: 'none'
    }
  }
}));

export default useStyles;