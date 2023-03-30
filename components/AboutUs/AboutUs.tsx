import { Text, Box, Paper } from '@mantine/core';
import { FeaturesData } from './FeaturesData';
import { useStyles } from './AboutUs.styles';
import { FeaturesGrid } from './FeaturesGrid';
import { TownInfo } from './TownInfo';

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
        <FeaturesGrid
          title="Привилегии отеля"
          description="Каждый номер с удобствами"
          data={FeaturesData}
        />
        <TownInfo />
      </Box>
    </Paper>
  );
};
