import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { supabase } from "../lib/supabase";

export default function AuthForm({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    if (!email || !password) {
      Alert.alert("Missing information", "Please enter email and password.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Registration failed", error.message);
      return;
    }

    if (!data.session) {
      Alert.alert("Check your email", "We've sent you a verification email.");
      return;
    }

    Alert.alert("Success", "Your account has been created.");
  };

  const signIn = async () => {
    if (!email || !password) {
      Alert.alert("Missing information", "Please enter email and password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Login failed", error.message);
      return;
    }

    onAuthenticated();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GigTask</Text>
      <Text style={styles.subtitle}>
        Manage your work. Stay on top of every task.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <Pressable style={styles.button} onPress={signIn} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Log In</Text>
        )}
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={signUp}
        disabled={loading}
      >
        <Text style={styles.secondaryButtonText}>Create Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 14,
    fontSize: 16,
  },

  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#5B5FEF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  secondaryButton: {
    height: 52,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  secondaryButtonText: {
    color: "#5B5FEF",
    fontSize: 16,
    fontWeight: "600",
  },
});
