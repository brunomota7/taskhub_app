import CreateGroupModal from "@/modals/creategroup";
import { Button } from "@/components/Button";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderMain } from "@/components/Header";

export default function GroupsScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = () => {};
  const openMore = () => {};

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <HeaderMain
        title="Seus Grupos"
        showBackButton={false}
        showSearch={true}
        onSearchPress={handleSearch}
        showMore={true}
        onMorePress={openMore}
      />

      <View style={styles.content}>
        <Button title="Criar Grupo" onPress={() => setModalVisible(true)} />
      </View>

      <CreateGroupModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});
