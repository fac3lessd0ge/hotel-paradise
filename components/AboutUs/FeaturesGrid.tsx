import { ThemeIcon, Text, Title, Container, SimpleGrid } from '@mantine/core';
import { useStyles } from './AboutUs.styles';
import { FeaturesData } from './FeaturesData';

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={64} radius={40}>
        <Icon size="3rem" stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="md" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function FeaturesGrid({ title, description, data = FeaturesData }: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
