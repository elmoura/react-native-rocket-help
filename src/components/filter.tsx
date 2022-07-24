import { Text, Button, IButtonProps } from 'native-base';
import { getStatusColor } from '../utils/getStatusColor';

export enum OrderStatuses {
  OPEN = 'open',
  CLOSED = 'closed'
}

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: OrderStatuses;
}

export function Filter({ title, type, isActive = false, ...rest }: Props) {
  const colorType = getStatusColor(type);

  return (
    <Button
      variant='outline'
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor='gray.600'
      flex={1}
      size='sm'
      {...rest}
    >

      <Text color={isActive ? colorType : 'gray.300'} fontSize='xs' textTransform='uppercase'>
        {title}
      </Text>
    </Button>
  );
}