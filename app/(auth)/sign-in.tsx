import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { GlassCard } from "../../src/components/glass/GlassCard";
import { colors } from "../../src/theme/colors";

export default function SignIn() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "900", color: colors.text }}>Velyn.Cash</Text>
      <Text style={{ marginTop: 6, marginBottom: 18, color: "#555" }}>
        Sign in to continue
      </Text>

      <GlassCard style={{ gap: 10 }}>
        <Text style={{ fontWeight: "800", color: colors.text }}>Sign in</Text>

        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          placeholderTextColor="#999"
          autoCapitalize="none"
          style={{
            backgroundColor: "rgba(255,255,255,0.75)",
            borderRadius: 14,
            padding: 12,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={{
            backgroundColor: "rgba(255,255,255,0.75)",
            borderRadius: 14,
            padding: 12,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        />

        <Pressable
          onPress={() => router.push("/(auth)/pin")}
          style={{
            backgroundColor: colors.pink,
            padding: 14,
            borderRadius: 16,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Continue</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/(auth)/sign-up")} style={{ paddingTop: 10 }}>
          <Text style={{ color: colors.pink, fontWeight: "800", textAlign: "center" }}>
            Create an account
          </Text>
        </Pressable>
      </GlassCard>

      <Text style={{ marginTop: 16, textAlign: "center", color: "#888", fontSize: 12 }}>
        Demo flow. Backend integration will be added in velyn-api.
      </Text>
    </View>
  );
}
