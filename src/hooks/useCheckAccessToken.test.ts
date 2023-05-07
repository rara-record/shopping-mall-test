// 1. fetchUserCurrent 호출한다.
// 2. setAccess 토큰 호출의 여부를 확인한다.
import { renderHook, waitFor } from '@testing-library/react';
import useCheckAccessToken from './useCheckAccessToken';
// 모킹 하는 모듈에서 쓸 모킹 함수를 생성한다.
const setAccessToken = jest.fn();
const fetchCurrentUser = jest.fn();

// useAccessToken 모듈을 모킹 후 실행하여, 그 반환값을 모킹한다.
jest.mock('./useAccessToken', () => () => ({
  accessToken: '',
  setAccessToken,
}));

// currentUser api 호출 함수도 모킹한다.
jest.mock('../services/ApiService', () => ({
  get apiService() {
    return fetchCurrentUser;
  },
}));

const context = describe;

describe('useCheckAccessToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // 유저가 존재하는 경우
  context('when fetching is successful', () => {
    // 예상한 값을 반환했을 때 : fetchCurrentUser가 변수 user의 값을 반환하는 것으로 가정한다.
    beforeEach(() => {
      const user = 'USER';
      fetchCurrentUser.mockResolvedValue(user);
    });

    // useCheckAccessToken을 호출한다.
    it("doesn't call setAccessToken", () => {
      renderHook(() => useCheckAccessToken());

      // setAccessToken이 호출되지 않는다.
      waitFor(() => {
        expect(setAccessToken).not.toBeCalled();
      });
    });
  });
});
