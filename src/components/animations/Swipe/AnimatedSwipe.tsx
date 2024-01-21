import React, {
    useRef,
    ReactNode,
} from 'react';
import { Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import renderRightAction from './RightAction';
import { theme } from '../../../theme/theme';
import {
    StyledSwipeable,
    RightActionsContainer,
} from './SwipeStyles';


interface IAnimatedSwipe {
    onPress: () => void;
    index?: number;
    item?: {
        memberName?: string;
        createdAt?: Date;
    };
    children?: ReactNode;
}


export default function AnimatedSwipe({ children, onPress }: IAnimatedSwipe) {

    const swipeableRef = useRef<Swipeable>(null);

    function renderRightActions(progress: Animated.AnimatedInterpolation<number>) {
        return (
            <RightActionsContainer>
                {renderRightAction({ 
                    color: theme.COLORS.BLUE, 
                    x: 90, progress, 
                    icon: 'favorite',
                    type: 'Home',
                    close, onPress 
                    })}

                {renderRightAction({ 
                    color: theme.COLORS.RED, 
                    x: 82, 
                    progress, 
                    icon: 'trash',
                    type: 'Home',
                    close, onPress })}
            </RightActionsContainer>
        )
    }

    function close() {
        swipeableRef.current?.close();
    };

    return (
        <GestureHandlerRootView>
            <StyledSwipeable
                ref={swipeableRef}
                friction={1}
                enableTrackpadTwoFingerGesture
                rightThreshold={10}
                renderRightActions={renderRightActions}
            >
                {children}
            </StyledSwipeable>
        </GestureHandlerRootView>
    );
};
