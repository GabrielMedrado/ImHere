import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState(["Negri"]);

  function handleParticipantAdd() {
    if(participants.includes("João")) {
      return Alert.alert("Participante já adicionado", "Esse participante já foi adicionado a lista de presença.")
    }

    setParticipants(prevState => [...prevState, "Ana"])
    console.log(participants)
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante removido", `O participante ${name} foi removido da lista de presença.`)
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
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