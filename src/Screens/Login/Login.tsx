import {View} from 'react-native';
import React from 'react';
import CustomLabel from '../../Components/CustomLabel/CustomLabel';
import Card from '../../Components/Card/Card';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CutomButton';

const Login = () => {
  return (
    <Card customCardStyle={{flex: 1}}>
      <View style={{justifyContent: 'center', marginTop: 85}}>
        <CustomLabel
          lableName="A T O M"
          customStyleLabel={{
            color: 'green',
            fontSize: 30,
            fontWeight: 'bold',
          }}
        />
      </View>
      <View>
        <CustomLabel
          lableName="Login"
          customlabelContainerStyle={{marginTop: 76}}
        />
      </View>
      <View>
        <CustomInput placeholder="Email / Phone number" />
        <CustomInput placeholder="Password" />
        <View>
          <CustomLabel
            lableName="Forgot Your Password?"
            customStyleLabel={{fontSize: 9, color: 'green'}}
            customlabelContainerStyle={{alignSelf: 'flex-end', marginTop: 12}}
          />
        </View>
      </View>
      <View style={{marginTop: 120}}>
        <CustomButton title="Login" onPress={() => {}} />
      </View>
    </Card>
  );
};

export default Login;
