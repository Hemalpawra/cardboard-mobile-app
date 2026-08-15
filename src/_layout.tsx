import { Stack, DarkTheme, ThemeProvider } from 'expo-router';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0C0E" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
