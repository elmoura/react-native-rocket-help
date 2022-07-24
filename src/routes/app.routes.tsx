import { FunctionComponent } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/home"
import { Details } from "../screens/details"
import { Register } from "../screens/register"

export const AppRoutes: FunctionComponent = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='new' component={Register} />
      <Screen name='details' component={Details} />
    </Navigator>
  )
}