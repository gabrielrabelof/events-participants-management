import { Text, TouchableOpacity, View } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'

import { styles } from "./styles";

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({name, onRemove}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      
      <TouchableOpacity 
        style={styles.removeButton} 
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <AntDesign name="minus" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}