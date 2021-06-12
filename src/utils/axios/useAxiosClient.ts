import { GlobalState } from '@utils/redux/store';
import axios, { AxiosInstance } from 'axios';
import { useSelector } from 'react-redux';

const useAxiosClient = (): AxiosInstance => {
  const token = useSelector<GlobalState, string>((state) => state.auth.accessToken);

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_REST_URL,
    headers: { Authorization: token ? `Bearer ${token}` : '' },
  });
};
export default useAxiosClient;
