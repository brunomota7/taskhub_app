import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

type FloatingProps = {
  onPress: () => void;
  icon?: React.ReactNode;
  style?: ViewStyle;
};

export default function ButtonFloating({
  onPress,
  icon,
  style,
}: FloatingProps) {
  return (
    <Pressable style={[styles.floatingButton, style]} onPress={onPress}>
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: "#0a7ea4",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    zIndex: 999,
  },
});
