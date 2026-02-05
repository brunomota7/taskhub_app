import { IconButton } from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useThemeColor } from "@/hooks/use-theme-color";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { logout } = useAuth();
  const iconColor = useThemeColor({}, "icon");

  return (
    <SafeAreaView>
      <View>
        <Text>Settings Screen</Text>
        <IconButton
          onPress={logout}
          icon={<MaterialIcons name="logout" size={30} color={iconColor} />}
          style={{
            width: 60,
            height: 60,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
