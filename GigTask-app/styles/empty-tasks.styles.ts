import { StyleSheet } from "react-native";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xxl,
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.md,
  },

  icon: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: "700",
  },

  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.sectionTitle,
    fontWeight: "700",
  },

  subtitle: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.body,
    textAlign: "center",
    marginTop: SPACING.xs,
    lineHeight: 22,
  },
});
