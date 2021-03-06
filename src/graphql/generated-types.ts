import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  ID: Scalars['Float'];
  house_number?: Maybe<Scalars['Float']>;
  road?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  hamlet?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
  village?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  city_district?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  state_district?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AddressCreationInput = {
  createdAt: Scalars['Float'];
};

export type AutocompleteInput = {
  place: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
};

export type Carpool = {
  __typename?: 'Carpool';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  departureDate: Scalars['DateTime'];
  nbrOfAvailablePlaces: Scalars['Float'];
  description: Scalars['String'];
  hasSmokePermission: Scalars['Boolean'];
  departureLocation: Location;
  destinationLocation: Location;
  owner: User;
  submissions: Submission;
};

export type CarpoolBasicProximityInput = {
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  radius: Scalars['Float'];
};

export type CarpoolsProximityInput = {
  departureLoc?: Maybe<CarpoolBasicProximityInput>;
  destinationLoc?: Maybe<CarpoolBasicProximityInput>;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  messages?: Maybe<Array<Message>>;
  users: Array<User>;
};

export type City = {
  __typename?: 'City';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Int'];
  cityName: Scalars['String'];
  gov: Gov;
};

export type Connection = {
  __typename?: 'Connection';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  historic: ConnectionHistoric;
};

export type ConnectionHistoric = {
  __typename?: 'ConnectionHistoric';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  connections: Array<Connection>;
  owner: User;
};

export type CreateCarpoolInput = {
  departureDate: Scalars['DateTime'];
  nbrOfAvailablePlaces: Scalars['Float'];
  description: Scalars['String'];
  hasSmokePermission: Scalars['Boolean'];
  departureLocationLongitude: Scalars['String'];
  departureLocationLatitude: Scalars['String'];
  destinationLocationLongitude: Scalars['String'];
  destinationLocationLatitude: Scalars['String'];
};

export type CreateChatInput = {
  userIds: Array<Scalars['Float']>;
};

export type CreateCityInput = {
  cityName: Scalars['String'];
  govId: Scalars['Float'];
};

export type CreateGovInput = {
  govName: Scalars['String'];
};

export type CreateInvitationInput = {
  receiverId: Scalars['Float'];
};

export type CreateMessageInput = {
  chatId: Scalars['Float'];
  senderId: Scalars['Float'];
  content: Scalars['String'];
};

export type CreateSubmissionInput = {
  carpoolId: Scalars['Float'];
};

export type CredentialsInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Direction = {
  __typename?: 'Direction';
  code?: Maybe<Scalars['String']>;
  routes?: Maybe<Array<Route>>;
  waypoints?: Maybe<Array<Waypoint>>;
};

export type Email = {
  __typename?: 'Email';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  sentDate: Scalars['DateTime'];
  emailType: EmailTypeEnum;
  sender: User;
  token: Scalars['String'];
  verificationToken: Scalars['String'];
  isExpired?: Maybe<Scalars['Boolean']>;
};

export enum EmailTypeEnum {
  Confirmation = 'CONFIRMATION',
  ResetPassword = 'RESET_PASSWORD',
}

export type EmailVerificationInput = {
  token: Scalars['String'];
  verificationToken: Scalars['String'];
  userId: Scalars['Float'];
};

export type FindLocationByTextInput = {
  text: Scalars['String'];
};

export type FirstStageDtoInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
}

export type Gov = {
  __typename?: 'Gov';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  govName: Scalars['String'];
  cities: Array<City>;
};

export type Invitation = {
  __typename?: 'Invitation';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  sender: User;
  receiver: User;
  status: InvitationStatusEnum;
};

export enum InvitationStatusEnum {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Pending = 'PENDING',
}

export type Leg = {
  __typename?: 'Leg';
  distance?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  summary?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['Int']>;
  place_id?: Maybe<Scalars['Float']>;
  licence?: Maybe<Scalars['String']>;
  osm_type?: Maybe<Scalars['String']>;
  osm_id?: Maybe<Scalars['String']>;
  boundingbox?: Maybe<Array<Scalars['String']>>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  display_name?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  importance?: Maybe<Scalars['Float']>;
  icon?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  visited?: Maybe<Scalars['Float']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  chat: Chat;
  sender: User;
  isRead: Scalars['Boolean'];
  content: Scalars['String'];
};

export type Meta = {
  __typename?: 'Meta';
  itemCount: Scalars['Float'];
  currentPage: Scalars['Float'];
};

export type MultiPointsDirectionInput = {
  points: Array<XyLocation>;
};

export type Mutation = {
  __typename?: 'Mutation';
  firstStageSignUp: User;
  secondStageSignUp: User;
  update: User;
  remove: User;
  confirmEmail: TokenModel;
  sendResetPasswordEmail: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  login: TokenModel;
  createCarpool: Carpool;
  updateCarpool: Carpool;
  removeCarpool: Carpool;
  restoreCarpool: Carpool;
  createCity: City;
  updateCity: City;
  removeCity: City;
  createGov: Gov;
  updateGov: Gov;
  removeGov: Gov;
  createAddress: Address;
  createSubmission: Submission;
  rejectSubmission: Submission;
  acceptSubmission: Submission;
  removeSubmission: Submission;
  createChat: Chat;
  createMessage: Message;
  createInvitation: Invitation;
  manageInvitation: Invitation;
};

