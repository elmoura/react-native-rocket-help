import { useState } from 'react';
import { SignOut } from 'phosphor-react-native';
import { VStack, HStack, IconButton, Text, Heading, useTheme, FlatList } from 'native-base';
import { Filter, OrderStatuses } from '../components/filter'
import { Order, OrderProps } from '../components/order';
import Logo from '../assets/logo_secondary.svg';
import { Button } from '../components/button';
import { EmptyOrdersContainer } from '../components/empty-orders';
import { useNavigation } from '@react-navigation/native';


export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '123',
      patrimony: '912038401',
      issuedAt: '18/07/2022',
      status: OrderStatuses.CLOSED
    },
    {
      id: '1234',
      patrimony: '912038401',
      issuedAt: '18/07/2022',
      status: OrderStatuses.OPEN
    },
    {
      id: '1235',
      patrimony: '912038401',
      issuedAt: '18/07/2022',
      status: OrderStatuses.CLOSED
    },
    {
      id: '1236',
      patrimony: '912038401',
      issuedAt: '18/07/2022',
      status: OrderStatuses.CLOSED
    },
    {
      id: '1237',
      patrimony: '912038401',
      issuedAt: '18/07/2022',
      status: OrderStatuses.OPEN
    },
  ]);


  const [selectedStatus, setSelectedStatus] = useState<OrderStatuses>(OrderStatuses.OPEN);

  const handleNewOrder = () => {
    navigation.navigate('new');
  }

  const handleOpenDetails = (orderId: string) => {
    navigation.navigate('details', { orderId });
  }

  return (
    <VStack flex={1} pb={6} bg='gray.700'>
      <HStack
        w='full'
        justifyContent='space-between'
        alignItems='center'
        bg='gray.600'
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w='full' mt={8} mb={4} justifyContent='space-between' alignItems='center'>

          <Heading color='gray.100'>
            Meus chamados
          </Heading>

          <Text color='gray.200'>
            3
          </Text>

        </HStack>

        <HStack space={3} mb={8}>

          <Filter
            type={OrderStatuses.OPEN}
            title='Em andamento'
            isActive={selectedStatus === OrderStatuses.OPEN}
            onPress={() => setSelectedStatus(OrderStatuses.OPEN)}
          />

          <Filter
            type={OrderStatuses.CLOSED}
            title='Finalizados'
            isActive={selectedStatus === OrderStatuses.CLOSED}
            onPress={() => setSelectedStatus(OrderStatuses.CLOSED)}
          />

        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <Order data={item} onPress={() => handleOpenDetails(item.id)} />
          }
          ListEmptyComponent={
            <EmptyOrdersContainer selectedStatus={selectedStatus} />
          }
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </VStack>

      <Button title='Nova solicitação' onPress={handleNewOrder} />
    </VStack >
  );
}