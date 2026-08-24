import { ActivityIndicator, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        {session ? `Logged in as ${session.user.email}` : "Not logged in"}
      </Text>
    </View>
  );
}
