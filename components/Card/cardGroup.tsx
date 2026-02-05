import { useThemeColor } from "@/hooks/use-theme-color";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import Button from "../Button/button";
import Card from "./cardBase";

type CardGroupProps = {
  nameGroup: string;
  description: string;
  typeGroup: string;
  quantTasks: number;
  image?: any;
  groupId: string;
};

export default function CardGroup({
  nameGroup,
  description,
  typeGroup,
  quantTasks,
  image,
  groupId,
}: CardGroupProps) {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");

  return (
    <Card style={styles.card}>
      {image && (
        <Image source={image} style={styles.image} resizeMode="cover" />
      )}

      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <View style={styles.headerText}>
            <Text style={styles.type}>{typeGroup.toUpperCase()}</Text>
            <Text style={[styles.title, { color: textColor }]}>
              {nameGroup}
            </Text>
            <Text style={[styles.description, { color: textColor }]}>{description}</Text>
          </View>

          <View style={styles.avatarStack}>
            <View style={styles.avatarItem}>
              <Avatar.Text size={26} label="A" />
            </View>
            <View style={styles.avatarItem}>
              <Avatar.Text size={26} label="B" />
            </View>
            <View style={styles.avatarItem}>
              <Avatar.Text size={26} label="+8" />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.tasks}>
            <FontAwesome5 name="tasks" size={14} color="#22C55E" />
            <Text style={styles.tasksText}>{quantTasks} tarefas restantes</Text>
          </View>

          <Button
            title="Abrir"
            onPress={() =>
              router.push({
                pathname: "/groups/[id]",
                params: { id: groupId },
              })
            }
          />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
    backgroundColor: "#E5E7EB",
  },
  content: {
    padding: 16,
    gap: 14,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerText: {
    flex: 1,
    paddingRight: 12,
    gap: 4,
  },
  type: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1380ed",
    letterSpacing: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    fontSize: 12,
    fontWeight: "500",
  },
  avatarStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarItem: {
    marginLeft: -8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tasks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tasksText: {
    fontSize: 13,
    color: "#16A34A",
  },
  openButton: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
