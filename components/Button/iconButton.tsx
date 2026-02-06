import React from "react";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Pressable, ViewStyle } from "react-native";

type CloseButtonProps = {
  onPress?: () => void;
  icon: React.ReactNode;
  style?: ViewStyle;
};

export default function IconButton({ onPress, icon, style }: CloseButtonProps) {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <Pressable
      style={[
        style,
        {
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      {icon}
    </Pressable>
  );
}
