import { Colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 52,
        backgroundColor: Colors.light.background,
      }}
    >
      <View>
        <Text>Initial page</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
