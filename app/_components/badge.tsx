import { BadgeClasses } from "@/types/badge";

interface Props {
  classes: BadgeClasses[];
  text: string;
}

export default function Badge({ classes, text }: Props) {
  const badgeClasses = classes.join(" ");

  return <span className={badgeClasses}>{text}</span>;
}
