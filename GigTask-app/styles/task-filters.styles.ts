import { StyleSheet } from "react-native";
import { normalize } from "../utils/normalize";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.xxl,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
    marginBottom: SPACING.sm,

    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,

    zIndex: 10,
  },

  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.sectionTitle,
    fontWeight: "800",
    lineHeight: normalize(24),
    textAlign: "center",
    marginBottom: SPACING.sm,
  },

  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.md,
  },

  controlGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: normalize(6),
    minHeight: normalize(36),
    zIndex: 10,
  },

  label: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.medium,
    fontWeight: "800",
    textTransform: "uppercase",
  },

  dropdownWrap: {
    position: "relative",
    zIndex: 20,
  },

  dropdownButton: {
    minWidth: normalize(102),
    height: normalize(34),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
  },

  dropdownButtonPressed: {
    backgroundColor: COLORS.primaryLight,
  },

  dropdownButtonActive: {
    borderColor: COLORS.borderFocus,
    backgroundColor: COLORS.primaryLight,
  },

  dropdownText: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.medium,
    fontWeight: "700",
    lineHeight: normalize(16),
  },

  chevron: {
    color: COLORS.mutedText,
    fontSize: normalize(15),
    fontWeight: "800",
    lineHeight: normalize(15),
  },

  menu: {
    position: "absolute",
    top: normalize(38),
    left: 0,
    right: 0,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 30,
  },

  menuItem: {
    minHeight: normalize(34),
    flexDirection: "row",
    alignItems: "center",
    gap: normalize(6),
    paddingHorizontal: SPACING.sm,
    backgroundColor: COLORS.surface,
  },

  menuItemPressed: {
    backgroundColor: COLORS.primaryLight,
  },

  menuItemSelected: {
    backgroundColor: COLORS.primaryLight,
  },

  menuItemText: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "700",
  },

  menuItemTextSelected: {
    color: COLORS.primary,
  },

  priorityDot: {
    width: normalize(7),
    height: normalize(7),
    borderRadius: normalize(3.5),
  },

  lowDot: {
    backgroundColor: COLORS.success,
  },

  mediumDot: {
    backgroundColor: COLORS.warning,
  },

  highDot: {
    backgroundColor: COLORS.danger,
  },

  allDot: {
    backgroundColor: COLORS.mutedText,
  },
});

export default styles;
