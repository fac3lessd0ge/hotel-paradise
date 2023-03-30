import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import { useStyles } from './AboutUs.styles';

export interface TownInfoCardProps {
  imgSrc: string;
  imgAlt?: string;
  body: string;
  left?: boolean;
}

export const TownInfoCard = ({
  imgSrc,
  body,
  imgAlt = 'Фотография города',
  left = false,
}: TownInfoCardProps) => {
  const { classes } = useStyles();

  return (
    <Box className={`${classes.townInfoDetailCard} ${left ? classes.leftOriented : ''}`}>
      <Image
        className={`${classes.detailCardImg} ${left ? classes.floatRight : ''}`}
        src={imgSrc}
        height={400}
        width={600}
        alt={imgAlt}
      />
      <Text className={classes.detailCardText}>{body}</Text>
    </Box>
  );
};
