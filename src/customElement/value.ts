import { z } from "zod";

export type Value = Readonly<{
  formId: string;
}>;

const valueSchema: z.Schema<Value | null> = z.object({
  formId: z.string(),
}).nullable();

const parseJson = (input: string | null) => {
  try {
    return JSON.parse(input ?? "null");
  }
  catch (e) {
    return null;
  }
};

const jsonValueSchema = z.string().nullable().transform(parseJson).pipe(valueSchema);

export const parseValue = (input: string | null): Value | null | "invalidValue" => {
  const parsedValue = jsonValueSchema.safeParse(input);

  return parsedValue.success ? parsedValue.data : "invalidValue";
};
