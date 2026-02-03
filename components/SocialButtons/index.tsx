import { useThemeColor } from "@/hooks/use-theme-color";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Linking, Pressable, StyleSheet, View } from "react-native";

export default function SocialButtons() {
  const borderColor = useThemeColor({}, "border");
  const iconColor = useThemeColor({}, "icon");

  const socialItem = [
    {
      link: "",
      icon: <AntDesign name="google" size={24} color={iconColor} />,
    },
    {
      link: "",
      icon: <Entypo name="facebook" size={24} color={iconColor} />,
    },
    {
      link: "",
      icon: <AntDesign name="apple" size={24} color={iconColor} />,
    },
  ];

  return (
    <View style={styles.socialContainer}>
      {socialItem.map((item, index) => (
        <Pressable
          key={index}
          style={[styles.socialButton, { borderColor: borderColor }]}
          onPress={() => item.link && Linking.openURL(item.link)}
        >
          {item.icon}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
