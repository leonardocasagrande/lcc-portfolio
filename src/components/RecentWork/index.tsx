import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import ProjectButton from "../ProjectButton";

const RecentWork = () => {
    return (
        <Box mt={10} display="flex" justifyContent="center">
            <Box display="flex" gridGap={24} justifyContent="center" width="1000px" maxWidth="100%" p={2} flexDirection="column">
                <Typography variant="h3">
                    My Recent Work
                </Typography>
                <Typography variant="h2">
                    {"Here are a few personal projects I've worked on recently."}
                </Typography>
                <Box mt={8}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <ProjectButton image="/move-it.jpeg" title="Move It" width="100%" url="https://move-it-six-swart.vercel.app/" />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default RecentWork;