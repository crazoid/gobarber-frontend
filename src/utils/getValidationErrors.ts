import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors{
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path != null ? error.path : 'path'] = error.message;
  });

  return validationErrors;

}
