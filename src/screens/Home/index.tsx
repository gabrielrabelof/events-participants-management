import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const participants = ['Gabriel', 'Luke', 'Jhon', 'Paul', 'Matthew', 'Petter', 'Michael', 'Leo']

  function handleAddParticipant() {
    if (participants.includes('Taylor')) {
      return Alert.alert("Participant exists", "This participant has already been added to the list.")
    }

    Alert.alert("Participant added", "This participant was added successfully.")
  }

  function handleRemoveParticipant() {
    Alert.alert("Remove participant", "Are you sure that you want to remove this participant?", [
      {
        text: 'Yes', 
        onPress: () => Alert.alert("Participant removed", "This participant was removed successfully.")
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

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
        <TouchableOpacity 
          style={styles.addButton} 
          activeOpacity={0.7}
          onPress={handleAddParticipant}
        >
          <AntDesign name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

        <Text style={styles.listTitle}>Participants ({participants.length})</Text>

        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Participant name={item} onRemove={handleRemoveParticipant}/>
          )}
          ListEmptyComponent=
          {
              <Text style={styles.emptyListDescription}>No participants were added to the event list. add by entering the name above and pressing the button</Text>
          }
        />
    </View>
  )
}