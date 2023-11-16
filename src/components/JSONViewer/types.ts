import { ReactNode } from "react";

export interface ItemProps<T = DataType> {
  name: string;
  fieldName: string | number;
  value: T;
  children?: ReactNode;
}

export interface FieldNameProps {
  value: string | number;
}