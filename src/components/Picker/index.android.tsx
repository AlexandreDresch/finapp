import { View } from 'react-native';

import { Picker as PickerSelect } from '@react-native-community/picker';

import { styles } from './styles';

interface Props {
    onChange: (value: any) => void;
    type: string;
}

export function Picker({ onChange, type }: Props) {

    return (
        <View style={styles.container}>
            <PickerSelect
                selectedValue={type}
                style={{ width: '100%' }}
                onValueChange={(value) => onChange(value)}>
                <PickerSelect.Item label='Receita' value='receita' />
                <PickerSelect.Item label='Despesa' value='despesa' />
            </PickerSelect>
        </View>
    );
}