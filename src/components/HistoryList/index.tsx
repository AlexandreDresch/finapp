import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import theme from '../../global/theme';

interface Props {
  data: {
    key: string;
    type: string;
    value: number;
  }
}

export function HistoryList({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.type}>
        <View
          style={{
            backgroundColor: data.type === 'despesa' ? theme.colors.outcome : theme.colors.income,
            flexDirection: 'row',
            paddingVertical: 3,
            paddingHorizontal: 8,
            borderRadius: 5
          }}
        >
          <Feather
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            color={theme.colors.text_secondary}
            size={20}
          />
          <Text style={styles.typeText}>
            {data.type}
          </Text>
        </View>
      </View>
      <Text style={styles.balance}>
        R$ {data.value}
      </Text>
    </View>
  );
}