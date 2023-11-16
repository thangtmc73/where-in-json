import { chainElementID } from "../../utils";
import { ItemProps } from "./types";
import ArrayItem from "./ArrayItem";
import BooleanItem from "./BooleanItem";
import DateItem from "./DateItem";
import DefaultItem from "./DefaultItem";
import NumberItem from "./NumberItem";
import ObjectItem from "./ObjectItem";
import StringItem from "./StringItem";

export default function Item(props: ItemProps) {
  const { value, name } = props;
  if (typeof value === "object" && Array.isArray(value)) {
    return (
      <ArrayItem {...props}>
        {value.map((item, index) => (
          <Item
            key={chainElementID(name, index.toString())}
            fieldName={index}
            value={item}
            name={chainElementID(name, index.toString())}
          />
        ))}
      </ArrayItem>
    );
  }
  if (typeof value === "object" && value) {
    return (
      <ObjectItem {...props}>
        {Object.keys(value).map((key) => (
          <Item
            key={chainElementID(name, key)}
            fieldName={key}
            value={value[key]}
            name={chainElementID(name, key)}
          />
        ))}
      </ObjectItem>
    );
  }
  if (typeof value === "boolean") {
    return <BooleanItem {...props} />;
  }
  if (typeof value === "number" && !isNaN(value)) {
    return <NumberItem {...props} />;
  }
  if (typeof value === "string" && Date.parse(value)) {
    return <DateItem {...props} />;
  }
  if (typeof value === "string") {
    return <StringItem {...props} />;
  }

  return <DefaultItem {...props} />;
}
