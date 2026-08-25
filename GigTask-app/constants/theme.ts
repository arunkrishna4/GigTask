export const COLORS = {
  primary: "#4F46E5",
  primaryDark: "#4338CA",
  primaryLight: "#EEF2FF",

  background: "#F8FAFC",
  surface: "#FFFFFF",

  text: "#0F172A",
  mutedText: "#64748B",

  border: "#E2E8F0",
  borderFocus: "#4F46E5",

  success: "#16A34A",
  successLight: "#F0FDF4", // NEW
  warning: "#F59E0B",
  warningLight: "#FFFBEB", // NEW
  danger: "#DC2626",
  dangerLight: "#FEF2F2",

  white: "#FFFFFF",
  primarySoft: "#EEF2FF",
  primaryBorder: "#D9E0FF",

  priorityLow: "#EAF7EE",
  priorityMedium: "#FFF7D6",
  priorityHigh: "#FDECEC",

  priorityLowBorder: "#BFE5C9",
  priorityMediumBorder: "#F0D98A",
  priorityHighBorder: "#F2B8B8",
} as const;

export const GRADIENTS = {
  background: ["#EEF2FF", "#F8FAFC", "#F8FAFC"] as const, // soft indigo fading to bg
} as const;

export const SHADOW = {
  card: {
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 4,
  },
} as const;

//components spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

//font sizes
export const TYPOGRAPHY = {
  screenTitle: 28,
  sectionTitle: 20,
  cardTitle: 16,
  body: 17,
  secondary: 15,
  button: 15,
  caption: 12,
  small: 15,
} as const;

//border radius
export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;
