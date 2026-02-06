import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons, Octicons, AntDesign } from "@expo/vector-icons";

import { IconButton } from "@/components/Button";
import { useThemeColor } from "@/hooks/use-theme-color";

type HeaderMainProps = {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showSearch?: boolean;
  onSearchPress?: () => void;
  showMore?: boolean;
  onMorePress?: () => void;
};

export default function HeaderMain({
  title,
  showBackButton = true,
  onBackPress,
  showSearch = false,
  onSearchPress,
  showMore = false,
  onMorePress,
}: HeaderMainProps) {
  const router = useRouter();

  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");
  const borderColor = useThemeColor({}, "border");

  return (
    <View style={[styles.header, { borderBottomColor: borderColor }]}>
      <View style={styles.left}>
        {showBackButton && (
          <IconButton
            icon={
              <MaterialIcons
                name="keyboard-arrow-left"
                size={28}
                color={iconColor}
              />
            }
            onPress={onBackPress ?? router.back}
            style={styles.iconButton}
          />
        )}

        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>

      <View style={styles.right}>
        {showSearch && (
          <IconButton
            icon={<Octicons name="search" size={20} color={iconColor} />}
            onPress={onSearchPress}
            style={styles.iconButton}
          />
        )}

        {showMore && (
          <IconButton
            icon={<AntDesign name="ellipsis" size={20} color={iconColor} />}
            onPress={onMorePress}
            style={styles.iconButton}
          />
        )}
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.9,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  iconButton: {
    width: 40,
    height: 40,
  },
});
