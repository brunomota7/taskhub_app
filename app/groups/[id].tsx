import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function GroupDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>
        Detalhes do Grupo
      </Text>

      <Text style={styles.subtitle}>
        ID do grupo: {id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: "#6B7280",
  },
});
