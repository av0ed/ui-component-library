import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  Icon: RemixiconComponentType;
  align: "col" | "row";
  description: string;
  feature: string;
}

const classes = {
  col: {
    container:
      "flex flex-col justify-start items-center w-full max-w-screen-sm",
    description: "text-center text-neutral-600 mt-2",
    feature: "text-xl text-neutral-900 font-semibold mt-5",
    icon: "text-indigo-700 h-6 w-6",
    iconWrapper:
      "flex items-center justify-center h-12 w-12 rounded-full shadow",
  },
  row: {
    container: "flex flex-row",
    description: "",
    feature: "",
    icon: "",
    iconWrapper: "",
  },
};

export default function FeatureCard({
  Icon,
  align,
  description,
  feature,
}: Props) {
  return (
    <li className={classes[align].container}>
      <div className={classes[align].iconWrapper}>
        {Icon && <Icon className={classes[align].icon} />}
      </div>
      <span className={classes[align].feature}>{feature}</span>
      <p className={classes[align].description}>{description}</p>
    </li>
  );
}
