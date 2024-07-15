import { api } from '../configs/AxiosConfig';

const imageUploadApi = async (imageFile: File) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const response = await api.post<{ url: string }>('/images', formData);
  return response.data.url;
};

export default imageUploadApi;
