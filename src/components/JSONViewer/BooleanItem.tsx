import FieldName from "./FieldName";
import { ItemProps } from "./types";

export default function BooleanItem({
  fieldName,
  name,
  value,
}: ItemProps<boolean>) {
  return (
    <div className="flex items-center" id={name}>
      <FieldName value={fieldName} />
      <span className="ml-1 text-sm text-secondary opacity-70">boolean</span>
      <span className="ml-1 text-base text-secondary">
        {value ? "true" : "false"}
      </span>
    </div>
  );
}
