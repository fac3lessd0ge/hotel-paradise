import {
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Text,
  rem,
  Drawer,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useStyles } from './Header.styles';

interface HeaderProps {
  links: { link: string; label: string }[];
}

export function Header({ links }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={cx(classes.link)} onClick={() => {}}>
      {link.label}
    </Link>
  ));

  return (
    <MantineHeader className={classes.header} height="7vh">
      <Container className={classes.headerContainer}>
        <Text
          fz={rem(42)}
          fw={800}
          gradient={{ from: 'orange', to: 'yellow', deg: 45 }}
          inherit
          variant="gradient"
          component="h1"
        >
          Рай
        </Text>

        <Group spacing={15} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Drawer
          position="top"
          opened={opened}
          onClose={toggle}
          title="Authentication"
          overlayProps={{ opacity: 0.5, blur: 4 }}
        >
          <Box className={classes.linksDrawer}>{items}</Box>
        </Drawer>
      </Container>
    </MantineHeader>
  );
}
