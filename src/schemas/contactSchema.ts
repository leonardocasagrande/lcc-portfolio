import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required!").default(""),
  subject: yup.string().required("Subject is required").default(""),
  message: yup.string().required("Message is required!").default("")
});

export type Contact = yup.InferType<typeof contactSchema>

export default contactSchema;
