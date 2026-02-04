import { View, StyleSheet, Animated } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  progress: number; // 0 a 1
  size?: number;
  strokeWidth?: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function CircularProgressBar({
  progress,
  size = 120,
  strokeWidth = 12,
}: Props) {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 900,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  function getColor(value: number) {
    if (value < 0.4) return "#EF4444";
    if (value < 0.7) return "#F59E0B";
    return "#22C55E";
  }

  function getIcon(value: number) {
    if (value < 0.4) return "trending-down-outline";
    if (value < 0.7) return "remove-circle-outline";
    return "trending-up-outline";
  }

  const color = getColor(progress);

  return (
    <View style={styles.wrapper}>
      <Svg width={size} height={size}>
        {/* Fundo */}
        <Circle
          stroke="#E5E7EB"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progresso */}
        <AnimatedCircle
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      <View style={[styles.centerContent, { borderColor: color }]}>
        <Ionicons name={getIcon(progress)} size={30} color={color} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android shadow
    elevation: 4,
  },
  percentText: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  label: {
    fontSize: 10,
    color: "#6B7280",
    marginTop: 2,
  },
});
