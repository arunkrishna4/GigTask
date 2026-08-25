import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { supabase } from "../lib/supabase";
import { isValidEmail } from "../utils/validation.utils";

export function useRegister() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);

  const showMatchIndicator = confirmPassword.length > 0;
  const passwordsMatch = password === confirmPassword && password.length > 0;

  const submit = async () => {
    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail && !password && !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      router.replace("/tasks");
      Toast.show({
        type: "success",
        text1: "Account created successfully! 🎉",
      });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to create your account.",
      );
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: "Could not sign in.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    emailFocused,
    setEmailFocused,
    passwordFocused,
    setPasswordFocused,
    confirmFocused,
    setConfirmFocused,
    showMatchIndicator,
    passwordsMatch,
    submit,
    loading,
    error,
  };
}