export type MutationFirstStageSignUpArgs = {
  firstStageDTOInput: FirstStageDtoInput;
};

export type MutationSecondStageSignUpArgs = {
  secondStageDTOInput: SecondStageDtoInput;
};

export type MutationUpdateArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationRemoveArgs = {
  id: Scalars['Float'];
};

export type MutationConfirmEmailArgs = {
  emailVerificationInput: EmailVerificationInput;
};

export type MutationSendResetPasswordEmailArgs = {
  ResetPasswordEmailInput: ResetPasswordEmailInput;
};

export type MutationResetPasswordArgs = {
  ResetPasswordInput: ResetPasswordInput;
};

export type MutationLoginArgs = {
  credentialsInput: CredentialsInput;
};

export type MutationCreateCarpoolArgs = {
  createCarpoolInput: CreateCarpoolInput;
};

export type MutationUpdateCarpoolArgs = {
  updateCarpoolInput: UpdateCarpoolInput;
};

export type MutationRemoveCarpoolArgs = {
  id: Scalars['Int'];
};

export type MutationRestoreCarpoolArgs = {
  id: Scalars['Int'];
};

export type MutationCreateCityArgs = {
  createCityInput: CreateCityInput;
};

export type MutationUpdateCityArgs = {
  updateCityInput: UpdateCityInput;
};

export type MutationRemoveCityArgs = {
  id: Scalars['Int'];
};

export type MutationCreateGovArgs = {
  createGovInput: CreateGovInput;
};

export type MutationUpdateGovArgs = {
  updateGovInput: UpdateGovInput;
};

export type MutationRemoveGovArgs = {
  id: Scalars['Int'];
};

export type MutationCreateAddressArgs = {
  address: AddressCreationInput;
};

export type MutationCreateSubmissionArgs = {
  createSubmissionInput: CreateSubmissionInput;
};

export type MutationRejectSubmissionArgs = {
  updateSubmissionInput: UpdateSubmissionInput;
};

export type MutationAcceptSubmissionArgs = {
  updateSubmissionInput: UpdateSubmissionInput;
};

export type MutationRemoveSubmissionArgs = {
  id: Scalars['Int'];
};

export type MutationCreateChatArgs = {
  createChatInput: CreateChatInput;
};

export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};

export type MutationCreateInvitationArgs = {
  createInvitationInput: CreateInvitationInput;
};

export type MutationManageInvitationArgs = {
  action: Scalars['String'];
  id: Scalars['Float'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  receiver: User;
  content: Scalars['String'];
  meta: NotificationMeta;
  type: NotificationTypeEnum;
};

export type NotificationMeta = {
  __typename?: 'NotificationMeta';
  carpoolId?: Maybe<Scalars['Float']>;
  userId: Scalars['Float'];
};

export enum NotificationTypeEnum {
  Submission = 'SUBMISSION',
  Invitation = 'INVITATION',
}

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type PaginatedCarpool = {
  __typename?: 'PaginatedCarpool';
  items: Array<Carpool>;
  meta: Meta;
};

export type PaginatedNotification = {
  __typename?: 'PaginatedNotification';
  items: Array<Notification>;
  meta: Meta;
};

export type PaginationInput = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
  orderBy?: Maybe<OrderBy>;
};

export type ProfileImgUpload = {
  __typename?: 'ProfileImgUpload';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user: User;
  existByEmail: Scalars['Boolean'];
  existByUsername: Scalars['Boolean'];
  email: Array<Email>;
  emails: Email;
  refreshToken: TokenModel;
  connectionHistoric: ConnectionHistoric;
  carpoolsByProximity: Array<Carpool>;
  carpool: Carpool;
  carpools: PaginatedCarpool;
  cities: Array<City>;
  city: City;
  citiesByGov: Array<City>;
  govs: Array<Gov>;
  gov: Gov;
  geoEncoding: Array<Location>;
  geoDecoding: Array<Location>;
  autocomplete: Array<Location>;
  submissions: Array<Submission>;
  submission: Submission;
  notification: Notification;
  notifications: PaginatedNotification;
  multiPointsDirection: Direction;
  chat: Chat;
};

export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type QueryExistByEmailArgs = {
  email: Scalars['String'];
};

export type QueryExistByUsernameArgs = {
  username: Scalars['String'];
};

export type QueryEmailsArgs = {
  id: Scalars['Int'];
};

export type QueryRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};

export type QueryConnectionHistoricArgs = {
  userId: Scalars['Float'];
};

export type QueryCarpoolsByProximityArgs = {
  carpoolsProximityInput: CarpoolsProximityInput;
};

