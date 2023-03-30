import { Box, Paper, Text } from '@mantine/core';
import { useStyles } from './RoomsSection.styles';
import { RoomsResponce } from './types/RoomsResponce';

interface RoomsSectionProps {
  rooms: RoomsResponce;
}

export const RoomsSection = ({ rooms }: RoomsSectionProps) => {
  const { classes } = useStyles();

  return (
    <Paper id="rooms" className={classes.roomsWrapper}>
      <Box className={classes.roomsContainer}>
        <Text
          component="h2"
          gradient={{ from: 'orange', to: 'yellow', deg: 45 }}
          variant="gradient"
          className={classes.roomsHeading}
        >
          Номера
        </Text>
        <div>
          <>{JSON.stringify(rooms)}</>
        </div>
      </Box>
    </Paper>
  );
};
