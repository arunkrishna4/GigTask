import { StyleSheet } from "react-native";

import { COLORS, RADIUS, SPACING } from "../constants/theme";
import { normalize } from "../utils/normalize";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: SPACING.md,
    marginBottom: SPACING.sm,

    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: normalize(4),
    },
    shadowOpacity: 0.07,
    shadowRadius: normalize(10),
    elevation: 3,

    overflow: "hidden",
  },

  completedCard: {
    backgroundColor: "#F0FDFA",
    borderColor: "#CCFBF1",
  },

  cardPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.985 }],
  },

  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  checkbox: {
    width: normalize(23),
    height: normalize(23),
    borderRadius: normalize(7),
    borderWidth: normalize(2),
    borderColor: "#CBD5E1",
    alignItems: "center",
    justifyContent: "center",
    marginTop: normalize(2),
    marginRight: SPACING.sm,
  },

  checkboxPressed: {
    borderColor: COLORS.primary,
  },

  checkboxCompleted: {
    backgroundColor: "#0F766E",
    borderColor: "#0F766E",
  },

  checkmark: {
    color: COLORS.white,
    fontSize: normalize(14),
    fontWeight: "700",
    lineHeight: normalize(16),
  },

  titleContainer: {
    flex: 1,
    paddingRight: SPACING.xs,
  },

  title: {
    color: "#0F172A",
    fontSize: normalize(16),
    // fontWeight: "750",
    lineHeight: normalize(21),
  },

  completedTitle: {
    color: "#64748B",
    textDecorationLine: "line-through",
  },

  description: {
    color: "#64748B",
    fontSize: normalize(13),
    lineHeight: normalize(18),
    marginTop: normalize(5),
  },

  priorityBadge: {
    paddingHorizontal: normalize(9),
    paddingVertical: normalize(5),
    borderRadius: normalize(999),
  },

  lowBadge: {
    backgroundColor: "#DCFCE7",
  },

  mediumBadge: {
    backgroundColor: "#FEF3C7",
  },

  highBadge: {
    backgroundColor: "#FEE2E2",
  },

  priorityText: {
    fontSize: normalize(11),
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },

  lowText: {
    color: "#15803D",
  },

  mediumText: {
    color: "#B45309",
  },

  highText: {
    color: "#DC2626",
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: SPACING.xs,
  },

  arrow: {
    color: "#94A3B8",
    fontSize: normalize(27),
    lineHeight: normalize(24),
    marginLeft: normalize(5),
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: SPACING.md,
    paddingTop: SPACING.sm,

    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  dueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  dueDate: {
    color: "#64748B",
    fontSize: normalize(12),
    fontWeight: "600",
  },

  overdue: {
    color: "#DC2626",
  },

  statusText: {
    color: "#94A3B8",
    fontSize: normalize(11),
    fontWeight: "600",
  },
});

export default styles;