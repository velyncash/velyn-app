import React, { useMemo, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { GlassCard } from "../../src/components/glass/GlassCard";
import { colors } from "../../src/theme/colors";

function Dot({ filled }: { filled: boolean }) {
  return (
    <View
      style={{
        width: 14,
        height: 14,
        borderRadius: 999,
        backgroundColor: filled ? colors.pink : "rgba(0,0,0,0.12)",
      }}
    />
  );
}

export default function Pin() {
  const router = useRouter();
  const [pin, setPin] = useState("");

  const dots = useMemo(() => Array.from({ length: 6 }, (_, i) => i < pin.length), [pin]);

  const press = (n: string) => {
    if (pin.length >= 6) return;
    setPin((p) => p + n);
  };

  const del = () => setPin((p) => p.slice(0, -1));

  const done = () => {
    // demo: any 4-6 digits accepted
    router.replace("/app/dashboard");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "900", color: colors.text }}>Enter PIN</Text>
      <Text style={{ marginTop: 6, marginBottom: 18, color: "#555" }}>
        Secure access to your Velyn wallet
      </Text>

      <GlassCard style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 16 }}>
          {dots.map((f, i) => (
            <Dot key={i} filled={f} />
          ))}
        </View>

        <View style={{ width: "100%", gap: 10 }}>
          {[
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"],
          ].map((row, idx) => (
            <View key={idx} style={{ flexDirection: "row", gap: 10 }}>
              {row.map((k) => (
                <Pressable
                  key={k}
                  onPress={() => press(k)}
                  style={{
                    flex: 1,
                    padding: 14,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.border,
                    backgroundColor: "rgba(255,255,255,0.75)",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "900", color: colors.text }}>{k}</Text>
                </Pressable>
              ))}
            </View>
          ))}

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Pressable
              onPress={() => router.back()}
              style={{
                flex: 1,
                padding: 14,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: "rgba(255,255,255,0.75)",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "900", color: "#666" }}>Back</Text>
            </Pressable>

            <Pressable
              onPress={() => press("0")}
              style={{
                flex: 1,
                padding: 14,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: "rgba(255,255,255,0.75)",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "900", color: colors.text }}>0</Text>
            </Pressable>

            <Pressable
              onPress={del}
              style={{
                flex: 1,
                padding: 14,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: "rgba(255,255,255,0.75)",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "900", color: "#666" }}>Del</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={done}
            disabled={pin.length < 4}
            style={{
              marginTop: 6,
              backgroundColor: pin.length < 4 ? "rgba(255,79,216,0.45)" : colors.pink,
              padding: 14,
              borderRadius: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "900" }}>Unlock</Text>
          </Pressable>
        </View>
      </GlassCard>
    </View>
  );
}
