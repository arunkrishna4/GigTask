import { StyleSheet } from "react-native";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: SPACING.sm,
  },

  button: {
    flex: 1,
    minHeight: 48,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedButton: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  text: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "600",
  },

  selectedText: {
    color: COLORS.white,
  },
});
