import { useThemeColor } from "@/hooks/use-theme-color";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <SafeAreaView style={[{ flex: 1, padding: 16, backgroundColor }]}>
      <TextInput
        
      />
    </SafeAreaView>
  );
}
