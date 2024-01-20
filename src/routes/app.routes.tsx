import Favorites from "../screens/Favorites/Favorites";
import Home from "../screens/Home/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Bottom = createBottomTabNavigator()

export default function RoutesApp() {
    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name="Home"
                component={Home}
            />
            <Bottom.Screen
                name="Favorites"
                component={Favorites}
            />
        </Bottom.Navigator>
    )
}