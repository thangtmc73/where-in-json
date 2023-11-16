import FieldName from "./FieldName";
import { ItemProps } from "./types";

export default function ObjectItem({
  fieldName,
  name,
  children,
}: ItemProps<object>) {
  return (
    <div id={name}>
      <FieldName value={fieldName} />
      <span className="pl-1	text-base	font-semibold">{"{"}</span>
      <div className="border-l-2 border-dashed border-base-300 pl-6">
        {children}
      </div>
      <span className="text-base font-semibold">{"}"}</span>
    </div>
  );
}
