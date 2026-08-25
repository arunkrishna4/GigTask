import { StyleSheet } from "react-native";

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
    maxWidth: 480,
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
    fontSize: 28,
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
    width: 64,
    height: 64,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.md,
  },

  wordmark: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.4,
    marginBottom: 90,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 54,
    borderWidth: 1.5,
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
    height: 54,
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
    top: -80,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.primary,
    opacity: 0.08,
  },

  decorCircleBottom: {
    position: "absolute",
    bottom: -100,
    left: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: COLORS.primary,
    opacity: 0.06,
  },

  decorRing: {
    position: "absolute",
    top: 60,
    left: -40,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
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
