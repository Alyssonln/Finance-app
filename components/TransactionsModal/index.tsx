import { useState } from 'react';
import { Modal, Pressable, Switch, Text, TextInput, View } from 'react-native';
import PrimareButton from '../PrimaryButton';
import { styles } from './styles';

interface TransactionsModalProps {
   visible: boolean;
   onClose: () => void;
   onSave: (data: { description: string; amount: number }) => void;
}

export const TransactionsModal: React.FC<TransactionsModalProps> = ({
   visible,
   onClose,
   onSave,
}) => {
   const [description, setDescription] = useState('');
   const [amount, setAmount] = useState('');
   const [datetimeDetail, setDatetimeDetail] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleSave = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onSave({ description: description, amount: Number(amount) });
      setDescription('');
      setAmount('');
      setIsLoading(false);
      onClose();
   };

   return (
      <Modal visible={visible} animationType="slide">
         <View style={styles.modalContent}>
            <Text style={styles.title}>Adicionar transação</Text>

            <Text>Descrição</Text>
            <TextInput
               placeholder="Insira uma descrição..."
               style={styles.textInput}
               value={description}
               onChangeText={(Text) => setDescription(Text)}
               returnKeyType="next"
            />

            <Text>Valor</Text>
            <TextInput
               style={styles.textInput}
               placeholder="Insira um valor..."
               keyboardType="numeric"
               returnKeyType="done"
               value={amount}
               onChangeText={(text) => setAmount(text)}
            />

            <View style={{ marginBottom: 20 }}>
               <Text>Detalhar data e hora?</Text>
               <Switch
                  value={datetimeDetail}
                  style={{ marginRight: 'auto' }}
                  onValueChange={(newValue) => setDatetimeDetail(newValue)}
               />
               {datetimeDetail && (
                  <TextInput style={styles.textInput} placeholder="Informe a data e hora." />
               )}
            </View>

            <View style={styles.buttonsContainer}>
               <PrimareButton title="Salvar transação" loading={isLoading} onPress={handleSave} />

               <Pressable style={styles.closeButton} onPress={onClose}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
               </Pressable>
            </View>
         </View>
      </Modal>
   );
};
