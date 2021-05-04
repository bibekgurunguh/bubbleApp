export const enum BookingStatusTypes {
  Requested = 0,
  Accepted = 1,
  CompletedNotPaid = 2,
  Rejected = 3,
  CompletedAndPaid = 4,
  Cancelled = 5,
  Bidded = 6,
  BiddedTooLate = 7,
  WithdrewBid = 8,
  PendingInterviews = 9,
  LongTermBookingsCreated = 10,
}

export interface BookingSummary {
  id: string;
  parentId: string;
  bookingStatus: BookingStatusTypes;
  requestStatus?: BookingStatusTypes;
  scheduledStart: Date;
  scheduledDuration: Number;
  imageUrl: string;
  otherUserFullName: string;
  lookingForVolunteer?: boolean;
}

export interface ActiveBookingSummary {
  requestedBookings: BookingSummary[];
  confirmedBookings: BookingSummary[];
}

export interface IBooking {
  id: string;
  // bookingProcess: Tribo.BookingProcess;
  scheduledStart: Date;
  scheduledDateTime: string;
  bookingStatus: BookingStatusTypes;
  scheduledDuration: number;
  specialRequirements: string;
  parent: {
    id: string;
    referralCodeNumber?: number;
    firstName: string;
    lastName: string;
    profileImageUrl: string;
    fullName?: string;
    mobileNumber?: string;
    address?: {
      houseNo: string;
      street: string;
      town: string;
      postcode: string;
    };
  };
  otherUserFullName: string;
  // sitterRequests: Tribo.IBookingRequest[];
  // bookedSitter: BookingBookedSitter;
}

export interface IUser {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  accountType: number;
  address?: {
    houseNo: string;
    street: string;
    town: string;
    postcode: string;
  };
  profileImageUrl?: string;
  hourlyRate?: number;
  specialHourlyRate?: number;
  numberOfChildren?: number;
  // children?: Tribo.IChild[];
  hasPets?: string;
  hasWifi?: boolean;
  hasNetflix?: boolean;
  hasTV?: boolean;
  // parking?: Tribo.Parking;
  // allergies?: Tribo.Allergy[];
  otherAllergies?: string;
  biography?: string;
  ratingPercentage?: any;
  homeVisited?: boolean;
  facebookToken?: {};
  referralCode?: string;
  connections?: [];
  signupStage?: number;
  accountTotal?: number;
  approvalStatus?: number;
  segmentation?: any;
  mobileNumber?: string;
  secondaryMobileNumbers?: string[];
  passwordResetCode?: string;
  // approvalStatus?: Tribo.ApprovalStatus;
  premiumUser?: boolean;
  bookingsCompleted?: {
    total: number;
    postajob: number;
    shortlist: number;
    longterm: number;
    volunteered: number;
  };
  numberOfReviews?: {
    total: number;
    positive: number;
    negative: number;
  };
  idVerified?: boolean;
  corporateUser?: boolean;
  subscriptionTier?: any;
  subscriptions?: [];
  allergies?: [];
  children?: any;
  lastBookedSitter?: any;
  nhsWorker?: any;
  referredUser?: boolean;
  hideFromSearch?: boolean;
}

export interface Navigation {
  addListener: Function;
  canGoBack: Function;
  dangerouslyGetParent: Function;
  dangerouslyGetState: Function;
  dispatch: Function;
  goBack: Function;
  isFocused: Function;
  navigate: Function;
  pop: Function;
  popToTop: Function;
  push: Function;
  removeListener: Function;
  replace: Function;
  reset: Function;
  setOptions: Function;
  setParams: Function;
}

export interface Route {
  key: string;
  name: string;
  params: object;
}
