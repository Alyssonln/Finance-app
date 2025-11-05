import PrimareButton from '@/components/PrimaryButton';
import { TransactionsModal } from '@/components/TransactionsModal';
import { styles } from '@/styles/globals';
import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, ListRenderItem, StatusBar, Text, View } from 'react-native';

type Transaction = {
   id: string;
   description: string;
   amount: number;
};

const transactions: Transaction[] = [
   { id: '1', description: 'Supermercado', amount: -50.75 },
   { id: '2', description: 'Salário', amount: 2500.0 },
   { id: '3', description: 'Restaurante', amount: -120.4 },
   { id: '4', description: 'Aluguel', amount: -800.0 },
   { id: '5', description: 'Ração do cahorro', amount: -199.99 },
   { id: '6', description: 'Ida ao cinema', amount: -54.78 },
   { id: '7', description: 'Freela', amount: 1600.0 },
   { id: '8', description: 'Contas de luz', amount: -252.91 },
   { id: '9', description: 'Contas de água', amount: -80.0 },
];

const renderTransaction: ListRenderItem<Transaction> = ({ item }) => {
   return (
      <View style={styles.transactionItem}>
         <Text style={styles.transactionText}>{item.description}</Text>
         <Text style={[styles.transactionAmount, item.amount > 0 ? styles.income : styles.expense]}>
            R$ {item.amount}
         </Text>
      </View>
   );
};

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

         <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={renderTransaction}
         />

         <View style={{ marginVertical: 20 }}>
            <Link href={'/transactions'} style={{ fontSize: 20 }}>
               Ver transações
            </Link>
         </View>

         <View style={{ marginVertical: 20 }}>
            <Link href={'/profile/view'} style={{ fontSize: 20 }}>
               Ver perfil
            </Link>
         </View>

         <View style={{ marginVertical: 20 }}>
            <Link href={'/profile/edit'} style={{ fontSize: 20 }}>
               Editar perfil
            </Link>
         </View>
      </View>
   );
}
