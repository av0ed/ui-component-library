import { RemixiconComponentType } from "@remixicon/react";
import Link from "next/link";

interface Props {
  Icon: RemixiconComponentType;
  classes: string;
  href?: string;
  isDisabled?: boolean;
  role?: string;
}

export function IconButton({ Icon, classes, href, isDisabled, role }: Props) {
  return href ? (
    <Link className={classes} href={href}>
      <Icon />
    </Link>
  ) : (
    <button className={classes} disabled={isDisabled} role={role}>
      <Icon />
    </button>
  );
}
