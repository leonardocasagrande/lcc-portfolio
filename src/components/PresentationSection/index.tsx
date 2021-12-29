import { Avatar, Box, Fade, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Image from 'next/image';
import useStyles from "./styles";

const MainContent = () => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const styles = useStyles();
  return (
    <section>
      <Fade in={true} timeout={1000}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
          <Box mb={4}>
            <Typography variant="h1">
              Fullstack Developer
            </Typography>
          </Box>
          <Box mb={6}>
            <Typography variant="h2">
              Developer with a keen eye for details, always looking for challenges.
            </Typography>
          </Box>
          <Box>
            <Avatar className={styles.avatar}>
              <Image src="/avatar.jpeg" alt="my_picture" width={200} height={200} />
            </Avatar>
          </Box>
          <Box mt={8} p={12} pt={12} paddingX={isMobile ? '8px' : '60px'} pb={24} bgcolor="black" width="100%" display="flex" justifyContent="center" >
            <Box width={isMobile ? '80%' : '60%'} display="flex" flexDirection="column" alignItems="center" >
              <Box mb={4}>
                <Typography variant="h3" color="textSecondary">
                  {'Hi, I\'m Leonardo. Nice to meet you!'}
                </Typography>
              </Box>
              <Box>
                <Typography color="textSecondary">
                  {'I am a software developer, currently working for Hilab as a Fullstack developer.'}
                </Typography>
                <Typography color="textSecondary">
                  {'I have professional experience using React, VueJS, and Java, building scaling web applications.'}
                </Typography>
                <Typography color="textSecondary">
                  {'Curious about technology by nature, I am always learning what\'s new, looking for the best coding practices and useful libraries.'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </section>
  )
}

export default MainContent;