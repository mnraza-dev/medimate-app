import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Svg, { Circle } from "react-native-svg";

const { width } = Dimensions.get('window');

// Create animated circle component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
interface CircularProgressProps {
    progress: number;
    totalDoses: number;
    completedDoses: number;
}

function CircularProgress({ progress, totalDoses, completedDoses }: CircularProgressProps) {
    const animationValue = useRef(new Animated.Value(0)).current;
    const size = width * 0.55;
    const strokeWidth = 15;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: progress,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [progress]);

    const strokeDashOffset = animationValue.interpolate({
        inputRange: [0, 100],
        outputRange: [circumference, 0],
    });

    return (
        <View>
            <View>
                <Text>{Math.round(progress)}%</Text>
                <Text>{completedDoses} of {totalDoses} doses</Text>
            </View>

            <Svg width={size} height={size}>
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth={strokeWidth}
                />
                <AnimatedCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="white"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashOffset}
                    transform={`rotate(-90, ${size / 2}, ${size / 2})`}
                />
            </Svg>
        </View>
    )
}
export default function Home() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                <View>
                    <View>
                        <View>
                            <Text>Daily Progress</Text>
                            <TouchableOpacity>
                                <Ionicons name="notifications-outline" size={24} color="white" />

                            </TouchableOpacity>
                        </View>
                        {/* Circular Progress */}

                        <CircularProgress
                            progress={50}
                            totalDoses={100}
                            completedDoses={50}
                        />
                    </View>
                </View>

            </LinearGradient>
        </ScrollView>
    )
}