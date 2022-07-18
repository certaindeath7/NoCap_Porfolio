import { omit } from 'lodash';

const validateHelper = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else {
    omit(errors, 'name');
  }

  if (!values.subject) {
    errors.subject = 'Blog body is required';
  } else {
    omit(errors, 'subject');
  }

  if (!values.message) {
    errors.message = "The author's name is required";
  } else {
    omit(errors, 'message');
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } else {
    omit(errors, 'email');
  }
  return errors;
};
export default validateHelper;
