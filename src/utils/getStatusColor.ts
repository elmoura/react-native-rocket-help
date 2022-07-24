import { useTheme } from "native-base";
import { OrderStatuses } from "../components/filter";


export const getStatusColor = (status: OrderStatuses): string => {
  const { colors } = useTheme();

  return status === OrderStatuses.OPEN
    ? colors.secondary[700]
    : colors.green[300];
}