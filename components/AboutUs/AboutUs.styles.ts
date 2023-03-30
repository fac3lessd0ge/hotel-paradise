import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  aboutWrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 0,
  },

  aboutContainer: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: rem(40),
  },

  aboutHeading: {
    fontSize: rem(48),
    fontWeight: 700,
  },
  wrapper: {
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
    fontSize: rem(48),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',
    fontSize: rem(32),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(22),
      textAlign: 'left',
    },
  },

  townInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(100),
  },

  townInfoDetailCard: {
    paddingLeft: 5,
    // display: 'flex',
    borderRadius: rem(10),
    overflow: 'hidden',
  },

  leftOriented: {
    paddingLeft: 0,
    paddingRight: 5,
  },

  detailCardImg: {
    borderRadius: rem(10),
    float: 'right',
    marginLeft: rem(10),
    height: '400px',
  },

  detailCardText: {
    fontSize: rem(24),
  },

  floatRight: {
    float: 'left',
    marginLeft: 0,
    marginRight: rem(10),
  },
}));
