import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { View, StyleSheet, DimensionValue, ViewStyle } from "react-native";

type CardProps = {
  children: React.ReactNode;
  width?: DimensionValue; 
  height?: DimensionValue;
  style?: ViewStyle;
};

export default function Card({ children, width, height, style }: CardProps) {
  const backgroundColor = useThemeColor({}, "border");

  return (
    <View style={[styles.card, { backgroundColor, width, height }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
  },
});
