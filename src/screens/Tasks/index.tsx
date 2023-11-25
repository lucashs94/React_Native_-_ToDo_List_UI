import React, { useEffect, useRef, useState } from 'react'
import { Alert, FlatList, Image, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import EmptyTaskList from '../../components/EmptyTaskList';
import Task from '../../components/Task';


export type TaskProps = {
  task: string
  status: boolean
}

export function Tasks(){

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskName, setTaskName] = useState('')
  const [open, setOpen] = useState(0)
  const [created, setCreated] = useState(0)
  
  const [isFocused, setIsFocused] = useState(false)
  
  useEffect(() => {

    setOpen(tasks.reduce( (cont, item) => {
      if(item.status) return cont + 1

      return cont
    }, 0))

    setCreated(tasks.length)

  }, [tasks])
  

  function handleAddTask(){
    
    if (tasks.some( item => item.task === taskName)){
      Alert.alert('Atencao!', 'Esta tarefa já se encontra na lista!')

      setTaskName('')
      Keyboard.dismiss()
      return
    }


    const newTask = { task: taskName, status: false }
    setTasks(previous => [newTask, ...previous])

    setTaskName('')
    Keyboard.dismiss()
  }


  function handleRemoveTask(task: TaskProps){
    
    setTasks(tasks.filter( t => t.task !== task.task))
  }


  function handleUpdateTask(task: TaskProps){
    
    setTasks( previous =>  previous.map( item => {

        if(item.task === task.task){
          return { ...item, status: !task.status }
        }

        return item
      })
    )

  }


  return(
    <View style={styles.container}>
      
      <View
        style={styles.header}
      >
        <Image 
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />

        <View
          style={styles.inputArea}
        >
          <TextInput 
            style={[
              styles.input,
              {
                borderColor: isFocused ? '#5E60CE' : '#0D0D0D',
                borderWidth: 2,
              }
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#808080'}
            value={taskName}
            onChangeText={setTaskName}
          />

          <TouchableOpacity
            style={styles.buttonAddTask}
            onPress={handleAddTask}
          >
            <AntDesign name="pluscircleo" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.taskListArea}>

        <View style={styles.counterContainer}>

          <View style={styles.counterArea}>
            <Text style={[
              styles.counterText, 
              { color: '#4EA8DE'}
            ]}>
              Criadas
            </Text>
            <View style={styles.qtdeArea}>
              <Text style={styles.qtdeText}>
                {created}
              </Text>
            </View>
          </View>

          <View style={styles.counterArea} >
            <Text style={[
              styles.counterText, 
              { color: '#8284FA'}
            ]}>
              Concluídas
            </Text>
            <View style={styles.qtdeArea}>
              <Text style={styles.qtdeText}>
                {open}
              </Text>
            </View>
          </View>

        </View>


        <FlatList 
          style={styles.taskList}
          data={tasks}
          keyExtractor={item => item.task}
          ListEmptyComponent={ () => (
            <EmptyTaskList />
          )}
          renderItem={({item}) => (
            <Task 
              newTask={item}
              onDelete={ () => handleRemoveTask(item) }
              onDone={ () => handleUpdateTask(item) }
            />
          )}
        />
        
      </View>

    </View>
  )
}


