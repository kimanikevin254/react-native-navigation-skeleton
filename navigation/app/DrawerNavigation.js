import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import CustomDrawer from '../../components/CustomDrawer';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name='HomeScreen' component={BottomTabNavigation} options={{
            drawerItemStyle: { display: 'none' }
        }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation