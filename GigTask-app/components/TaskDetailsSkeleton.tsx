import { View } from "react-native";

import styles from "../styles/task-details-skeleton.styles";

export default function TaskDetailsSkeleton() {
    return (
        <View style={styles.container}>
            {/* Task Hero */}
            <View style={styles.taskHero}>
                <View style={styles.heroContentRow}>
                    <View style={styles.heroTextBlock}>
                        <View style={styles.heroTitleSkeleton} />
                        <View style={styles.heroDescriptionSkeleton} />
                        <View style={styles.heroDescriptionShortSkeleton} />
                    </View>

                    <View style={styles.statusPillSkeleton} />
                </View>
            </View>

            {/* Meta Cards */}
            <View style={styles.metaRow}>
                <View style={styles.metaCard}>
                    <View style={styles.metaIconSkeleton} />
                    <View style={styles.metaLabelSkeleton} />
                    <View style={styles.metaValueSkeleton} />
                </View>

                <View style={styles.metaCard}>
                    <View style={styles.metaIconSkeleton} />
                    <View style={styles.metaLabelSkeleton} />
                    <View style={styles.metaValueSkeleton} />
                </View>
            </View>

            {/* Insight Card */}
            <View style={styles.insightCard}>
                <View style={styles.completionIconSkeleton} />

                <View style={styles.completionTextContainer}>
                    <View style={styles.completionTitleSkeleton} />
                    <View style={styles.completionSubtitleSkeleton} />
                    <View style={styles.completionSubtitleShortSkeleton} />
                </View>
            </View>

            {/* Actions */}
            <View style={styles.actionSkeleton} />
            <View style={styles.actionSkeleton} />
        </View>
    );
}