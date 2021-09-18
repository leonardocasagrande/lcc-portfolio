import { Box, Card, Fade, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import TechnologyCard from "../TechnologyCard";
import { technologyInfo } from "../../content";

const TechnologiesSection = () => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section>
      <Fade in={true} timeout={1000}>
        <Box zIndex={9} display="flex" bgcolor="transparent" mt={-15} justifyContent="center">
          <Box width="1200px" maxWidth="90%" bgcolor="#EFEFEF" borderRadius={15} display="flex"
            flexDirection={isMobile ? 'column' : 'row'} >
            {technologyInfo.map((el) => (
              <TechnologyCard key={el.title} {...el} />
            ))}
          </Box>
        </Box>
      </Fade>
    </section>
  )
}

export default TechnologiesSection;