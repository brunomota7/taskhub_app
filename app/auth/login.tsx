import Button from "@/components/Button/button";
import SocialButtons from "@/components/Button/socialButtons";
import LogoHeader from "@/components/Header/logoHeader";
import Input from "@/components/Input";
import Separator from "@/components/Separator";
import { useAuth } from "@/contexts/AuthContext";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  const { login } = useAuth();
  const [erro, setErro] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.replace("/(tabs)");
    } catch (err) {
      setErro("Credenciais inválidas. Tente novamente");
      console.log(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={[{ flex: 1, padding: 16, backgroundColor }]}>
        <View style={styles.container}>
          <LogoHeader /> {/* Logo */}
          <View style={styles.content}>
            <Text style={[styles.text, { color: textColor }]}>LOGIN</Text>
            <Text style={styles.textSlogan}>
              Gerencie as tarefas da sua equipe sem esforço.
            </Text>
            <View style={styles.forms}>
              <Input
                label="Email"
                type="email"
                placeholder="ex: exemplo@email.com"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                label="Senha"
                type="password"
                placeholder="Sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={showPassword}
                onToggleSecureEntry={() => setShowPassword(!showPassword)}
              />
              <Text style={[styles.textLink, { color: textColor }]}>
                Esqueceu sua senha?{" "}
                <Link href={"/"} style={styles.link}>
                  Clique aqui
                </Link>
              </Text>
              {erro && (
                <Text style={styles.erro}>{erro}</Text>
              )}
              <Button
                title="Entrar"
                onPress={handleLogin}
                style={{
                  marginTop: 20,
                }}
              />
              <Separator label="OU" />
              <SocialButtons /> {/* Social buttons */}
              <Text
                style={[
                  styles.textLink,
                  { color: textColor, textAlign: "center", marginTop: 20 },
                ]}
              >
                Não possui uma conta?{" "}
                <Link href={"/auth/register"} style={styles.link}>
                  Registre-se
                </Link>
              </Text>
              <View style={styles.footer}>
                <Text style={[styles.footerText, { color: textColor }]}>
                  Ao continuar, você concorda com nossos{" "}
                  <Link href="/" style={styles.link}>
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link href="/" style={styles.link}>
                    Política de Privacidade
                  </Link>
                  .
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView> 
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },
  textSlogan: {
    fontSize: 15,
    fontWeight: "400",
    fontStyle: "italic",
    color: "#1380ed",
  },
  forms: {
    padding: 20,
  },
  textLink: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
  },
  link: {
    textDecorationLine: "underline",
    color: "#1380ed",
  },
  erro: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ff0000",
    textAlign: "center",
    marginTop: 10,
  },
  footer: {
    marginTop: 30,
    paddingHorizontal: 20,
    width: "100%",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
  },
});
