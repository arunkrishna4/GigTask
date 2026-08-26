import { StyleSheet } from "react-native";

import { RADIUS, SPACING } from "../constants/theme";
import { normalize } from "../utils/normalize";

const SKELETON = "#D9E0EA";

const styles = StyleSheet.create({
    container: {
        marginTop: SPACING.lg,
    },

    // HERO
    taskHero: {
        width: "100%",
        minHeight: normalize(170),
        borderRadius: RADIUS.lg,
        backgroundColor: SKELETON,
        padding: SPACING.lg,
        marginBottom: SPACING.md,
    },

    heroContentRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    heroTextBlock: {
        flex: 1,
        paddingRight: SPACING.md,
    },

    heroTitleSkeleton: {
        width: "78%",
        height: normalize(25),
        borderRadius: normalize(6),
        backgroundColor: "#C9D2DF",
        marginTop: normalize(8),
        marginBottom: SPACING.md,
    },

    heroDescriptionSkeleton: {
        width: "100%",
        height: normalize(14),
        borderRadius: normalize(5),
        backgroundColor: "#C9D2DF",
        marginBottom: normalize(8),
    },

    heroDescriptionShortSkeleton: {
        width: "68%",
        height: normalize(14),
        borderRadius: normalize(5),
        backgroundColor: "#C9D2DF",
    },

    statusPillSkeleton: {
        width: normalize(82),
        height: normalize(30),
        borderRadius: normalize(999),
        backgroundColor: "#C9D2DF",
    },

    // META CARDS
    metaRow: {
        flexDirection: "row",
        gap: SPACING.sm,
        marginBottom: SPACING.md,
    },

    metaCard: {
        flex: 1,
        minHeight: normalize(125),
        borderRadius: RADIUS.md,
        backgroundColor: SKELETON,
        padding: SPACING.md,
    },

    metaIconSkeleton: {
        width: normalize(36),
        height: normalize(36),
        borderRadius: normalize(11),
        backgroundColor: "#C9D2DF",
        marginBottom: normalize(12),
    },

    metaLabelSkeleton: {
        width: "45%",
        height: normalize(11),
        borderRadius: normalize(5),
        backgroundColor: "#C9D2DF",
        marginBottom: normalize(8),
    },

    metaValueSkeleton: {
        width: "65%",
        height: normalize(17),
        borderRadius: normalize(5),
        backgroundColor: "#C9D2DF",
    },

    // INSIGHT CARD
    insightCard: {
        minHeight: normalize(105),
        borderRadius: RADIUS.md,
        backgroundColor: SKELETON,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        flexDirection: "row",
        alignItems: "center",
    },

    completionIconSkeleton: {
        width: normalize(40),
        height: normalize(40),
        borderRadius: normalize(12),
        backgroundColor: "#C9D2DF",
        marginRight: SPACING.md,
    },

    completionTextContainer: {
        flex: 1,
    },

    completionTitleSkeleton: {
        width: "65%",
        height: normalize(16),
        borderRadius: normalize(5),
        backgroundColor: "#C9D2DF",
        marginBottom: normalize(9),
    },

    completionSubtitleSkeleton: {
        width: "100%",
        height: normalize(12),
        borderRadius: normalize(5),
        backgroundColor: "#C9D2DF",
        marginBottom: normalize(7),
    },

    completionSubtitleShortSkeleton: {
        width: "72%",
        height: normalize(12),
        borderRadius: normalize(5),
        backgroundColor: "#C9D2DF",
    },

    // ACTIONS
    actionSkeleton: {
        width: "100%",
        height: normalize(52),
        borderRadius: RADIUS.md,
        backgroundColor: SKELETON,
        marginBottom: SPACING.sm,
    },
});

export default styles;