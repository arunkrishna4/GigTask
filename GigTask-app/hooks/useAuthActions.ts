import { useState } from "react";
import { supabase } from "../lib/supabase";

export function useAuthActions() {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data.session;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data.session;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    loading,
  };
}
