import Item from "./Item";

export default function JSONViewer({ data }: JSONViewerProps) {
  return <Item fieldName="" value={data} name="root-object" />;
}

interface JSONViewerProps {
  data: DataType;
}
