import { Button } from "@/components/Button";
import { LogoHeader } from "@/components/Header";
import Input from "@/components/Input";
import { useGroups } from "@/contexts/GroupsContext";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useState } from "react";
import {
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function CreateGroupModal({ visible, onClose }: ModalProps) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { addGroup } = useGroups();

  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [typeGroup, setTypeGroup] = useState("");

  function validateForm(): boolean {
    if (!groupName.trim()) {
      setError("O nome do grupo é obrigatório.");
      return false;
    }

    if (groupName.trim().length < 3) {
      setError("O nome do grupo deve ter pelo menos 3 caracteres.");
      return false;
    }

    if (!description.trim()) {
      setError("A descrição é obrigatória.");
      return false;
    }

    if (description.trim().length < 5) {
      setError("A descrição deve ter pelo menos 5 caracteres.");
      return false;
    }

    if (!typeGroup.trim()) {
      setError("O tipo do grupo é obrigatório.");
      return false;
    }

    return true;
  }

  async function handleCreateGroup() {
    setError(null);
    setSuccess(null);

    if (!validateForm()) return;

    try {
      setLoading(true);

      await addGroup({
        groupName: groupName.trim(),
        description: description.trim(),
        typeGroup: typeGroup.trim(),
      });

      setSuccess("Grupo criado com sucesso!");

      setGroupName("");
      setDescription("");
      setTypeGroup("");

      setTimeout(onClose, 800);
    } catch (err) {
      setError("Erro ao criar novo grupo. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
              <LogoHeader />
            </View>

            <View style={styles.content}>
              <Text style={[styles.title, { color: textColor }]}>
                Novo Grupo
              </Text>

              <View style={styles.forms}>
                <Input
                  label="Nome do grupo"
                  value={groupName}
                  onChangeText={setGroupName}
                />
                <Input
                  label="Descrição"
                  value={description}
                  onChangeText={setDescription}
                />
                <Input
                  label="Tipo do grupo"
                  value={typeGroup}
                  onChangeText={setTypeGroup}
                />
              </View>

              {error && <Text style={styles.erro}>{error}</Text>}
              {success && <Text style={styles.success}>{success}</Text>}

              <View style={styles.footer}>
                <Button
                  title={loading ? "Criando..." : "Criar"}
                  onPress={handleCreateGroup}
                  disabled={loading}
                  style={{
                    width: 120,
                    height: 50,
                  }}
                />
                <Button
                  title="Cancelar"
                  onPress={onClose}
                  variant="outline"
                  style={{
                    width: 120,
                    height: 50,
                  }}
                />
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    width: "80%",
    height: "auto",
    borderRadius: 20,
    padding: 16,
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  content: {
    marginTop: 20,
  },
  forms: {
    marginVertical: 20,
  },
  success: {
    fontSize: 16,
    fontWeight: "500",
    color: "#07d100",
    textAlign: "center",
    marginTop: 10,
  },
  erro: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ff0000",
    textAlign: "center",
    marginTop: 10,
  },
  footer: {
    marginVertical: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
