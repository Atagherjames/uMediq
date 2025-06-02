import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export const FEED_DATA = [
  {
    id: 1,
    imageSource: require("../assets/images/Pediatrician-amico.png"),
    title: "Keeping Medical Records Organized Digitally",
    author: "By Dr. Lisa Raymond, Pediatric Specialist",
    date: "14, May 23",
  },
  {
    id: 2,
    imageSource: require("../assets/images/Orthopedic-amico.png"),
    title: "Understanding Joint Pain & Treatment Options",
    author: "By Dr. Mark Evans, Orthopedic Surgeon",
    date: "10, May 23",
  },
  {
    id: 3,
    imageSource: require("../assets/images/Artificial intelligence-amico.png"),
    title: "AI in Healthcare: Revolutionizing Patient Care",
    author: "By Dr. Nina Patel, Health Tech Researcher",
    date: "03, May 23",
  },
];

export const ACTIONS = [
  {
    icon: <MaterialIcons name="devices" size={30} color="#000" />,
    label: "Device",
    onPress: () => {
      console.log("Device action triggered");
      setModalVisible(false);
    },
  },
  {
    icon: <MaterialIcons name="photo-library" size={30} color="#000" />,
    label: "Gallery",
    onPress: () => {
      console.log("Gallery action triggered");
      setModalVisible(false);
    },
  },
  {
    icon: <Ionicons name="document" size={30} color="#000" />,
    label: "Files",
    onPress: () => {
      console.log("Files action triggered");
      setModalVisible(false);
    },
  },
  {
    icon: <MaterialIcons name="camera-alt" size={30} color="#000" />,
    label: "Camera",
    onPress: () => {
      console.log("Camera action triggered");
      setModalVisible(false);
    },
  },
];
export const categories = [
  { id: 1, label: "Scan Report", icon: "document-text-outline" },
  { id: 2, label: "Prescription", icon: "medkit-outline" },
  { id: 3, label: "Vaccine Certificate", icon: "shield-checkmark-outline" },
  { id: 4, label: "Insurance", icon: "briefcase-outline" },
  { id: 5, label: "Discharge Summary", icon: "clipboard-outline" },
  { id: 6, label: "Lab Test", icon: "flask-outline" },
  { id: 7, label: "Others", icon: "ellipsis-horizontal-outline" },
];
export const menuData = [
  {
    sectionLabel: "Profile",
    items: [{ title: "Family Members", route: "/family" }],
  },
  {
    sectionLabel: "Resources",
    items: [
      { title: "My Appointments", route: "/appointments" },
      { title: "ABHA Settings", route: "/abha-settings" },
    ],
  },
  {
    sectionLabel: "Others",
    items: [
      { title: "Security & Privacy", route: "/security" },
      { title: "Languages", route: "/languages" },
      { title: "Support & Feedback", route: "/support" },
      { title: "Logout", route: "logout" },
    ],
  },
];
export const appointmentsData = [
  {
    id: 1,
    hospitalName: "Jones Clinic",
    location: "Hyderabad",
    time: "Today, 04:15 pm - 04:45 pm",
    tokenStatus: "Your token has expired.",
  },
  {
    id: 2,
    hospitalName: "Green Valley Hospital",
    location: "Mumbai",
    time: "Tomorrow, 11:00 am - 11:30 am",
    tokenStatus: null,
  },
];
export const profiles = [
  {
    id: "1",
    email: "PatientA@abdm",
    name: "Patient A",
    details: "Male, 40 yrs",
  },
  {
    id: "2",
    email: "olfndkj725@abdm",
    name: "Patient A",
    details: "Male, 40 yrs",
  },
  {
    id: "3",
    email: "xghsjk6@abdm",
    name: "Patient A",
    details: "Male, 40 yrs",
  },
];

export const screens = [
  { name: "login" },
  { name: "otp" },
  { name: "onboard" },
  { name: "uMediq-ai" },
  { name: "consult" },
  { name: "toastMessage", options: { presentation: "fullScreenModal" } },
  { name: "create-profile" },
  { name: "home" },
  { name: "records" },
  { name: "profile" },
  { name: "add-record" },
  { name: "family" },
  { name: "add-family" },
  { name: "appointments" },
  { name: "languages" },
  { name: "security" },
  { name: "privacy" },
  { name: "support" },
  { name: "report" },
  { name: "suggest-feature" },
  { name: "feedback" },
  { name: "abha-story" },
  { name: "abha-tabs" },
  { name: "abha-otp" },
  { name: "kyc-verification" },
  { name: "abha-settings" },
  { name: "auto-sync" },
  { name: "consent-pin" },
  { name: "abha-mobile" },
  { name: "abha-email" },
  { name: "abha-add" },
  { name: "video" },
  { name: "abha-consents" },
  { name: "request-details" },
  { name: "approved-details" },
  { name: "rejected-details" },
  { name: "expired-details" },
  { name: "providers" },
  { name: "providers-card" },
  { name: "patients-visit" },
  { name: "scanner" },
  { name: "search-healthcare" },
  { name: "discover-records" },
  { name: "scan-share" },
  { name: "edit-profile" },
];
export const slides = [
  {
    title: "Benefits of creating ABHA",
    description: [
      "Easy way to access health records",
      "Link to https://abdm.gov.in/",
    ],
    image: require("../assets/images/icon.png"),
  },
  {
    title: "Secure place for your  Health Records",
    description: [
      "Ensure safety with end-end encryption",
      "Compliance with data privacy standards",
    ],
    image: require("../assets/images/icon.png"),
  },
  {
    title: "ABHA for entire family",
    description: [
      "Create ABHA for your family",
      "Enhance family healthcare management",
    ],
    image: require("../assets/images/icon.png"),
  },
  {
    title: "Your ABHA Health ID",
    description: [
      "Get your unique ABHA ID",
      "Access your medical records anywhere, anytime",
    ],
    image: require("../assets/images/icon.png"),
  },
];
export const consentData = [
  {
    id: 1,
    doctor: "Dr. Victor",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
  },
  {
    id: 2,
    doctor: "Dr. Kelvin",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
  },
];
export const consentAppprovedData = [
  {
    id: 1,
    doctor: "Dr. Deo",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
    approvedOn: " 27 Jul, 2024",
  },
  {
    id: 2,
    doctor: "Dr. Raja",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
    approvedOn: " 27 Jul, 2024",
  },
  {
    id: 3,
    doctor: "Dr. Raja",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
    approvedOn: " 27 Jul, 2024",
  },
];
export const consentRejectData = [
  {
    id: 1,
    doctor: "Dr. Deo",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
    rejectedOn: " 27 Jul, 2024",
  },
  {
    id: 2,
    doctor: "Dr. Raja",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
    rejectedOn: " 27 Jul, 2024",
  },
  {
    id: 3,
    doctor: "Dr. Raja",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul, 2024",
    rejectedOn: " 27 Jul, 2024",
  },
];

export const specialties = [
  "General",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic",
  "Pediatrician",
  "Psychiatrist",
  "Oncologist",
  "ENT",
  "Gynecologist",
  "Ophthalmologist",
  "Urologist",
  "Pulmonologist",
  "Endocrinologist",
  "Nephrologist",
  "Dentist",
  "Physiotherapist",
  "Chiropractor",
  "Nutritionist",
  "Psychologist",
  "Speech Therapist",
  "Occupational Therapist",
];
