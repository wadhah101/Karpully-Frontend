/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useRefreshTokenLazyQuery } from '../../graphql/generated-types';
import { logout, refreshTokenAction } from '../redux/slices/authSlice';
import { GlobalState } from '../redux/store';

const timeOut = 30 * 1000;
const logEnabled = false;

const useRefreshToken = (): void => {
  const disptah = useDispatch();
  const refreshToken = useSelector<GlobalState, string>((state) => state.auth.refreshToken);
  const [query, { data, error }] = useRefreshTokenLazyQuery();

  useEffect(() => {
    if (!data) return () => null;
    if (logEnabled) console.debug('updating refresh token');
    const { refresh_token, access_token, user } = data.refreshToken;
    disptah(
      refreshTokenAction({
        accessToken: access_token,
        refreshToken: refresh_token,
        user,
      }),
    );
    return () => null;
  }, [data]);

  useEffect(() => {
    if (!error) return () => null;
    disptah(logout());
    console.error('TOKEN ERROR', JSON.stringify(error));
    return () => null;
  }, [error]);

  useEffect(() => {
    if (!refreshToken) return () => null;
    const a = setTimeout(() => query({ variables: { refreshToken } }), timeOut);
    return () => clearTimeout(a);
  }, [refreshToken]);

  useEffect(() => {
    if (!refreshToken) return () => null;
    if (logEnabled) console.debug('INIT REFRESH TOKEN');
    query({ variables: { refreshToken } });
    return () => null;
  }, []);
};

export default useRefreshToken;
