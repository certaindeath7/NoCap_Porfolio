import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isFormSubmitted) {
      callback();
    }
  }, [errors]);
  // method to handle form inputs
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const val = e.target.value;
    setValues({
      ...values,
      [name]: val,
    });
  };
  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    setErrors(validate(values));
    setIsFormSubmitted(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
