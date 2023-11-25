import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TaskProps } from '../../screens/Tasks'


type newTaskProps ={ 
  newTask: TaskProps
  onDelete: () => void
  onDone: () => void
}

export default function Task({ newTask, onDelete, onDone }: newTaskProps){
  return(
    <View style={styles.container}>

      <View style={styles.taskArea}>
        <TouchableOpacity
          onPress={onDone}
        >
          {
            newTask.status ?
            (
              <Image
                source={require('../../assets/radio-checked.png')}
              />
            ):
            (
              <Image
                source={require('../../assets/radio-check.png')}
              />
            )
          }
        </TouchableOpacity>
        <Text 
          style={[
            styles.taskText,
            {
              textDecorationLine: newTask.status ? 'line-through' : 'none',
            }
          ]}
          numberOfLines={2}
          ellipsizeMode='tail'
        >
          {newTask.task}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.trashButton}
        onPress={onDelete}
      >
        <Feather name="trash-2" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',

    backgroundColor: '#262626',
    height: 80,

    paddingHorizontal: 10,
    marginBottom: 12,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333'
  },
  taskArea:{
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  taskText:{
    color: '#FFF',
    fontSize: 16,
    paddingHorizontal: 12,
  },
  trashButton:{
    padding: 10,
  },
})