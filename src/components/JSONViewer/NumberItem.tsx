import FieldName from "./FieldName";
import { ItemProps } from "./types";

export default function NumberItem({
  fieldName,
  name,
  value,
}: ItemProps<number>) {
  return (
    <div className="flex items-center" id={name}>
      <FieldName value={fieldName} />
      <span className="text-sm text-info opacity-70">number</span>
      <span className="ml-1 text-base text-info">{value}</span>
    </div>
  );
}
