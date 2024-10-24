import { Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen  name="index" options={{headerShown:false}} />
      <Stack.Screen  name="SignUp" options={{headerShown:false}} />
      <Stack.Screen  name="SignIn" options={{headerShown:false}} />
    </Stack>
  );
}
