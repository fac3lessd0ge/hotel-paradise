import { Paper, Box, Text } from '@mantine/core';
import { useStyles } from './AboutUs.styles';

export const AboutUs = () => {
  const { classes } = useStyles();

  return (
    <Paper id="about" className={classes.aboutWrapper}>
      <Box className={classes.aboutContainer}>
        <Text
          component="h2"
          gradient={{ from: 'orange', to: 'yellow', deg: 45 }}
          variant="gradient"
          className={classes.aboutHeading}
        >
          О нас
        </Text>
      </Box>
    </Paper>
  );
};
