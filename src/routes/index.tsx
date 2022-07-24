import { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "../screens/sign-in";
import { AppRoutes } from "./app.routes";

export const Routes: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}