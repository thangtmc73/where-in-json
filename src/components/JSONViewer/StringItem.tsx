import FieldName from "./FieldName";
import { ItemProps } from "./types";

export default function StringItem({
  fieldName,
  name,
  value,
}: ItemProps<string>) {
  return (
    <div className="flex items-center" id={name}>
      <FieldName value={fieldName} />
      <span className="select-none text-sm text-base-content	opacity-70">
        string
      </span>
      <span className="ml-1 flex select-none text-base text-base-content">
        "<span className="select-text">{value}</span>"
      </span>
    </div>
  );
}
