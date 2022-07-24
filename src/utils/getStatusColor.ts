import { ITheme, useTheme } from "native-base";
import { OrderStatuses } from "../components/filter";


export const getStatusColor = (
  status: OrderStatuses,
  { colors }: ITheme = useTheme()
): string => {
  return status === OrderStatuses.OPEN
    ? colors.secondary[700]
    : colors.green[300];
}