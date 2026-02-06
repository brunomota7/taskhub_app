import { HeaderMain } from "@/components/Header";
import { useThemeColor } from "@/hooks/use-theme-color";
import { getGroupById } from "@/services/groups.service";
import { GroupResponse } from "@/types/Group";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GroupDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const iconColor = useThemeColor({}, "icon");
  const borderBorder = useThemeColor({}, "border");

  const [group, setGroup] = useState<GroupResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGroup() {
      if (!id) return;

      try {
        const data = await getGroupById(id);
        setGroup(data);
      } finally {
        setLoading(false);
      }
    }

    loadGroup();
  }, [id]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!group) {
    return <Text style={[{ color: textColor }]}>Grupo não encontrado.</Text>;
  }

  const handleSearch = () => {};
  const openMore = () => {};

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <HeaderMain
        title="Área de Trabalho"
        showBackButton={true}
        onBackPress={() => router.back()}
        showSearch={true}
        onSearchPress={handleSearch}
        showMore={true}
        onMorePress={openMore}
      />

      <View style={styles.content}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.9,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
