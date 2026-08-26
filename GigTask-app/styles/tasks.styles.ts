import { StyleSheet } from "react-native";
import { normalize } from "../utils/normalize";


import { COLORS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    backgroundColor: "#F4F7FB",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.lg,
  },

  greeting: {
    color: "#111827",
    fontSize: TYPOGRAPHY.screenTitle,
    fontWeight: "900",
    letterSpacing: 0,
  },

  subtitle: {
    color: "#64748B",
    fontSize: TYPOGRAPHY.small,
    marginTop: normalize(3),
    fontWeight: "500",
  },

  logoutButton: {
    flexDirection: "row",
    gap: normalize(7),
    minWidth: normalize(108),
    height: normalize(46),
    borderRadius: normalize(23),
    backgroundColor: "rgba(255, 241, 242, 0.9)",
    borderWidth: 1,
    borderColor: "#FECDD3",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 3,
  },

  logoutButtonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.86,
  },

  logoutText: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "900",
  },

  statsContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },

  statCard: {
    flex: 1,
    minHeight: normalize(90),
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: normalize(22),
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    justifyContent: "space-between",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 3,
  },

  statTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: normalize(5),
  },

  statIcon: {
    width: normalize(25),
    height: normalize(34),
    borderRadius: normalize(10),
    alignItems: "center",
    justifyContent: "center",
  },

  statNumber: {
    marginTop: normalize(8),
    fontSize: normalize(28),
    fontWeight: "800",
    color: COLORS.white,
    alignSelf: "center"
  },

  statLabel: {
    fontSize: normalize(15),
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.75)",
  },

  error: {
    color: "#BE123C",
    fontSize: TYPOGRAPHY.small,
    lineHeight: normalize(20),
    marginBottom: SPACING.sm,
  },

  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.xs,
    marginBottom: SPACING.sm,
    paddingHorizontal: normalize(2),
  },

  listTitle: {
    color: "#111827",
    fontSize: TYPOGRAPHY.cardTitle,
    fontWeight: "900",
  },

  listCount: {
    color: "#64748B",
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "800",
  },

  list: {
    paddingBottom: normalize(126),
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: normalize(92),
  },

  fab: {
    position: "absolute",
    bottom: normalize(60),
    right: SPACING.lg,
    width: normalize(64),
    height: normalize(64),
    borderRadius: normalize(24),
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 8,
  },

  fabPressed: {
    transform: [{ scale: 0.94 }],
    opacity: 0.92,
  },

  fabText: {
    color: COLORS.white,
    fontSize: normalize(34),
    fontWeight: "400",
    lineHeight: normalize(32),
  },

  refreshLoader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(244, 247, 251, 0.58)",
  },

  decorCircleTop: {
    position: "absolute",
    top: normalize(-80),
    right: normalize(-60),
    width: normalize(220),
    height: normalize(220),
    borderRadius: normalize(110),
    backgroundColor: COLORS.primary,
    opacity: 0.07,
  },

  decorCircleBottom: {
    position: "absolute",
    bottom: normalize(-100),
    left: normalize(-80),
    width: normalize(270),
    height: normalize(270),
    borderRadius: normalize(135),
    backgroundColor: COLORS.primary,
    opacity: 0.055,
  },
});
