import { Box, IconButton, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Mail, MailOutlined } from "@material-ui/icons";
import React from "react";
import { Logo } from "..";
import SocialMediaButton from "../SocialMediaButton";

const Footer = () => {
  return (
    <footer>
      <Box mt={5} p={12} pt={12} gridGap={32} pb={12} bgcolor="black" width="100%" display="flex" alignItems="center" flexDirection="column">
        <Typography color="textSecondary">
          {'Learning, building & leveling up every day.'}
        </Typography>
        <Box display="flex" gridGap={16} >
          <SocialMediaButton url="https://www.linkedin.com/in/leonardo-casagrande-324501198/" icon={<LinkedIn />} />
          <SocialMediaButton url="https://github.com/leonardocasagrande" icon={<GitHub />} />
          <SocialMediaButton url="mailto:leoc.casagrande82@gmail.com" icon={<MailOutlined />} />
        </Box>
        <Typography color="textSecondary" variant="subtitle1">
          Handcrafted by me, using NextJS and MaterialUI
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer;