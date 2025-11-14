import { globalStyles } from '@/styles/globals';
import { Link } from 'expo-router';
import { FlatList, ListRenderItem, Pressable, Text, View } from 'react-native';

type Transaction = {
   id: string;
   description: string;
   amount: number;
};

const transactions: Transaction[] = [
   { id: '1', description: 'Supermercado', amount: -50.75 },
   { id: '2', description: 'Salario', amount: 2500.0 },
   { id: '3', description: 'Restaurante', amount: -120.4 },
   { id: '4', description: 'Aluguel', amount: -800.0 },
   { id: '5', description: 'Racao do cachorro', amount: -199.99 },
   { id: '6', description: 'Ida ao cinema', amount: -54.78 },
   { id: '7', description: 'Freela', amount: 1600.0 },
   { id: '8', description: 'Contas de luz', amount: -252.91 },
   { id: '9', description: 'Contas de agua', amount: -80.0 },
];

const renderTransaction: ListRenderItem<Transaction> = ({ item }) => {
   return (
      <Link href={{ pathname: '/transactions/[id]', params: { id: item.id } }} asChild>
         <Pressable>
            <View style={globalStyles.transactionItem}>
               <Text style={globalStyles.transactionText}>{item.description}</Text>
               <Text
                  style={[
                     globalStyles.transactionAmount,
                     item.amount > 0 ? globalStyles.income : globalStyles.expense,
                  ]}
               >
                  R$ {item.amount}
               </Text>
            </View>
         </Pressable>
      </Link>
   );
};

const TransactionsScreen = () => {
   return (
      <View style={globalStyles.container}>
         <Text style={globalStyles.sectionTitle}>Todas as transacoes</Text>

         <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={renderTransaction}
         />
      </View>
   );
};

export default TransactionsScreen;
