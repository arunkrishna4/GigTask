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
import { useRegister } from "../../hooks/useRegister";
import { styles } from "../../styles/auth.styles";

export default function Register() {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    submit,
    loading,
    error,
    passwordsMatch,
    emailFocused,
    setEmailFocused,
    passwordFocused,
    setPasswordFocused,
    showMatchIndicator,
    confirmFocused,
    setConfirmFocused,
  } = useRegister();

  return (
    <LinearGradient colors={GRADIENTS.background} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.decorCircleTop} pointerEvents="none" />
        <View style={styles.decorRing} pointerEvents="none" />
        <View style={styles.decorCircleBottom} pointerEvents="none" />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={[styles.content]}>
            <View style={styles.appName}>
              <Text style={styles.wordmark}>GigTask</Text>
            </View>

            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
              Start organizing your work and tasks.
            </Text>

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

                <View>
                  <View
                    style={[
                      styles.inputWrapper,
                      confirmFocused && styles.inputWrapperFocused,
                    ]}
                  >
                    <Ionicons
                      name="lock-closed-outline"
                      size={20}
                      color={COLORS.mutedText}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm password"
                      placeholderTextColor={COLORS.mutedText}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry
                      onFocus={() => setConfirmFocused(true)}
                      onBlur={() => setConfirmFocused(false)}
                    />
                    {showMatchIndicator && (
                      <Ionicons
                        name={
                          passwordsMatch ? "checkmark-circle" : "close-circle"
                        }
                        size={20}
                        color={passwordsMatch ? COLORS.success : COLORS.danger}
                      />
                    )}
                  </View>
                  {showMatchIndicator && !passwordsMatch && (
                    <Text style={styles.matchHint}>Passwords don't match</Text>
                  )}
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
                    <Text style={styles.primaryButtonText}>Create Account</Text>
                  )}
                </Pressable>
              </View>
            </View>

            <View style={styles.registerRow}>
              <Text style={styles.secondaryText}>Already have an account?</Text>
              <Link href="/auth/login" style={styles.link}>
                Sign in
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