export type QueryCarpoolArgs = {
  id: Scalars['Int'];
};

export type QueryCarpoolsArgs = {
  where: Where;
  paginationInput: PaginationInput;
};

export type QueryCityArgs = {
  id: Scalars['Int'];
};

export type QueryCitiesByGovArgs = {
  govId: Scalars['Int'];
};

export type QueryGovArgs = {
  id: Scalars['Int'];
};

export type QueryGeoEncodingArgs = {
  loc: FindLocationByTextInput;
};

export type QueryGeoDecodingArgs = {
  xy: ReverseLocationSearchInput;
};

export type QueryAutocompleteArgs = {
  textInput: AutocompleteInput;
};

export type QuerySubmissionArgs = {
  id: Scalars['Int'];
};

export type QueryNotificationArgs = {
  id: Scalars['Int'];
};

export type QueryNotificationsArgs = {
  paginationInput: PaginationInput;
  userId: Scalars['Float'];
};

export type QueryMultiPointsDirectionArgs = {
  pointsArray: MultiPointsDirectionInput;
};

export type QueryChatArgs = {
  id: Scalars['Int'];
};

export type ResetPasswordEmailInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  verificationToken: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ReverseLocationSearchInput = {
  lat: Scalars['String'];
  lon: Scalars['String'];
};

export type Route = {
  __typename?: 'Route';
  geometry?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  weight_name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  legs?: Maybe<Array<Leg>>;
};

export type SecondStageDtoInput = {
  id: Scalars['Float'];
  localization: Scalars['String'];
  telNumber: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  age: Scalars['Float'];
  gender: Scalars['Float'];
};

export type Submission = {
  __typename?: 'Submission';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['Float'];
  status: Scalars['String'];
  owner: User;
  carpool: Carpool;
};

export type Subscription = {
  __typename?: 'Subscription';
  notification: Notification;
  message: Message;
};

export type SubscriptionNotificationArgs = {
  userId: Scalars['Float'];
};

export type SubscriptionMessageArgs = {
  userId: Scalars['Float'];
};

export type TokenModel = {
  __typename?: 'TokenModel';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
  user: User;
};

export type UpdateCarpoolInput = {
  departureDate?: Maybe<Scalars['DateTime']>;
  nbrOfAvailablePlaces?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  hasSmokePermission?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
};

export type UpdateCityInput = {
  cityName?: Maybe<Scalars['String']>;
  govId?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
};

export type UpdateGovInput = {
  govName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type UpdateSubmissionInput = {
  carpoolId?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  localization?: Maybe<Scalars['String']>;
  telNumber?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  gender?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  completedSignUp: Scalars['Boolean'];
  age?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  email: Scalars['String'];
  localization?: Maybe<Scalars['String']>;
  telNumber?: Maybe<Scalars['String']>;
  authorities?: Maybe<Array<Scalars['String']>>;
  roles: Array<UserRoleEnum>;
  gender?: Maybe<Gender>;
  lowerCasedUsername: Scalars['String'];
  isConfirmed: Scalars['Boolean'];
  sentEmails?: Maybe<Array<Email>>;
  carpools?: Maybe<Array<Carpool>>;
  submissions?: Maybe<Array<Submission>>;
  notifications?: Maybe<Array<Notification>>;
  historic?: Maybe<ConnectionHistoric>;
  profileImage?: Maybe<ProfileImgUpload>;
  chats?: Maybe<Array<Chat>>;
  sentMessages?: Maybe<Array<Message>>;
  friends?: Maybe<Array<User>>;
  sentInvitations: Invitation;
  receivedInvitations: Invitation;
};

export enum UserRoleEnum {
  Admin = 'ADMIN',
  User = 'USER',
}

export type Waypoint = {
  __typename?: 'Waypoint';
  hint?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Array<Scalars['Float']>>;
};

export type Where = {
  departureDate?: Maybe<Scalars['DateTime']>;
  nbrOfAvailablePlaces?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  hasSmokePermission?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
};

export type XyLocation = {
  lon: Scalars['Float'];
  lat: Scalars['Float'];
};

export type CreateCarpoolMutationVariables = Exact<{
  departureLocationLongitude: Scalars['String'];
  departureLocationLatitude: Scalars['String'];
  nbrOfAvailablePlaces: Scalars['Float'];
  description: Scalars['String'];
  hasSmokePermission: Scalars['Boolean'];
  departureDate: Scalars['DateTime'];
  destinationLocationLongitude: Scalars['String'];
  destinationLocationLatitude: Scalars['String'];
}>;

export type CreateCarpoolMutation = { __typename?: 'Mutation' } & {
  createCarpool: { __typename?: 'Carpool' } & Pick<Carpool, 'id'>;
};

export type ConfirmEmailMutationVariables = Exact<{
  token: Scalars['String'];
  verificationToken: Scalars['String'];
  userId: Scalars['Float'];
}>;

export type ConfirmEmailMutation = { __typename?: 'Mutation' } & {
  confirmEmail: { __typename?: 'TokenModel' } & Pick<
    TokenModel,
    'refresh_token' | 'access_token'
  > & { user: { __typename?: 'User' } & FullUserFragment };
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'TokenModel' } & Pick<TokenModel, 'refresh_token' | 'access_token'> & {
      user: { __typename?: 'User' } & FullUserFragment;
    };
};

