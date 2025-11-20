export interface LocationTip {
  location: string; // e.g., "Moscow", "Saint Petersburg", "Kazakhstan", "Uzbekistan"
  tips: string[];
}

export interface StepDetail {
  text: string;
  tip?: string; // Optional tooltip for this specific step
}

export interface DocumentReference {
  id: string; // Unique document ID for global tracking
  name: string; // Display name for this specific step (can vary)
}

export interface Step {
  id: string;
  title: string;
  description: string;
  details: (string | StepDetail)[]; // Can be simple string or object with tip
  documentsToGive?: DocumentReference[]; // Documents you need to provide
  documentsToReceive?: DocumentReference[]; // Documents you'll get from this step
  locationTips?: LocationTip[]; // City/country-specific tips
  completed: boolean;
}

export interface SideQuest {
  id: string;
  title: string;
  description: string;
  steps: string[];
  completed: boolean;
  optional: boolean;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  stepId?: string;
  category: 'main' | 'side' | 'custom';
}

export interface ApplicationFormData {
  // Personal Information
  lastName: string;
  firstName: string;
  middleName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  citizenship: string;
  gender: 'male' | 'female';

  // Current Address
  currentAddress: string;
  currentCity: string;
  currentCountry: string;

  // Russian Address
  russianAddress: string;
  russianCity: string;
  russianRegion: string;

  // Documents
  passportNumber: string;
  passportIssueDate: string;
  passportExpiryDate: string;

  // Visa Information
  visaNumber: string;
  visaIssueDate: string;
  entryDate: string;

  // Additional
  inn?: string;
  phoneNumber?: string;
  email?: string;

  // Employment/Study
  occupation?: string;
  employer?: string;

  // Reason for RVP
  rvpReason: string;
}

export interface UserProgress {
  steps: Record<string, boolean>;
  sideQuests: Record<string, boolean>;
  documents: Record<string, boolean>; // Track global documents by name
  todos: TodoItem[];
  formData: Partial<ApplicationFormData>;
  selectedLocation?: string; // User's city/country for location-specific tips
  lastUpdated: string;
}
