import { FieldNameProps } from "./types";

export default function FieldName({ value }: FieldNameProps) {
  if (typeof value === "number") {
    return (
      <span className="mr-1 select-none">
        <span className="text-base text-info">
          [<span>{value}</span>]
        </span>
        :
      </span>
    );
  }
  if (!value) {
    return null;
  }
  if (typeof value === "string") {
    return (
      <span className="mr-1 select-none">
        <span className="text-base text-rose-800">
          "<span className="select-text">{value}</span>"
        </span>
        :
      </span>
    );
  }
}
