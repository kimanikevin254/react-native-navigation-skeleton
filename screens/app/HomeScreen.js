import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView className='flex-1'>
      <Header />
      <View className='flex-1 items-center justify-center'>
        <Text className=''>HomeScreen</Text>
        <Button title='Go to Details' onPress={() => navigation.navigate('ListingDetails')} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen