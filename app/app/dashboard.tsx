import { View, Text } from "react-native";
import { colors } from "../../src/theme/colors";
import { GlassCard } from "../../src/components/glass/GlassCard";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "900", color: colors.text, marginBottom: 14 }}>
        Dashboard
      </Text>
      <GlassCard>
        <Text style={{ fontWeight: "800" }}>Velyn.Cash</Text>
        <Text style={{ marginTop: 6 }}>Next screens: Payments (QR/NFC), Cards, Budgeting.</Text>
      </GlassCard>
    </View>
  );
}
