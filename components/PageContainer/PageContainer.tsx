import { useStyles } from './PageContainer.styles';

type PageContainerProps = React.PropsWithChildren;

export const PageContainer = ({ children }: PageContainerProps) => {
  const { classes } = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
};
