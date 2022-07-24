import { VStack, Text } from "native-base"
import { useRoute } from "@react-navigation/native";
import { Header } from '../components/header';

type RouteParams = { orderId: string };

export const Details = () => {
  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  return (
    <VStack>
      <Header title='solicitação' />
      <Text>
        {orderId}
      </Text>
    </VStack>
  )
}