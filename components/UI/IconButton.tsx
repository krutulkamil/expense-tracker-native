import { FunctionComponent } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
    onPress: () => void;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
    size: number;
}

const IconButton: FunctionComponent<IconButtonProps> = ({ icon, color, size, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.buttonContainer}>
                <Ionicons
                    name={icon}
                    color={color}
                    size={size}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
});

export default IconButton;