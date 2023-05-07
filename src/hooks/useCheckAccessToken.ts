import { useEffect } from 'react';
import useAccessToken from './useAccessToken';
import { apiService } from '../services/ApiService';

const useCheckAccessToken = () => {
  const { accessToken, setAccessToken } = useAccessToken();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        await apiService.fetchCurrentUser();
      } catch (err) {
        setAccessToken('');
      }
    };

    fetchCurrentUser();
  }, [accessToken, setAccessToken]);
};
export default useCheckAccessToken;
