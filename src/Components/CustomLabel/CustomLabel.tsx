import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { CustomLabelProps } from './Type';
import { styles } from './Style';



const CustomLabel: FC<CustomLabelProps> = ({
    lableName = 'Login',
    customlabelContainerStyle,
    customStyleLabel
}) => {
    return (
        <View style={[styles.container, { ...customlabelContainerStyle }]}>
            <Text style={[styles.labelText, { ...customStyleLabel }]}>{lableName}</Text>
        </View>
    );
};

export default CustomLabel;
