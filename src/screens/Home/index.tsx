import { Text, View, TextInput, TouchableOpacity, FlatList} from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ["Negri", "Pedrocas", "Nemeses", "ZinedineZiZane", "Orochi", "Japones", "Product Owner", "Valter"]

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar participante");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
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