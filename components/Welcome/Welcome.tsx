import { Text, Box } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Text component="span" className={classes.title} align="center">
          Гостевой дом{' '}
          <Text
            className={classes.title}
            gradient={{ from: 'orange', to: 'yellow', deg: 45 }}
            variant="gradient"
            component="h1"
            sx={{ display: 'inline' }}
          >
            Рай
          </Text>
        </Text>
      </Box>
    </>
  );
}
