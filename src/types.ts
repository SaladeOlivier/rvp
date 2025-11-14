export interface LocationTip {
  location: string; // e.g., "Moscow", "Saint Petersburg", "Kazakhstan", "Uzbekistan"
  tips: string[];
}

export interface Step {
  id: string;
  title: string;
  description: string;
  details: string[];
  documents?: string[];
  tips?: string[];
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
  todos: TodoItem[];
  formData: Partial<ApplicationFormData>;
  selectedLocation?: string; // User's city/country for location-specific tips
  lastUpdated: string;
}
