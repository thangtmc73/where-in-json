import FieldName from "./FieldName";
import { ItemProps } from "./types";

export default function DefaultItem({
  fieldName,
  name,
  value,
}: ItemProps<null | undefined | number>) {
  return (
    <div className="flex items-center" id={name}>
      <FieldName value={fieldName} />
      <span className="ml-1 text-base text-error">
        {returnValueType(value)}
      </span>
    </div>
  );
}

function returnValueType(value: null | undefined | number) {
  if (value === null) {
    return "null";
  }
  if (value === undefined) {
    return "underfined";
  }
  return "unknown";
}
