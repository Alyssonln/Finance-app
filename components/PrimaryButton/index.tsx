import { ActivityIndicator, Pressable, Text } from 'react-native';
import styles from './styles';

interface PrimareButtonProps {
   title: string;
   loading?: boolean;
   onPress: () => void;
}

const PrimareButton: React.FC<PrimareButtonProps> = ({ title, loading, onPress }) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#999' : '#2C5F30' }]}
      >
         {loading ? (
            <ActivityIndicator color={'#FFF'} style={{ width: 100 }} />
         ) : (
            <Text style={styles.buttonText}>{title}</Text>
         )}
      </Pressable>
   );
};

export default PrimareButton;
