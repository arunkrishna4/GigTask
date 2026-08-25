import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, GRADIENTS } from "../../constants/theme";
import { useLogin } from "../../hooks/useLogin";
import { styles } from "../../styles/auth.styles";

export default function Login() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    emailFocused,
    passwordFocused,
    setPasswordFocused,
    setEmailFocused,
    submit,
    loading,
    error,
  } = useLogin();

  return (
    <LinearGradient colors={GRADIENTS.background} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* decorative shapes — sit behind everything */}
        <View style={styles.decorCircleTop} pointerEvents="none" />
        <View style={styles.decorRing} pointerEvents="none" />
        <View style={styles.decorCircleBottom} pointerEvents="none" />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.content}>
            <View style={styles.appName}>
              <Text style={styles.wordmark}>GigTask</Text>
            </View>

            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Sign in to manage your tasks.</Text>

            <View style={styles.card}>
              <View style={styles.form}>
                <View
                  style={[
                    styles.inputWrapper,
                    emailFocused && styles.inputWrapperFocused,
                  ]}
                >
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={COLORS.mutedText}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={COLORS.mutedText}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />
                </View>

                <View
                  style={[
                    styles.inputWrapper,
                    passwordFocused && styles.inputWrapperFocused,
                  ]}
                >
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={COLORS.mutedText}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={COLORS.mutedText}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                  />
                </View>

                {error ? (
                  <View style={styles.errorBanner}>
                    <Text style={styles.error}>{error}</Text>
                  </View>
                ) : null}

                <Pressable
                  style={({ pressed }) => [
                    styles.primaryButton,
                    pressed && styles.primaryButtonPressed,
                  ]}
                  onPress={submit}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator color={COLORS.white} />
                  ) : (
                    <Text style={styles.primaryButtonText}>Sign In</Text>
                  )}
                </Pressable>
              </View>
            </View>

            <View style={styles.registerRow}>
              <Text style={styles.secondaryText}>Don't have an account?</Text>
              <Link href="/auth/register" style={styles.link}>
                Create one
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