export type RefreshTokenQueryVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type RefreshTokenQuery = { __typename?: 'Query' } & {
  refreshToken: { __typename?: 'TokenModel' } & Pick<
    TokenModel,
    'refresh_token' | 'access_token'
  > & { user: { __typename?: 'User' } & FullUserFragment };
};

export type SignUpStage1MutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;

export type SignUpStage1Mutation = { __typename?: 'Mutation' } & {
  firstStageSignUp: { __typename?: 'User' } & Pick<User, 'id' | 'email'>;
};

export type SignUpStage2MutationVariables = Exact<{
  id: Scalars['Float'];
  localization: Scalars['String'];
  telNumber: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age: Scalars['Float'];
  gender: Scalars['Float'];
}>;

export type SignUpStage2Mutation = { __typename?: 'Mutation' } & {
  secondStageSignUp: { __typename?: 'User' } & FullUserFragment;
};

export type FullAdressFragment = { __typename?: 'Address' } & Pick<
  Address,
  | 'road'
  | 'neighbourhood'
  | 'suburb'
  | 'village'
  | 'town'
  | 'city'
  | 'region'
  | 'county'
  | 'state'
  | 'country'
  | 'name'
>;

export type FullCarpoolFragment = { __typename?: 'Carpool' } & Pick<
  Carpool,
  'id' | 'nbrOfAvailablePlaces' | 'description'
> & {
    departureLocation: { __typename?: 'Location' } & Pick<
      Location,
      'display_name' | 'lat' | 'lon'
    > & { address?: Maybe<{ __typename?: 'Address' } & FullAdressFragment> };
    destinationLocation: { __typename?: 'Location' } & Pick<
      Location,
      'lat' | 'lon' | 'display_name'
    > & { address?: Maybe<{ __typename?: 'Address' } & FullAdressFragment> };
    owner: { __typename?: 'User' } & FullUserFragment;
  };

export type CarpoolsQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
}>;

export type CarpoolsQuery = { __typename?: 'Query' } & {
  carpools: { __typename?: 'PaginatedCarpool' } & {
    items: Array<{ __typename?: 'Carpool' } & FullCarpoolFragment>;
    meta: { __typename?: 'Meta' } & Pick<Meta, 'currentPage' | 'itemCount'>;
  };
};

export type FindCarpoolByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type FindCarpoolByIdQuery = { __typename?: 'Query' } & {
  carpool: { __typename?: 'Carpool' } & FullCarpoolFragment;
};

export type SearchByPromixityDepartureQueryVariables = Exact<{
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  radius: Scalars['Float'];
}>;

export type SearchByPromixityDepartureQuery = { __typename?: 'Query' } & {
  carpoolsByProximity: Array<{ __typename?: 'Carpool' } & FullCarpoolFragment>;
};

export type SearchByPromixityDestinationQueryVariables = Exact<{
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  radius: Scalars['Float'];
}>;

export type SearchByPromixityDestinationQuery = { __typename?: 'Query' } & {
  carpoolsByProximity: Array<{ __typename?: 'Carpool' } & FullCarpoolFragment>;
};

export type GeoDecodeQueryVariables = Exact<{
  lat: Scalars['String'];
  lon: Scalars['String'];
}>;

export type GeoDecodeQuery = { __typename?: 'Query' } & {
  geoDecoding: Array<{ __typename?: 'Location' } & Pick<Location, 'display_name' | 'lat' | 'lon'>>;
};

export type GeoEncodeQueryVariables = Exact<{
  text: Scalars['String'];
}>;

export type GeoEncodeQuery = { __typename?: 'Query' } & {
  geoEncoding: Array<
    { __typename?: 'Location' } & Pick<Location, 'importance' | 'lat' | 'lon' | 'display_name'>
  >;
};

export type FullUserFragment = { __typename?: 'User' } & Pick<
  User,
  | 'id'
  | 'username'
  | 'firstname'
  | 'lastname'
  | 'age'
  | 'rate'
  | 'email'
  | 'createdAt'
  | 'completedSignUp'
  | 'localization'
  | 'telNumber'
  | 'gender'
  | 'isConfirmed'
> & {
    profileImage?: Maybe<
      { __typename?: 'ProfileImgUpload' } & Pick<ProfileImgUpload, 'id' | 'name'>
    >;
  };

export type NotificationsQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  userId: Scalars['Float'];
}>;

export type NotificationsQuery = { __typename?: 'Query' } & {
  notifications: { __typename?: 'PaginatedNotification' } & {
    items: Array<{ __typename?: 'Notification' } & Pick<Notification, 'id'>>;
  };
};

