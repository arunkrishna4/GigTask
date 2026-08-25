import { Redirect } from "expo-router";

import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (session) {
    return <Redirect href="/tasks" />;
  }

  return <Redirect href="/auth/login" />;
}
