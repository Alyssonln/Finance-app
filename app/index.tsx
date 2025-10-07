import { styles } from '@/styles/globals';
import { Image, Text, View } from 'react-native';

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

         <Text style={styles.greeting}>
            Olá {name}
         </Text>
         <Text style={styles.balanceLabel}>
            Saldo Atual
         </Text>
         <Text style={styles.balance}>
            1.529,85
         </Text>

         <View style={styles.buttonsContainer}>
            <View style={styles.button}>
               <Text style={styles.buttonText}>
                  Adicionar Receita
               </Text>
            </View>
            <View style={styles.button}>
               <Text style={styles.buttonText}>
                  Adicionar Despesa
               </Text>
            </View>
         </View>

         <Text style={styles.sectionTitle}>
            Tansações Recentes
         </Text>

         {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
               <Text style={styles.transactionText}>
                  {transaction.description}
               </Text>
               <Text style={[
                  styles.transactionAmount,
                  transaction.amount > 0 ? styles.income : styles.expense
               ]}>
                  R$ {transaction.amount}
               </Text>
            </View>
         ))}
      </View>
   );
}


