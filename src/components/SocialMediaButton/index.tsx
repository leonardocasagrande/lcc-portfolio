import { IconButton } from "@material-ui/core";
import React, { ReactElement } from "react";
import useStyles from "./styles";

type TProps = {
  icon: ReactElement,
  url: string
}

const SocialMediaButton = ({ icon, url }: TProps) => {
  const classes = useStyles();
  return (
    <IconButton href={url} target="_blank" color="secondary" className={classes.root}>
      {icon}
    </IconButton>
  )
}

export default SocialMediaButton;