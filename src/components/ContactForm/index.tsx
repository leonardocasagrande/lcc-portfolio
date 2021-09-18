import { Box, Button, Grid, TextField, Typography } from "@material-ui/core"
import { FormikValues, getIn, useFormik } from "formik";
import React from "react"
import { contactSchema } from "../../schemas";
import { Contact } from "../../schemas/contactSchema";

const ContactForm = () => {
  const { handleSubmit, getFieldProps, errors, values, setValues, touched, setFieldValue } = useFormik({
    initialValues: contactSchema.getDefault(),
    validationSchema: contactSchema,
    onSubmit: ({ name, subject, message }: Contact) => {
      const body = `Hi, I'm ${name}\n${message}`
      sendMail(subject, body);
    },
  });

  const getErrorByKey = (key: string, clearArray: boolean = false) => {
    const touch = getIn(touched, key)
    let err = getIn(errors, key)
    if (!touch || !err) return ""
    if (!!clearArray) err = err.replace(/\[.*\]/, '');
    return err as string
  }

  const sendMail = (subject: string, body: string) => {
    const link = `mailto:leoc.casagrande82@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = link;
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
              <TextField fullWidth {...getFieldProps("subject")} helperText={getErrorByKey("subject")} error={!!getErrorByKey("subject")}
                label={"Subject"} placeholder={'Fill in the subject'} />
            </Grid>
            <Grid item xs={12}>
              <TextField rows={8} multiline fullWidth {...getFieldProps("message")} helperText={getErrorByKey("message")} error={!!getErrorByKey("message")}
                label={"Message"} placeholder={'Fill in the message'} />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default ContactForm