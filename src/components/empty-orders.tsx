import { Text, Center, useTheme } from 'native-base';
import { ChatTeardropText } from 'phosphor-react-native'
import { FunctionComponent } from 'react';
import { OrderStatuses } from './filter';

const orderLabelByStatus: Record<OrderStatuses, string> = {
  [OrderStatuses.OPEN]: 'em andamento',
  [OrderStatuses.CLOSED]: 'finalizados'
}

type Props = { selectedStatus: string };

export const EmptyOrdersContainer: FunctionComponent<Props> = ({
  selectedStatus,
  ...rest
}: Props) => {
  const { colors } = useTheme()

  return (
    <Center>
      <ChatTeardropText color={colors.gray[300]} />
      <Text color='gray.300' fontSize='xl' mt={6} textAlign='center'>
        Você ainda não possui solicitações
        {'\n' + orderLabelByStatus[selectedStatus]}
      </Text>
    </Center>
  );
}