import { User } from '@graphql/generated-types';
import { BACKEND_BASE_URL } from '@utils/apollo/useApolloClient';

const imageId = 'IuJc2qh2TcA';

const defaultProfileImage = `https://source.unsplash.com/${imageId}/100x100`;

interface ProfilePictureUrlParams {
  width: number;
  height: number;
  quality: number;
}

const isReady = false;

export const getProfilePictureUrl = (
  user: Partial<User>,
  params?: ProfilePictureUrlParams,
): string => {
  if (!(user && user.profileImage && isReady)) return defaultProfileImage;

  const { profileImage } = user;

  //  CHANGE THIS , USE SOMETHING IMMUTABLE
  // TODO Link with backend later
  const temp = new URL(profileImage.name, BACKEND_BASE_URL);
  if (!params) return temp.toString();

  temp.searchParams.set('w', String(params.width));
  temp.searchParams.set('h', String(params.height));
  temp.searchParams.set('q', String(params.quality));
  return temp.toString();
};
