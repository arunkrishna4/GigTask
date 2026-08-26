import { StyleSheet } from "react-native";
import { normalize } from "../utils/normalize";


import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xxl,
  },

  iconContainer: {
    width: normalize(64),
    height: normalize(64),
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.md,
  },

  icon: {
    color: COLORS.primary,
    fontSize: normalize(28),
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
    lineHeight: normalize(22),
  },
});
