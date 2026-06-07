export interface Field {
  id: string;
  name: string;
  label: string;
  type: "text" | "number" | "date" | "textarea" | "select";
  required?: boolean;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  fields: Field[];
}
