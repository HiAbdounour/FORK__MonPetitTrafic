import { Stack } from "expo-router";
import '@/global.css';

//SplashScreen.preventAutoHideAsync() when loading
//SplashScreen.hideAsync() when finish loading

export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}}/>;
}