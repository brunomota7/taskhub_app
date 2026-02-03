import { useThemeColor } from "@/hooks/use-theme-color";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type InputProps = {
  label?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  editable?: boolean;
  style?: object;
  onToggleSecureEntry?: () => void;
};

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  editable,
  style,
  onToggleSecureEntry,
}: InputProps) {
  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "tint");

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      )}
      <View style={[styles.inputWrapper, { borderColor, backgroundColor }]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry ?? type === "password"}
          keyboardType={
            keyboardType ?? (type === "email" ? "email-address" : "default")
          }
          autoCapitalize={autoCapitalize ?? "none"}
          autoCorrect={autoCorrect}
          editable={editable}
          style={[styles.input, { color: textColor }, style]}
        />
        {type === "password" && (
          <Pressable onPress={onToggleSecureEntry} style={styles.iconButton}>
            <Ionicons
              name={secureTextEntry ? "eye-off" : "eye"}
              size={20}
              color={iconColor}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    width: "100%",
  },
  input: {
    flex: 1,             
    paddingVertical: 10,
    fontSize: 16,
  },
  iconButton: {
    width: 40,           
    alignItems: "center",
    justifyContent: "center",
  },
});
