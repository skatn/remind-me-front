import { useMutation } from '@tanstack/react-query';
import { SignupRequest } from '../../types/auth';
import { api } from '../../configs/AxiosConfig';

const useSignup = () => {
  return useMutation({
    mutationFn: (signupRequest: SignupRequest) =>
      api.post('/api/signup', signupRequest),
  });
};

export default useSignup;
