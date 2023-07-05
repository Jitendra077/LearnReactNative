import { Button, View } from 'react-native';
import React from 'react';
import CustomLabel from '../../Components/CustomLabel/CustomLabel';
import Card from '../../Components/Card/Card';
import CustomInput from '../../Components/CustomInput/CustomInput';

const Login = () => {
    return (
        <Card customCardStyle={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', marginTop: 85 }}>
                <CustomLabel lableName="Learn React Native" customStyleLabel={{ color: 'darkgreen', fontSize: 30, fontWeight: 'bold', }} />
            </View>
            <View>
                <CustomLabel lableName="Login" customlabelContainerStyle={{ marginTop: 76 }} />
            </View>
            <View>
                <CustomInput placeholder='Email / Phone number' />
                <CustomInput placeholder='Password' />
                <View>
                    <CustomLabel lableName='Forgot Your Password?'
                        customStyleLabel={{ fontSize: 9, color: 'green' }}
                        customlabelContainerStyle={{ alignSelf: 'flex-end', marginTop: 12 }} />
                </View>
            </View>
            <View style={{ marginVertical: 140 }}>
                <Button title='Login' color={'green'} onPress={{
                    //TODO:
                }} />

            </View>
        </Card>
    )
}

export default Login;