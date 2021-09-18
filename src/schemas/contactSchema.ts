import * as yup from "yup";
import { emailReg } from "../validations";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required!").default(""),
  mail: yup.string().required("Mail is required!").default("")
    .test("mail is valid", "Mail is not valid", (value: string | undefined) => {
      return !value || emailReg.test(value);
    }),
  message: yup.string().required("Message is required!").default("")
});

export default contactSchema;
