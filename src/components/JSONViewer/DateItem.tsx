import FieldName from "./FieldName";
import { ItemProps } from "./types";

export default function DateItem({
  fieldName,
  name,
  value,
}: ItemProps<string>) {
  return (
    <div className="flex items-center" id={name}>
      <FieldName value={fieldName} />
      <span className="ml-1 text-sm text-accent opacity-70">date</span>
      <span className="ml-1 flex text-base text-accent">
        "<span>{new Date(value).toString()}</span>"
      </span>
    </div>
  );
}
