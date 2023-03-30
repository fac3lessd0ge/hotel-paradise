import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles(() => ({
  aboutWrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 0,
  },

  aboutContainer: {
    width: '80%',
  },

  aboutHeading: {
    fontSize: rem(48),
    fontWeight: 700,
  },
}));
