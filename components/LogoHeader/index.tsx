import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "@/assets/images/logo.png";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function LogoHeader() {
  const textColor = useThemeColor({}, "text");

  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.logo} />
      <Text style={[styles.logoText, { color: textColor }]}>TaskHub</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "900",
  },
});
