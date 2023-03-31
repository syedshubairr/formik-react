import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form Data", values);
};
const validate = (values) => {
  let error = {};
  if (!values.name) {
    error.name = "Required";
  }
  if (!values.email) {
    error.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = "Invalid email format";
  }
  if (!values.channel) {
    error.channel = "Required";
  }
  return error;
};
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Form Values", formik.values);
  console.log("Form Errors", formik.errors);
  console.log("Visited Fields", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
