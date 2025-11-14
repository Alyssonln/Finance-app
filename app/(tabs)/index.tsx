import PrimareButton from '@/components/PrimaryButton';
import { TransactionsModal } from '@/components/TransactionsModal';
import { globalStyles } from '@/styles/globals';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

export default function Index() {
   const name = 'Alysson';
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleAddTransaction = (data: { description: string; amount: number }) => {
      console.log(data);
      alert('Transação salva com sucesso!');
   };

   return (
      <View style={globalStyles.container}>
         <StatusBar barStyle={'dark-content'} />

         <Image source={require('@/assets/images/app-icone.png')} style={globalStyles.logo} />

         <Text style={globalStyles.greeting}>Olá {name}</Text>
         <Text style={globalStyles.balanceLabel}>Saldo Atual</Text>
         <Text style={globalStyles.balance}>1.529,85</Text>

         <View style={globalStyles.buttonsContainer}>
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

         <Text style={globalStyles.sectionTitle}>Tansações Recentes</Text>

         <View style={{ marginVertical: 20 }}>
            <Link href={'/transactions'} style={{ fontSize: 20 }}>
               Ver transações
            </Link>
         </View>
      </View>
   );
}
