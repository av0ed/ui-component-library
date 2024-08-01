interface Props {
  classes: string;
  text: string;
}

export default function Badge({ classes, text }: Props) {
  return <span className={classes}>{text}</span>;
}