export type EmailExistsQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type EmailExistsQuery = { __typename?: 'Query' } & Pick<Query, 'existByEmail'>;

export type UserNameExistsQueryVariables = Exact<{
  username: Scalars['String'];
}>;

export type UserNameExistsQuery = { __typename?: 'Query' } & Pick<Query, 'existByUsername'>;

export const FullAdressFragmentDoc = gql`
  fragment FullAdress on Address {
    road
    neighbourhood
    suburb
    village
    town
    city
    region
    county
    state
    country
    name
  }
`;
export const FullUserFragmentDoc = gql`
  fragment FullUser on User {
    id
    profileImage {
      id
      name
    }
    username
    firstname
    lastname
    age
    rate
    email
    createdAt
    completedSignUp
    profileImage {
      id
      name
    }
    localization
    telNumber
    gender
    isConfirmed
    profileImage {
      id
      name
    }
  }
`;
export const FullCarpoolFragmentDoc = gql`
  fragment FullCarpool on Carpool {
    departureLocation {
      display_name
      lat
      lon
      address {
        ...FullAdress
      }
    }
    destinationLocation {
      lat
      lon
      display_name
      address {
        ...FullAdress
      }
    }
    id
    nbrOfAvailablePlaces
    description
    owner {
      ...FullUser
    }
  }
  ${FullAdressFragmentDoc}
  ${FullUserFragmentDoc}
`;
export const CreateCarpoolDocument = gql`
  mutation createCarpool(
    $departureLocationLongitude: String!
    $departureLocationLatitude: String!
    $nbrOfAvailablePlaces: Float!
    $description: String!
    $hasSmokePermission: Boolean!
    $departureDate: DateTime!
    $destinationLocationLongitude: String!
    $destinationLocationLatitude: String!
  ) {
    createCarpool(
      createCarpoolInput: {
        departureLocationLongitude: $departureLocationLongitude
        departureLocationLatitude: $departureLocationLatitude
        nbrOfAvailablePlaces: $nbrOfAvailablePlaces
        description: $description
        hasSmokePermission: $hasSmokePermission
        departureDate: $departureDate
        destinationLocationLongitude: $destinationLocationLongitude
        destinationLocationLatitude: $destinationLocationLatitude
      }
    ) {
      id
    }
  }
`;
export type CreateCarpoolMutationFn = Apollo.MutationFunction<
  CreateCarpoolMutation,
  CreateCarpoolMutationVariables
>;

/**
 * __useCreateCarpoolMutation__
 *
 * To run a mutation, you first call `useCreateCarpoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarpoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarpoolMutation, { data, loading, error }] = useCreateCarpoolMutation({
 *   variables: {
 *      departureLocationLongitude: // value for 'departureLocationLongitude'
 *      departureLocationLatitude: // value for 'departureLocationLatitude'
 *      nbrOfAvailablePlaces: // value for 'nbrOfAvailablePlaces'
 *      description: // value for 'description'
 *      hasSmokePermission: // value for 'hasSmokePermission'
 *      departureDate: // value for 'departureDate'
 *      destinationLocationLongitude: // value for 'destinationLocationLongitude'
 *      destinationLocationLatitude: // value for 'destinationLocationLatitude'
 *   },
 * });
 */
export function useCreateCarpoolMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCarpoolMutation, CreateCarpoolMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateCarpoolMutation, CreateCarpoolMutationVariables>(
    CreateCarpoolDocument,
    options,
  );
}
export type CreateCarpoolMutationHookResult = ReturnType<typeof useCreateCarpoolMutation>;
export type CreateCarpoolMutationResult = Apollo.MutationResult<CreateCarpoolMutation>;
export type CreateCarpoolMutationOptions = Apollo.BaseMutationOptions<
  CreateCarpoolMutation,
  CreateCarpoolMutationVariables
>;
export const ConfirmEmailDocument = gql`
  mutation confirmEmail($token: String!, $verificationToken: String!, $userId: Float!) {
    confirmEmail(
      emailVerificationInput: {
        token: $token
        verificationToken: $verificationToken
        userId: $userId
      }
    ) {
      user {
        ...FullUser
      }
      refresh_token
      access_token
    }
  }
  ${FullUserFragmentDoc}
`;
export type ConfirmEmailMutationFn = Apollo.MutationFunction<
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables
>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *      verificationToken: // value for 'verificationToken'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useConfirmEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(
    ConfirmEmailDocument,
    options,
  );
}
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = Apollo.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = Apollo.BaseMutationOptions<
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables
>;
export const LoginDocument = gql`
  mutation login($username: String!, $password: String!) {
    login(credentialsInput: { username: $username, password: $password }) {
      refresh_token
      access_token
      user {
        ...FullUser
      }
    }
  }
  ${FullUserFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RefreshTokenDocument = gql`
  query refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      refresh_token
      access_token
      user {
        ...FullUser
      }
    }
  }
  ${FullUserFragmentDoc}
