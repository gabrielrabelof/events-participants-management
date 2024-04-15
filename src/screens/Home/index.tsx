import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function capitalize(participantName: string): string {
    return participantName.replace(/\b\w/g, char => char.toUpperCase());
  }

  function handleAddParticipant() {
    if (participantName == "") {
      return Alert.alert("Unnamed participant", "A participant cannot be added without a name.")
    }

    if (participants.includes(capitalize(participantName))) {
      return Alert.alert("Participant exists", `${capitalize(participantName)} has already been added to the list.`)
    }

    setParticipants(prevState => [...prevState, capitalize(participantName)])
    setParticipantName("")
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remove", `Remove participant ${name}?`, [
      {
        text: 'Yes', 
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant != name))
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
          style={styles.input} 
          placeholder="Enter participant's name"
          placeholderTextColor="#8c8c8c"
          value={capitalize(participantName)}
          onChangeText={setParticipantName}
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
            <Participant 
              key={item}
              name={item} 
              onRemove={() => handleRemoveParticipant(item)}/>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent= {() => (
            <Text style={styles.emptyListDescription}>No participants were added to the event list.</Text>
          )}
        />
    </View>
  )
}