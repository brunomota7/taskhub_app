import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonProps = {
  title?: string;
  onPress: () => void;
  variant?: "default" | "outline" | "ghost";
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  isIconOnly?: boolean;
};

export default function Button({
  title,
  onPress,
  variant = "default",
  style,
  textStyle,
  icon,
  isIconOnly = false,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        isIconOnly && styles.iconOnly, 
        variant === "default" && styles.default,
        variant === "outline" && styles.outline,
        variant === "ghost" && styles.ghost,
        style,
      ]}
    >
      {icon}
      {title && (
        <Text
          style={[
            styles.text,
            variant === "outline" && { color: "#2D9CDB" },
            variant === "ghost" && { color: "#4F4F4F" },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconOnly: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: 45,
    height: 45,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  default: {
    backgroundColor: "#1380ed",
  },
  outline: {
    borderWidth: 1,
    borderColor: "#2D9CDB",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
