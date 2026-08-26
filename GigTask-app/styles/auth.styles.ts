import { StyleSheet } from "react-native";
import { normalize } from "../utils/normalize";


import {
  COLORS,
  RADIUS,
  SHADOW,
  SPACING,
  TYPOGRAPHY,
} from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    width: "100%",
    maxWidth: normalize(480),
    alignSelf: "center",
    paddingHorizontal: SPACING.xxl,
  },

  logo: {
    fontSize: TYPOGRAPHY.screenTitle,
    fontWeight: "800",
    color: COLORS.primary,
    marginBottom: SPACING.xxl,
  },

  title: {
    fontSize: normalize(28),
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.xxxl,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.mutedText,
  },

  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.xl,
    ...SHADOW.card,
  },

  form: {
    gap: SPACING.md,
  },
  appName: {
    alignItems: "center",
    marginBottom: SPACING.xxl,
    marginTop: SPACING.xxl,
  },

  logoBadge: {
    width: normalize(64),
    height: normalize(64),
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.md,
  },

  wordmark: {
    fontSize: normalize(30),
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.4,
    marginBottom: normalize(90),
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: normalize(54),
    borderWidth: normalize(1.5),
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.md,
    gap: SPACING.sm,
  },

  inputWrapperFocused: {
    borderColor: COLORS.borderFocus,
    backgroundColor: COLORS.surface,
  },

  input: {
    flex: 1,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.text,
    height: "100%",
  },

  forgotRow: {
    alignItems: "flex-end",
  },

  forgotText: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "600",
  },

  errorBanner: {
    backgroundColor: COLORS.dangerLight,
    borderRadius: RADIUS.sm,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },

  error: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.secondary,
  },

  primaryButton: {
    height: normalize(54),
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SPACING.sm,
  },

  primaryButtonPressed: {
    backgroundColor: COLORS.primaryDark,
  },

  primaryButtonText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.button,
    fontWeight: "700",
  },

  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.xs,
    marginTop: SPACING.xl,
  },

  secondaryText: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.secondary,
  },

  link: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.secondary,
    fontWeight: "700",
  },

  decorCircleTop: {
    position: "absolute",
    top: normalize(-80),
    right: normalize(-60),
    width: normalize(220),
    height: normalize(220),
    borderRadius: normalize(110),
    backgroundColor: COLORS.primary,
    opacity: 0.08,
  },

  decorCircleBottom: {
    position: "absolute",
    bottom: normalize(-100),
    left: normalize(-80),
    width: normalize(260),
    height: normalize(260),
    borderRadius: normalize(130),
    backgroundColor: COLORS.primary,
    opacity: 0.06,
  },

  decorRing: {
    position: "absolute",
    top: normalize(60),
    left: normalize(-40),
    width: normalize(120),
    height: normalize(120),
    borderRadius: normalize(60),
    borderWidth: normalize(2),
    borderColor: COLORS.primary,
    opacity: 0.08,
  },
  matchHint: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.caption,
    marginTop: SPACING.xs,
    marginLeft: SPACING.xs,
  },
});
