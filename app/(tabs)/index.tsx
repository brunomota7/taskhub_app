import Button from "@/components/Button";
import Card from "@/components/Card";
import CardGroup from "@/components/CardGroup";
import { CircularProgressBar } from "@/components/CircularProgressBar";
import Header from "@/components/Header";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  const [totalTasks] = useState(10);
  const [completedTasks] = useState(8);

  const productivity = completedTasks / totalTasks;

  const groups = [
    {
      id: "marketing-q4",
      nameGroup: "Marketing Campaign Q4",
      typeGroup: "Marketing",
      quantTasks: 8,
      image: require("../../assets/images/banner-2.jpg"),
    },
    {
      id: "product-roadmap",
      nameGroup: "Product Roadmap",
      typeGroup: "Product",
      quantTasks: 12,
      image: require("../../assets/images/banner-3.jpg"),
    },
    {
      id: "design-sprint",
      nameGroup: "Design Sprint",
      typeGroup: "Design",
      quantTasks: 5,
      image: require("../../assets/images/banner-4.jpg"),
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Header />

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardGroup
            nameGroup={item.nameGroup}
            typeGroup={item.typeGroup}
            quantTasks={item.quantTasks}
            image={item.image}
            groupId={item.id}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Text style={[styles.title, { color: textColor }]}>Dashboard</Text>

            <Card width="100%" style={{ marginVertical: 20 }}>
              <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                  <Text style={[styles.titleCard, { color: textColor }]}>
                    Produtividade
                  </Text>
                  <Text style={styles.subTitleCard}>
                    Você finalizou {completedTasks} tarefas essa semana
                  </Text>
                </View>

                <View style={styles.kpiContainer}>
                  <Text style={[styles.kpiValue, { color: textColor }]}>
                    {Math.round(productivity * 100)}%
                  </Text>
                  <Text style={styles.kpiLabel}>Taxa de conclusão</Text>
                </View>

                <View style={styles.footerCard}>
                  <Button
                    title="Relatório completo"
                    onPress={() => router.push("/")}
                    style={styles.reportButton}
                  />
                  <CircularProgressBar progress={productivity} />
                </View>
              </View>
            </Card>

            <View style={styles.groupHeader}>
              <Text style={[styles.title, { color: textColor }]}>
                Seus Grupos
              </Text>
              <Link href={"/(tabs)/groups"} style={styles.linkGroups}>
                See all
              </Link>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 20,
  },
  cardContainer: {
    gap: 20,
  },
  cardHeader: {
    gap: 6,
  },
  titleCard: {
    fontSize: 18,
    fontWeight: "700",
  },
  subTitleCard: {
    fontSize: 14,
    color: "#1380ed",
  },
  kpiContainer: {
    alignItems: "flex-start",
  },
  kpiValue: {
    fontSize: 32,
    fontWeight: "900",
  },
  kpiLabel: {
    fontSize: 13,
    color: "#6B7280",
  },
  footerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reportButton: {
    backgroundColor: "#0061c2",
    paddingHorizontal: 16,
  },
  groupHeader: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkGroups: {
    color: "#1380ed",
    fontSize: 16,
    fontWeight: "600",
  },
});
