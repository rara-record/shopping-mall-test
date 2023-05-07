import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import { apiService } from '../services/ApiService';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  return { accessToken, setAccessToken };
};

export default useAccessToken;
