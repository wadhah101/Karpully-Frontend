import { useEffect } from 'react';

import { AppPortals } from '@comp/Dialogs/data';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';

import { openDialog } from '../redux/slices/appSlice';
import { logout } from '../redux/slices/authSlice';

const useQueryDetector = (): void => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { sign_up_token, sign_up_verification_token, sign_up_user_id } = router.query;

    if (sign_up_user_id && sign_up_token && sign_up_verification_token) {
      dispatch(logout());
      dispatch(openDialog(AppPortals.CompleteInfo));
    }

    return () => null;
  }, [router]);
};

export default useQueryDetector;