`;

/**
 * __useRefreshTokenQuery__
 *
 * To run a query within a React component, call `useRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefreshTokenQuery({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokenQuery(
  baseOptions: Apollo.QueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(
    RefreshTokenDocument,
    options,
  );
}
export function useRefreshTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(
    RefreshTokenDocument,
    options,
  );
}
export type RefreshTokenQueryHookResult = ReturnType<typeof useRefreshTokenQuery>;
export type RefreshTokenLazyQueryHookResult = ReturnType<typeof useRefreshTokenLazyQuery>;
export type RefreshTokenQueryResult = Apollo.QueryResult<
  RefreshTokenQuery,
  RefreshTokenQueryVariables
>;
export const SignUpStage1Document = gql`
  mutation signUpStage1($username: String!, $password: String!, $email: String!) {
    firstStageSignUp(
      firstStageDTOInput: { username: $username, password: $password, email: $email }
    ) {
      id
      email
    }
  }
`;
export type SignUpStage1MutationFn = Apollo.MutationFunction<
  SignUpStage1Mutation,
  SignUpStage1MutationVariables
>;

/**
 * __useSignUpStage1Mutation__
 *
 * To run a mutation, you first call `useSignUpStage1Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpStage1Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpStage1Mutation, { data, loading, error }] = useSignUpStage1Mutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignUpStage1Mutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpStage1Mutation, SignUpStage1MutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpStage1Mutation, SignUpStage1MutationVariables>(
    SignUpStage1Document,
    options,
  );
}
export type SignUpStage1MutationHookResult = ReturnType<typeof useSignUpStage1Mutation>;
export type SignUpStage1MutationResult = Apollo.MutationResult<SignUpStage1Mutation>;
export type SignUpStage1MutationOptions = Apollo.BaseMutationOptions<
  SignUpStage1Mutation,
  SignUpStage1MutationVariables
>;
export const SignUpStage2Document = gql`
  mutation signUpStage2(
    $id: Float!
    $localization: String!
    $telNumber: String!
    $firstName: String!
    $lastName: String!
    $age: Float!
    $gender: Float!
  ) {
    secondStageSignUp(
      secondStageDTOInput: {
        id: $id
        localization: $localization
        telNumber: $telNumber
        firstname: $firstName
        lastname: $lastName
        age: $age
        gender: $gender
      }
    ) {
      ...FullUser
    }
  }
  ${FullUserFragmentDoc}
`;
export type SignUpStage2MutationFn = Apollo.MutationFunction<
  SignUpStage2Mutation,
  SignUpStage2MutationVariables
>;

/**
 * __useSignUpStage2Mutation__
 *
 * To run a mutation, you first call `useSignUpStage2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpStage2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpStage2Mutation, { data, loading, error }] = useSignUpStage2Mutation({
 *   variables: {
 *      id: // value for 'id'
 *      localization: // value for 'localization'
 *      telNumber: // value for 'telNumber'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      age: // value for 'age'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useSignUpStage2Mutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpStage2Mutation, SignUpStage2MutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpStage2Mutation, SignUpStage2MutationVariables>(
    SignUpStage2Document,
    options,
  );
}
export type SignUpStage2MutationHookResult = ReturnType<typeof useSignUpStage2Mutation>;
export type SignUpStage2MutationResult = Apollo.MutationResult<SignUpStage2Mutation>;
export type SignUpStage2MutationOptions = Apollo.BaseMutationOptions<
  SignUpStage2Mutation,
  SignUpStage2MutationVariables
>;
export const CarpoolsDocument = gql`
  query carpools($page: Float!, $limit: Float!) {
    carpools(where: {}, paginationInput: { page: $page, limit: $limit }) {
      items {
        ...FullCarpool
      }
      meta {
        currentPage
        itemCount
      }
    }
  }
  ${FullCarpoolFragmentDoc}
`;

/**
 * __useCarpoolsQuery__
 *
 * To run a query within a React component, call `useCarpoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarpoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarpoolsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCarpoolsQuery(
  baseOptions: Apollo.QueryHookOptions<CarpoolsQuery, CarpoolsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CarpoolsQuery, CarpoolsQueryVariables>(CarpoolsDocument, options);
}
export function useCarpoolsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CarpoolsQuery, CarpoolsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CarpoolsQuery, CarpoolsQueryVariables>(CarpoolsDocument, options);
}
export type CarpoolsQueryHookResult = ReturnType<typeof useCarpoolsQuery>;
export type CarpoolsLazyQueryHookResult = ReturnType<typeof useCarpoolsLazyQuery>;
export type CarpoolsQueryResult = Apollo.QueryResult<CarpoolsQuery, CarpoolsQueryVariables>;
export const FindCarpoolByIdDocument = gql`
  query findCarpoolById($id: Int!) {
    carpool(id: $id) {
      ...FullCarpool
    }
  }
  ${FullCarpoolFragmentDoc}
`;

/**
 * __useFindCarpoolByIdQuery__
 *
 * To run a query within a React component, call `useFindCarpoolByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCarpoolByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCarpoolByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindCarpoolByIdQuery(
  baseOptions: Apollo.QueryHookOptions<FindCarpoolByIdQuery, FindCarpoolByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindCarpoolByIdQuery, FindCarpoolByIdQueryVariables>(
    FindCarpoolByIdDocument,
    options,
  );
}
export function useFindCarpoolByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FindCarpoolByIdQuery, FindCarpoolByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindCarpoolByIdQuery, FindCarpoolByIdQueryVariables>(
    FindCarpoolByIdDocument,
    options,
  );
}
export type FindCarpoolByIdQueryHookResult = ReturnType<typeof useFindCarpoolByIdQuery>;
export type FindCarpoolByIdLazyQueryHookResult = ReturnType<typeof useFindCarpoolByIdLazyQuery>;
export type FindCarpoolByIdQueryResult = Apollo.QueryResult<
  FindCarpoolByIdQuery,
  FindCarpoolByIdQueryVariables
>;
export const SearchByPromixityDepartureDocument = gql`
  query searchByPromixityDeparture($lat: Float!, $lon: Float!, $radius: Float!) {
    carpoolsByProximity(
      carpoolsProximityInput: { departureLoc: { lat: $lat, lon: $lon, radius: $radius } }
    ) {
      ...FullCarpool
    }
  }
  ${FullCarpoolFragmentDoc}
`;

/**
 * __useSearchByPromixityDepartureQuery__
 *
 * To run a query within a React component, call `useSearchByPromixityDepartureQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchByPromixityDepartureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchByPromixityDepartureQuery({
 *   variables: {
 *      lat: // value for 'lat'
 *      lon: // value for 'lon'
 *      radius: // value for 'radius'
 *   },
 * });
 */
export function useSearchByPromixityDepartureQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchByPromixityDepartureQuery,
    SearchByPromixityDepartureQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchByPromixityDepartureQuery, SearchByPromixityDepartureQueryVariables>(
    SearchByPromixityDepartureDocument,
    options,
  );
}
export function useSearchByPromixityDepartureLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchByPromixityDepartureQuery,
    SearchByPromixityDepartureQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchByPromixityDepartureQuery,
    SearchByPromixityDepartureQueryVariables
  >(SearchByPromixityDepartureDocument, options);
}
export type SearchByPromixityDepartureQueryHookResult = ReturnType<
  typeof useSearchByPromixityDepartureQuery
