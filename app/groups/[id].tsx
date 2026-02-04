import ButtonClose from "@/components/Button/closeButton";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GroupDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>
        Detalhes do Grupo
      </Text>
      <ButtonClose
        //icon={<Ionicons name="close-sharp" size={24} color="black" />} 
        onPress={() => router.back()} 
      />

      <Text style={styles.subtitle}>ID do grupo: {id}</Text>
    </SafeAreaView>
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
