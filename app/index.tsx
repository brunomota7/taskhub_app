import Logo from "@/assets/images/logo.png";
import Button from "@/components/Button/button";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link, useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <Text style={[styles.text, { color: textColor }]}>TaskHub</Text>
        <Text style={[styles.slogan, { color: textColor }]}>
          Colabore, gerencie e expanda seus projetos.
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          title="Comece agora"
          onPress={() => router.push("/auth/login")}
          variant="default"
          style={{
            height: 50,
            width: "80%",
          }}
        />
        <Text style={[styles.textLink, { color: textColor }]}>
          Ainda não tem uma conta?{" "}
          <Link href={"/auth/register"} style={styles.link}>
            Registre-se
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 12,
    resizeMode: "contain",
  },
  text: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: "900",
  },
  slogan: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  textLink: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "500",
  },
  link: {
    textDecorationLine: "underline",
    color: "#1380ed",
  },
});
