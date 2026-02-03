import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useThemeColor } from "@/hooks/use-theme-color";
import Button from "../Button";
import { Ionicons, Octicons } from "@expo/vector-icons";

export default function Header() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "border");
  const iconColor = useThemeColor({}, "icon");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [username, setUsername] = useState("Bruno Mota");

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão necessária",
        "Permissão para acessar a galeria é obrigatória.",
      );
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={pickImage}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.avatar} />
        ) : (
          <Image
            source={require("@/assets/images/avatar.png")}
            style={styles.avatar}
          />
        )}
      </Pressable>
      <View style={styles.contentText}>
        <Text style={styles.text}>Bem-vindo de volta,</Text>
        <Text style={[styles.username, { color: textColor }]}>{username}</Text>
      </View>
      <View style={styles.contentBtns}>
        <Button
          icon={<Octicons name="search" size={20} color={iconColor} />}
          onPress={() => console.log("Button search")}
          style={{
            width: 45,
            height: 45,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 0, 
            paddingVertical: 0,
            backgroundColor: backgroundColor,
          }}
        />
        <Button
          icon={<Ionicons name="notifications" size={20} color={iconColor} />}
          onPress={() => console.log("Button search")}
          style={{
            width: 45,
            height: 45,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 0, 
            paddingVertical: 0,
            backgroundColor: backgroundColor,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentText: {
    marginLeft: 15,
    flex: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    color: "#1380ed",
  },
  username: {
    fontSize: 18,
    fontWeight: "800",
  },
  contentBtns: {
    flexDirection: "row",
    gap: 10,
  },
});
