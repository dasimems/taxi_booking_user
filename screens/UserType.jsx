import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const UserType = () => {
  return (
    <SafeAreaView>
        <ScrollView scrollEnabled={true} contentContainerStyle={parentContainerStyle}>

            <LogoHeader />

        </ScrollView>

    </SafeAreaView>
  )
}

export default UserType

const styles = StyleSheet.create({})