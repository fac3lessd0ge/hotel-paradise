import { Box } from '@mantine/core';
import { useStyles } from './AboutUs.styles';
import { TownInfoCard } from './TownInfoCard';
import { TownInfoData } from './TownInfoData';

export const TownInfo = () => {
  const { classes } = useStyles();

  const TownInfoCards = TownInfoData.map(({ ...props }) => <TownInfoCard {...props} />);

  return <Box className={classes.townInfoContainer}>{TownInfoCards}</Box>;
};
