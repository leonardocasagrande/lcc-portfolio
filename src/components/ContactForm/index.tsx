import { Box, Grid, TextField, Typography } from "@material-ui/core"
import { FormikValues, getIn, useFormik } from "formik";
import React from "react"
import { contactSchema } from "../../schemas";

const ContactForm = () => {
  const { handleSubmit, getFieldProps, errors, values, setValues, touched, setFieldValue } = useFormik({
    initialValues: contactSchema.getDefault(),
    validationSchema: contactSchema,
    onSubmit: (val: FormikValues) => {
      console.log(val);
    },
  });
  const getErrorByKey = (key: string, clearArray: boolean = false) => {
    const touch = getIn(touched, key)
    let err = getIn(errors, key)
    if (!touch || !err) return ""
    if (!!clearArray) err = err.replace(/\[.*\]/, '');
    return err as string
  }
  return (
    <Box display="flex" justifyContent="center">
      <Box p={2} maxWidth="700px" display="flex" flexDirection="column" gridGap={16} >
        <Typography variant="h2">
          Thanks for reaching out! How can I help you?
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField color="primary" fullWidth {...getFieldProps("name")} helperText={getErrorByKey("name")} error={!!getErrorByKey("name")}
                label={"Name"} placeholder={'Fill in the name'} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth {...getFieldProps("mail")} helperText={getErrorByKey("mail")} error={!!getErrorByKey("mail")}
                label={"Email"} placeholder={'Fill in the email'} />
            </Grid>
            <Grid item xs={12}>
              <TextField rows={8} multiline fullWidth {...getFieldProps("message")} helperText={getErrorByKey("message")} error={!!getErrorByKey("message")}
                label={"Message"} placeholder={'Fill in the message'} />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default ContactForm