>;
export type SearchByPromixityDepartureLazyQueryHookResult = ReturnType<
  typeof useSearchByPromixityDepartureLazyQuery
>;
export type SearchByPromixityDepartureQueryResult = Apollo.QueryResult<
  SearchByPromixityDepartureQuery,
  SearchByPromixityDepartureQueryVariables
>;
export const SearchByPromixityDestinationDocument = gql`
  query searchByPromixityDestination($lat: Float!, $lon: Float!, $radius: Float!) {
    carpoolsByProximity(
      carpoolsProximityInput: { destinationLoc: { lat: $lat, lon: $lon, radius: $radius } }
    ) {
      ...FullCarpool
    }
  }
  ${FullCarpoolFragmentDoc}
`;

/**
 * __useSearchByPromixityDestinationQuery__
 *
 * To run a query within a React component, call `useSearchByPromixityDestinationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchByPromixityDestinationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchByPromixityDestinationQuery({
 *   variables: {
 *      lat: // value for 'lat'
 *      lon: // value for 'lon'
 *      radius: // value for 'radius'
 *   },
 * });
 */
export function useSearchByPromixityDestinationQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchByPromixityDestinationQuery,
    SearchByPromixityDestinationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SearchByPromixityDestinationQuery,
    SearchByPromixityDestinationQueryVariables
  >(SearchByPromixityDestinationDocument, options);
}
export function useSearchByPromixityDestinationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchByPromixityDestinationQuery,
    SearchByPromixityDestinationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchByPromixityDestinationQuery,
    SearchByPromixityDestinationQueryVariables
  >(SearchByPromixityDestinationDocument, options);
}
export type SearchByPromixityDestinationQueryHookResult = ReturnType<
  typeof useSearchByPromixityDestinationQuery
>;
export type SearchByPromixityDestinationLazyQueryHookResult = ReturnType<
  typeof useSearchByPromixityDestinationLazyQuery
>;
export type SearchByPromixityDestinationQueryResult = Apollo.QueryResult<
  SearchByPromixityDestinationQuery,
  SearchByPromixityDestinationQueryVariables
>;
export const GeoDecodeDocument = gql`
  query geoDecode($lat: String!, $lon: String!) {
    geoDecoding(xy: { lat: $lat, lon: $lon }) {
      display_name
      lat
      lon
    }
  }
`;

/**
 * __useGeoDecodeQuery__
 *
 * To run a query within a React component, call `useGeoDecodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeoDecodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeoDecodeQuery({
 *   variables: {
 *      lat: // value for 'lat'
 *      lon: // value for 'lon'
 *   },
 * });
 */
