import { Children, useState } from "react";
import { ItemProps } from "./types";
import FieldName from "./FieldName";

export default function ArrayItem({
  fieldName,
  name,
  children,
}: ItemProps<Array<DataType>>) {
  const [collapsed, setCollapsed] = useState(false);
  if (!collapsed) {
    return (
      <div className="w-full" id={name}>
        <FieldName value={fieldName} />
        <span className="text-base font-semibold text-teal-500">
          {"["}
          <button
            className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-sm border-2 border-solid border-base-300 align-bottom text-base-content"
            onClick={() => setCollapsed(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          {renderNumberOfItems(Children.toArray(children).length)}
        </span>
        <div className="border-l-2 border-dashed border-base-300 pl-6">
          {children}
        </div>
        <span className="text-base font-semibold text-teal-500">{"]"}</span>
      </div>
    );
  }
  return (
    <div className="w-full" id={name}>
      <FieldName value={fieldName} />
      <span className="text-base font-semibold text-teal-500">
        <span onClick={() => setCollapsed(false)}>{"[...]"}</span>
        <button
          className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-sm border-2 border-solid border-base-300 align-bottom text-base-content"
          onClick={() => setCollapsed(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
        {renderNumberOfItems(Children.toArray(children).length)}
      </span>
    </div>
  );
}

function renderNumberOfItems(value: number) {
  return (
    <span className="ml-1 bg-base-200 p-1 text-sm text-base-content">
      {value} items
    </span>
  );
}
