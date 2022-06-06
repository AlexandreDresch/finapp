import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import theme from '../../global/theme';

export function Header(){
    const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => navigation.openDrawer()}
        >
            <Feather
                name='menu'
                color={theme.colors.text}
                size={30}
            />
        </TouchableOpacity>
    </View>
  );
}