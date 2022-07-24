import { FunctionComponent } from 'react';
import { Box, HStack, Text, useTheme, VStack, Circle, Pressable, IPressableProps } from 'native-base';
import { ClockAfternoon, Hourglass, CircleWavyCheck } from 'phosphor-react-native';
import { getStatusColor } from '../utils/getStatusColor';
import { OrderStatuses } from './filter';

export type OrderProps = {
  id: string;
  patrimony: string;
  issuedAt: string;
  status: OrderStatuses
};

type Props = IPressableProps & {
  data: OrderProps;
};

export const Order: FunctionComponent<Props> = ({ data, ...rest }) => {
  const theme = useTheme();
  const { colors } = theme;

  const statusColor = getStatusColor(data.status, theme);

  return (
    <Pressable {...rest}>
      <HStack
        bg='gray.600'
        mb={4}
        alignItems='center'
        justifyContent='space-between'
        rounded='sm'
        overflow='hidden'
      >

        <Box h='full' w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={6}>
          <Text color='white' fontSize='md'>
            Patrimônio: {data.patrimony}
          </Text>

          <HStack alignItems='center'>
            <ClockAfternoon size={15} color={colors.gray[300]} />

            <Text color='gray.200' fontSize='xs' ml={1}>
              {data.issuedAt}
            </Text>
          </HStack>
        </VStack>

        <Circle bg='gray.500' h={12} w={12} mr={5}>
          {
            data.status === OrderStatuses.CLOSED
              ? <CircleWavyCheck size={24} color={statusColor} />
              : <Hourglass size={24} color={statusColor} />
          }
        </Circle>

      </HStack>
    </Pressable>
  );
}