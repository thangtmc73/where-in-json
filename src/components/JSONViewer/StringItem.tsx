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
      <span className="text-sm text-base-content opacity-70">string</span>
      <span className="ml-1 flex text-base text-base-content">
        "<span>{value}</span>"
      </span>
    </div>
  );
}
