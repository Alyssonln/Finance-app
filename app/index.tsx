import PrimareButton from '@/components/PrimaryButton';
import { TransactionsModal } from '@/components/TransactionsModal';
import { styles } from '@/styles/globals';
import { useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

const transactions = [
   { id: '1', description: 'Supermercado', amount: -50.75 },
   { id: '2', description: 'Salário', amount: 2500.0 },
   { id: '3', description: 'Restaurante', amount: -120.4 },
   { id: '4', description: 'Aluguel', amount: -800.0 },
];

export default function Index() {
   const name = 'Alysson';
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleAddTransaction = (data: { description: string; amount: number }) => {
      console.log(data);
      alert('Transação salva com sucesso!');
   };

   return (
      <View style={styles.container}>
         <StatusBar barStyle={'dark-content'} backgroundColor={'#2C5F30'} />

         <Image source={require('@/assets/images/app-icone.png')} style={styles.logo} />

         <Text style={styles.greeting}>Olá {name}</Text>
         <Text style={styles.balanceLabel}>Saldo Atual</Text>
         <Text style={styles.balance}>1.529,85</Text>

         <View style={styles.buttonsContainer}>
            <PrimareButton
               onPress={() => setIsModalOpen(true)}
               title="Adicionar transação"
            ></PrimareButton>
         </View>

         <TransactionsModal
            visible={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddTransaction}
         />

         <Text style={styles.sectionTitle}>Tansações Recentes</Text>

         {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
               <Text style={styles.transactionText}>{transaction.description}</Text>
               <Text
                  style={[
                     styles.transactionAmount,
                     transaction.amount > 0 ? styles.income : styles.expense,
                  ]}
               >
                  R$ {transaction.amount}
               </Text>
            </View>
         ))}
      </View>
   );
}
