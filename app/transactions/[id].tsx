import { globalStyles } from '@/styles/globals';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const TransactionScreen = () => {
   const { id } = useLocalSearchParams<{ id: string }>();

   return (
      <View style={globalStyles.container}>
         <Text style={globalStyles.sectionTitle}> Transações #{id}</Text>
      </View>
   );
};

export default TransactionScreen;
