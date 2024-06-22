import { useState } from 'react';
import { InvalidField, InvalidParamsResponse } from '../../types/valid';
import { AxiosError } from 'axios';

const useInvalid = (initialState: InvalidField) => {
  const [invalidField, setInvalidField] = useState<InvalidField>(initialState);

  const check = (error: Error) => {
    setInvalidField({ ...initialState, globalErrors: [] });

    if (error instanceof AxiosError) {
      if (error.response!.data.code === 'REQ_001') {
        const response: InvalidParamsResponse = error.response!.data;
        const errors: InvalidField = {
          globalErrors: [...response.globalErrors],
        };

        response.fieldErrors.forEach((error) => {
          errors[error.field] = errors[error.field]
            ? [...errors[error.field], error.message]
            : [error.message];
        });

        setInvalidField({ ...initialState, ...errors });

        return errors;
      }
    }
  };

  return { invalidField, check };
};

export default useInvalid;
