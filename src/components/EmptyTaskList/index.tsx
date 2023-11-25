import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function EmptyTaskList(){
  return(

    <View style={styles.container}>
      <Ionicons name="ios-clipboard-outline" size={84} color="#808080" />
      
      <Text style={[ styles.textMain, { fontWeight: 'bold', marginTop: 20, }]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={[ styles.textMain]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopColor: '#808080',
    borderTopWidth: 1,
    paddingTop: 50,
  },
  textMain:{
    color: '#808080',
    fontSize: 16
  },
})