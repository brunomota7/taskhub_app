import { useThemeColor } from "@/hooks/use-theme-color";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <SafeAreaView style={[{ backgroundColor }]}>
      <Text style={[{ color: textColor }]}>Login Page</Text>
    </SafeAreaView>
  );
}
