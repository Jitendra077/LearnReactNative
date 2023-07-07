
import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { CustomLabelProps } from '@/Components/CustomLabel/Type';
import { styles } from '@/Components/CustomLabel/Style';


const CustomLabel: FC<CustomLabelProps> = ({
    lableName = 'Login',
    customlabelContainerStyle,
    customStyleLabel,
}) => {
    return (
        <View style={[styles.container, { ...customlabelContainerStyle }]}>
            <Text style={[styles.labelText, { ...customStyleLabel }]}>{lableName}</Text>
        </View>
    );
};

export default CustomLabel;