export function useGeoDecodeQuery(
  baseOptions: Apollo.QueryHookOptions<GeoDecodeQuery, GeoDecodeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GeoDecodeQuery, GeoDecodeQueryVariables>(GeoDecodeDocument, options);
}
export function useGeoDecodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GeoDecodeQuery, GeoDecodeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GeoDecodeQuery, GeoDecodeQueryVariables>(GeoDecodeDocument, options);
}
export type GeoDecodeQueryHookResult = ReturnType<typeof useGeoDecodeQuery>;
export type GeoDecodeLazyQueryHookResult = ReturnType<typeof useGeoDecodeLazyQuery>;
export type GeoDecodeQueryResult = Apollo.QueryResult<GeoDecodeQuery, GeoDecodeQueryVariables>;
export const GeoEncodeDocument = gql`
  query geoEncode($text: String!) {
    geoEncoding(loc: { text: $text }) {
      importance
      lat
      lon
      display_name
    }
  }
`;

/**
 * __useGeoEncodeQuery__
 *
 * To run a query within a React component, call `useGeoEncodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeoEncodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeoEncodeQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useGeoEncodeQuery(
  baseOptions: Apollo.QueryHookOptions<GeoEncodeQuery, GeoEncodeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GeoEncodeQuery, GeoEncodeQueryVariables>(GeoEncodeDocument, options);
}
export function useGeoEncodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GeoEncodeQuery, GeoEncodeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GeoEncodeQuery, GeoEncodeQueryVariables>(GeoEncodeDocument, options);
}
export type GeoEncodeQueryHookResult = ReturnType<typeof useGeoEncodeQuery>;
export type GeoEncodeLazyQueryHookResult = ReturnType<typeof useGeoEncodeLazyQuery>;
export type GeoEncodeQueryResult = Apollo.QueryResult<GeoEncodeQuery, GeoEncodeQueryVariables>;
export const NotificationsDocument = gql`
  query Notifications($page: Float!, $limit: Float!, $userId: Float!) {
    notifications(paginationInput: { page: $page, limit: $limit, orderBy: ASC }, userId: $userId) {
      items {
        id
      }
    }
  }
`;

/**
 * __useNotificationsQuery__
 *
 * To run a query within a React component, call `useNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<NotificationsQuery, NotificationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NotificationsQuery, NotificationsQueryVariables>(
    NotificationsDocument,
    options,
  );
}
export function useNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NotificationsQuery, NotificationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NotificationsQuery, NotificationsQueryVariables>(
    NotificationsDocument,
    options,
  );
}
export type NotificationsQueryHookResult = ReturnType<typeof useNotificationsQuery>;
export type NotificationsLazyQueryHookResult = ReturnType<typeof useNotificationsLazyQuery>;
export type NotificationsQueryResult = Apollo.QueryResult<
  NotificationsQuery,
  NotificationsQueryVariables
>;
export const EmailExistsDocument = gql`
  query emailExists($email: String!) {
    existByEmail(email: $email)
  }
`;

/**
 * __useEmailExistsQuery__
 *
 * To run a query within a React component, call `useEmailExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailExistsQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useEmailExistsQuery(
  baseOptions: Apollo.QueryHookOptions<EmailExistsQuery, EmailExistsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EmailExistsQuery, EmailExistsQueryVariables>(EmailExistsDocument, options);
}
export function useEmailExistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<EmailExistsQuery, EmailExistsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<EmailExistsQuery, EmailExistsQueryVariables>(
    EmailExistsDocument,
    options,
  );
}
export type EmailExistsQueryHookResult = ReturnType<typeof useEmailExistsQuery>;
export type EmailExistsLazyQueryHookResult = ReturnType<typeof useEmailExistsLazyQuery>;
export type EmailExistsQueryResult = Apollo.QueryResult<
  EmailExistsQuery,
  EmailExistsQueryVariables
>;
export const UserNameExistsDocument = gql`
  query userNameExists($username: String!) {
    existByUsername(username: $username)
  }
`;

/**
 * __useUserNameExistsQuery__
 *
 * To run a query within a React component, call `useUserNameExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserNameExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserNameExistsQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserNameExistsQuery(
  baseOptions: Apollo.QueryHookOptions<UserNameExistsQuery, UserNameExistsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserNameExistsQuery, UserNameExistsQueryVariables>(
    UserNameExistsDocument,
    options,
  );
}
export function useUserNameExistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserNameExistsQuery, UserNameExistsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserNameExistsQuery, UserNameExistsQueryVariables>(
    UserNameExistsDocument,
    options,
  );
}
export type UserNameExistsQueryHookResult = ReturnType<typeof useUserNameExistsQuery>;
export type UserNameExistsLazyQueryHookResult = ReturnType<typeof useUserNameExistsLazyQuery>;
export type UserNameExistsQueryResult = Apollo.QueryResult<
  UserNameExistsQuery,
  UserNameExistsQueryVariables
>;
