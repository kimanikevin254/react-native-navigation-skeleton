import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView>
      <Text>CustomDrawer</Text>
      <View>
        <DrawerItemList {...props} />
      </View>
      <Text>CustomDrawer</Text>
      <Text>CustomDrawer</Text>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer