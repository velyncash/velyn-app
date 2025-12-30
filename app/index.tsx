import { Text, View } from "react-native";
import { GlassCard } from "../src/components/glass/GlassCard";
import { colors } from "../src/theme/colors";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "800", color: colors.text, marginBottom: 10 }}>
        Velyn.Cash
      </Text>
      <Text style={{ color: "#555", marginBottom: 18 }}>
        Mobile scaffold ready — white/pink glass UI.
      </Text>

      <GlassCard>
        <Text style={{ fontWeight: "700", marginBottom: 6 }}>Next</Text>
        <Text>Auth flow: Sign in → PIN → Dashboard</Text>
        <Text>Payments: QR / NFC</Text>
      </GlassCard>
    </View>
  );
}
