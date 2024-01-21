import { Animated } from "react-native";

import {Fontisto} from '@expo/vector-icons'
import { RightActionContainer, RightActionButton } from "./SwipeStyles";
import { theme } from "../../../theme/theme";

interface IRightActionProps {
    color: string;
    x: number;
    progress: Animated.AnimatedInterpolation<number>;
    type: 'Home' | 'Favorite',
    icon: 'favorite' | 'trash'
    close: () => void;
    onPress: () => void;
}


export default function renderRightAction({ color, x, progress, type, icon,close, onPress }: IRightActionProps){
    const translateX = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [x, 0],
    });

    function pressHandler(){
        close();
        onPress();
    };

    return (
        <RightActionContainer style={{ transform: [{ translateX: translateX }] }}>
            <RightActionButton color={color} onPress={pressHandler}>
                <Fontisto color={theme.COLORS.WHITE} size={24} name={icon} />
            </RightActionButton>
        </RightActionContainer>
    );
};