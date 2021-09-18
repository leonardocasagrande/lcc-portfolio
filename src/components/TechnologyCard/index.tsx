import { Box, Typography } from "@material-ui/core"
import React from "react";
import Image from 'next/image';
import useStyles from "./styles";

type TProps = {
  icon: string,
  title: string,
  description: string,
  languages: string[],
  technologies: string[]
}

const TechnologyCard = ({ icon, title, description, languages, technologies }: TProps) => {
  const styles = useStyles();
  return (
    <Box className={styles.root} borderRight="1px solid #BDBDBD" display="flex" flexDirection="column" alignItems="center" flex={1} pt={8} pb={8} pr={6} pl={6}>
      <Box mb={4}>
        <Image src={icon} alt={title} width={50} height={50} />
      </Box>
      <Box mb={2}>
        <Typography  variant="h3">
          {title}
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography >
          {description}
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography >
          Languages I know:
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography >
          {languages.map((el, index) => (
            `${el}${languages.length === index + 1 ? "" : ", "}`
          ))}
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography >
          Technologies I use:
        </Typography>
      </Box>
      <Box mb={4}>
        {technologies.map((el) => (
          <Box key={el} mb={0.5}>
            <Typography >
              {el}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TechnologyCard;