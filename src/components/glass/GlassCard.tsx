import React from "react";
import { View, ViewStyle } from "react-native";
import { colors } from "../../theme/colors";
import { tokens } from "../../theme/tokens";

export function GlassCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View
      style={[
        {
          backgroundColor: colors.glass,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: tokens.radiusLg,
          padding: tokens.padding,
          ...tokens.shadow,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
