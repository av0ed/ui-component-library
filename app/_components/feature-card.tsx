import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  Icon: RemixiconComponentType;
  iconAlign: "col" | "row";
  description: string;
  feature: string;
}

const classes = {
  col: {
    container: "flex-col items-center",
    contentWrapper: "items-center",
    description: "text-center",
  },
  row: {
    container: "flex-row",
    contentWrapper: "py-2.5",
    description: "text-left",
  },
};

export default function FeatureCard({
  Icon,
  iconAlign,
  description,
  feature,
}: Props) {
  return (
    <li
      className={`flex w-full gap-5 max-w-screen-sm ${classes[iconAlign].container}`}
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-full shadow shrink-0">
        {Icon && <Icon className="text-indigo-700 h-6 w-6" />}
      </div>
      <div
        className={`flex flex-col gap-y-2 ${classes[iconAlign].contentWrapper}`}
      >
        <span className="text-xl text-neutral-900 font-semibold">
          {feature}
        </span>
        <p className={`text-neutral-600 ${classes[iconAlign].description}`}>
          {description}
        </p>
      </div>
    </li>
  );
}
