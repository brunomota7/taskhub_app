import { IconButton } from "@/components/Button";
import { useThemeColor } from "@/hooks/use-theme-color";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GroupDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const iconColor = useThemeColor({}, "icon");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <View style={styles.left}>
          <IconButton
            icon={
              <MaterialIcons
                name="keyboard-arrow-left"
                size={28}
                color={iconColor}
              />
            }
            onPress={() => router.back()}
            style={styles.iconButton}
          />
          <Text style={[styles.title, { color: textColor }]}>
            Área de Trabalho
          </Text>
        </View>

        <View style={styles.right}>
          <IconButton
            icon={<Octicons name="search" size={20} color={iconColor} />}
            onPress={() => console.log("Search")}
            style={styles.iconButton}
          />
          <IconButton
            icon={<AntDesign name="ellipsis" size={20} color={iconColor} />}
            onPress={() => console.log("More")}
            style={styles.iconButton}
          />
        </View>
      </View>

      <View style={styles.content}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  iconButton: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
});
