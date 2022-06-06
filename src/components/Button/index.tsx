import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

interface Props {
    text: string;
    onPress: () => void;
}

export function Button({text, onPress }: Props){
    const navigation = useNavigation<any>();
  return (
    <TouchableOpacity 
        style={styles.button}
    >
        <Text style={styles.buttonText}>
            {text}
        </Text>
    </TouchableOpacity>
  );
}