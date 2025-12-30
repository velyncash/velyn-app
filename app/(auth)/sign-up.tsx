import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { GlassCard } from "../../src/components/glass/GlassCard";
import { colors } from "../../src/theme/colors";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "900", color: colors.text }}>Velyn.Cash</Text>
      <Text style={{ marginTop: 6, marginBottom: 18, color: "#555" }}>
        Create your account
      </Text>

      <GlassCard style={{ gap: 10 }}>
        <Text style={{ fontWeight: "800", color: colors.text }}>Sign up</Text>

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

        <TextInput
          value={pin}
          onChangeText={(v) => setPin(v.replace(/\D/g, "").slice(0, 6))}
          placeholder="Set PIN (4–6 digits)"
          placeholderTextColor="#999"
          keyboardType="number-pad"
          style={{
            backgroundColor: "rgba(255,255,255,0.75)",
            borderRadius: 14,
            padding: 12,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        />

        <Pressable
          onPress={() => router.replace("/(auth)/pin")}
          style={{
            backgroundColor: colors.pink,
            padding: 14,
            borderRadius: 16,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Create Account</Text>
        </Pressable>

        <Pressable onPress={() => router.back()} style={{ paddingTop: 10 }}>
          <Text style={{ color: "#777", fontWeight: "800", textAlign: "center" }}>
            Back to sign in
          </Text>
        </Pressable>
      </GlassCard>
    </View>
  );
}
