import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles(() => ({
  roomsWrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 0,
  },

  roomsContainer: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: rem(40),
  },

  roomsHeading: {
    fontSize: rem(48),
    fontWeight: 700,
  },
}));
