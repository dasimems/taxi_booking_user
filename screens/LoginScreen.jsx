import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import AllStyle from '../assets/styles/Styles'
import { LogoHeader } from '../components';
import { useFonts } from 'expo-font';

const LoginScreen = () => {

    const [loaded] = useFonts({
        "Roboto": require('../assets/fonts/Roboto-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    const {parentContainerStyle, h1} = AllStyle;
    

  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={parentContainerStyle}>

            <LogoHeader />

            <View style={styles.loginContainer}>

                <Text style={h1}>Login to your account</Text>

            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginContainer: {
        width: "100%",
        paddingVertical: 0,
        alignItems: "center"
    },
    
})