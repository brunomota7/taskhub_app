import CreateGroupModal from "@/modals/creategroup";
import { Button } from "@/components/Button";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GroupsScreen() {
    const backgroundColor = useThemeColor({}, "background");
    const textColor = useThemeColor({}, "text");

      const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <Text style={[ { color: textColor }]}>Groups Screen</Text>
            <Button
                title="Criar Grupo"
                onPress={() => setModalVisible(true)}
            />


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
})
