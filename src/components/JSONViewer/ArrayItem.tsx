import { Children } from "react";
import { ItemProps } from "./types";
import FieldName from "./FieldName";

export default function ArrayItem({
  fieldName,
  name,
  children,
}: ItemProps<Array<DataType>>) {
  return (
    <div className="w-full" id={name}>
      <FieldName value={fieldName} />
      <span className="ml-1 text-base	font-semibold">
        {"["}
        <span className="ml-1 text-neutral-content">
          {Children.toArray(children).length} items
        </span>
      </span>
      <div className="border-l-2 border-dashed border-base-300 pl-6">
        {children}
      </div>
      <span className="text-base font-semibold">{"]"}</span>
    </div>
  );
}
