import { Image, StyleSheet, Text, View } from 'react-native';

const transactions = [
   { id: '1', description: 'Supermercado', amount: -50.75 },
   { id: '2', description: 'Salário', amount: 2500.0 },
   { id: '3', description: 'Restaurante', amount: -120.4 },
   { id: '4', description: 'Aluguel', amount: -800.0 },
];

export default function Index() {
   const name = 'Alysson';

   return (
      <View style={styles.container}>
         <Image source={require('@/assets/images/app-icone.png')} style={styles.logo} />

         <Text style={styles.greeting}>Olá {name}</Text>
         <Text>Saldo Atual</Text>
         <Text>1.529,85</Text>

         <View>
            <Text>Adicionar Receita</Text>
            <Text>Adicionar Despesa</Text>
         </View>

         <Text>Tansações Recentes</Text>

         {transactions.map((transaction) => (
            <View key={transaction.id}>
               <Text>{transaction.description}</Text>
               <Text>{transaction.amount}</Text>
            </View>
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
   },

   logo: {
      width: 100,
      height: 100,
      marginBottom: 10,
      marginHorizontal: 'auto',
   },

   greeting: {
      fontSize: 24,
      marginBottom: 20,
   },
   balanceLabel: {
      fontSize: 16,
      color: '#777',
   },
   balance: {
      fontSize: 32,
      fontWeight: 'regular',
      marginBottom: 20,
   },
   buttonsContainer: {
      flexDirection: 'row',
      gap: 10,
      marginBottom: 20,
   },
   button: {
      backgroundColor: '#2C5F30',
      borderRadius: 10,
      elevation: 2,
      padding: 10,
   },
   buttonText: {
      color: '#FFF',
      fontWeight: '700',
   },
   sectionTitle: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 10,
   },
   transactionItem: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      elevation: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      padding: 12,
   },
   transactionText: {
      fontSize: 16,
   },
   transactionAmount: {
      fontSize: 16,
      fontWeight: '700',
   },
   income: {
      color: 'green',
   },
   expense: {
      color: 'red',
   },
});
