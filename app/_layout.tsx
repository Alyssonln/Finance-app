import { TransactionsProvider } from '@/contexts/TransactionsContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
   return (
      <TransactionsProvider>
         <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         </Stack>
      </TransactionsProvider>
   );
}
