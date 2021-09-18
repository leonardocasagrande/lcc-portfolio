import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    }
  }));

export default useStyles;