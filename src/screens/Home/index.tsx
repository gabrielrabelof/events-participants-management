import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.eventDetails}>
        <Text style={styles.eventName}>Event Name</Text>
        <Text style={styles.eventDate}>Saturday, April 13th, 2024</Text>
      </View>

      <View style={styles.form}>
        <TextInput 
          style={styles.nameField} 
          placeholder="Enter participant's name"
          placeholderTextColor="#8c8c8c"
        />
        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <AntDesign name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}