import { useState } from "react";
import FieldName from "./FieldName";
import { ItemProps } from "./types";

export default function ObjectItem({
  fieldName,
  name,
  children,
}: ItemProps<object>) {
  const [collapsed, setCollapsed] = useState(false);
  if (!collapsed) {
    return (
      <div id={name}>
        <FieldName value={fieldName} />
        <span className="text-base font-semibold">
          <span className="select-none">{"{"}</span>
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
        </span>
        <div className="border-l-2 border-dashed border-base-300 pl-6">
          {children}
        </div>
        <span className="select-none text-base font-semibold">{"}"}</span>
      </div>
    );
  }
  return (
    <div id={name}>
      <FieldName value={fieldName} />
      <span className="text-base font-semibold">
        <span className="select-none" onClick={() => setCollapsed(false)}>
          {"{...}"}
        </span>
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
      </span>
    </div>
  );
}
