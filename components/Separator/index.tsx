import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, Text, View } from "react-native";

type SeparatorProps = {
  label?: string;
};

export default function Separator({ label }: SeparatorProps) {
  const borderColor = useThemeColor({}, "border");
  const textColor = useThemeColor({}, "tabIconDefault");

  return (
    <View style={styles.container}>
      {label ? (
        <>
          <View style={[styles.line, { borderColor }]} />
          <Text style={[styles.label, { color: textColor }]}>{label}</Text>
          <View style={[styles.line, { borderColor }]} />
        </>
      ) : (
        <View style={[styles.line, { borderColor }]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  line: {
    flex: 1,
    borderBottomWidth: 0.9, 
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
  },
});
