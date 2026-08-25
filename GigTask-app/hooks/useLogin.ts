import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { supabase } from "../lib/supabase";
import { isValidEmail } from "../utils/validation.utils";

export function useLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const submit = async () => {
    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail && !password) {
      setError("Email and password are required.");
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

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password,
      });

      if (error) {
        throw new Error("Invalid email or password.");
      }

      router.replace("/tasks");
      Toast.show({
        type: "success",
        text1: "Welcome back!",
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to sign in.");
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: "Could not login in.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    emailFocused,
    setEmailFocused,
    passwordFocused,
    setPasswordFocused,
    submit,
    loading,
    error,
  };
}
