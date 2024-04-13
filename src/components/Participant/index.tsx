import { Text, TouchableOpacity, View } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'

import { styles } from "./styles";

type Props = {
  name: string
}

export function Participant({name}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.removeButton} activeOpacity={0.7}>
        <AntDesign name="minus" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}