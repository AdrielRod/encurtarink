import React, {
    useRef,
    useState,
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
    children: React.ReactNode;
    index: number;
    pressFavorite: (index: number) => void;
    pressDelete: (index: number) => void;
}



export default function AnimatedSwipe({ children, pressFavorite, pressDelete, index }: IAnimatedSwipe) {

    const swipeableRef = useRef<Swipeable>(null);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);


    function renderRightActions(
        progress: Animated.AnimatedInterpolation<number>
      ) {
        return (
          <RightActionsContainer>
            {renderRightAction({
              color: theme.COLORS.BLUE,
              x: 90,
              progress,
              icon: 'favorite',
              type: 'Home',
              index: index,
              close,
              pressFavorite,
            })}
    
            {renderRightAction({
              color: theme.COLORS.RED,
              x: 82,
              progress,
              icon: 'trash',
              type: 'Home',
              index: index,
              close,
              pressDelete,
            })}
          </RightActionsContainer>
        );
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
