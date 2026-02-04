import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ViewStyle } from "react-native";

type CloseButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
};

export default function CloseButton({ onPress, style }: CloseButtonProps) {
  const backgroundColor = useThemeColor({}, "border");
  const iconColor = useThemeColor({}, "icon");

  return (
    <Pressable
      style={[
        style,
        {
          position: "absolute",
          top: 60,
          right: 30,
          width: 40,
          height: 40,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <Ionicons name="close-sharp" size={20} color={iconColor} />
    </Pressable>
  );
}
