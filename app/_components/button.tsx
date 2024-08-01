import Link from "next/link";

interface Props {
  children: React.ReactNode;
  classes: string;
  href?: string;
  isDisabled?: boolean;
  role?: string;
}

export function Button({ children, classes, href, isDisabled, role }: Props) {
  return href ? (
    <Link className={classes} href={href}>
      {children}
    </Link>
  ) : (
    <button className={classes} disabled={isDisabled} role={role}>
      {children}
    </button>
  );
}
