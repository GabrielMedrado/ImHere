import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante já adicionado", "Esse participante já foi adicionado a lista de presença.")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  function handleStates(value: string) {
    setParticipantName(value);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 09 de Novembro de 2024
      </Text>

    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        onChangeText={setParticipantName}
        value={participantName}
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
     </View>

     <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant 
          name={item} 
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
     showsVerticalScrollIndicator={false}
     ListEmptyComponent={() => (
      <Text style={styles.listEmptyText}>
        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
      </Text>
     )}
     />
    </View>
  )
}