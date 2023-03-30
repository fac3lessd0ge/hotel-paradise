import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.white,
    fontSize: 100,
    fontWeight: 900,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },

  container: {
    display: 'grid',
    placeItems: 'center',
    height: '93vh',
  },
}));
