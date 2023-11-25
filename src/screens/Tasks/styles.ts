import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header:{
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  logo:{
    marginTop: 50,
  },
  inputArea:{
    top: 30,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  input:{
    flex: 1,
    height: 55,
    backgroundColor: '#262626',
    marginRight: 5,
    borderRadius: 6,
    color: '#F2F2F2',
    padding: 15,
    fontSize: 16,
  },
  buttonAddTask:{
    width: 60,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  taskListArea:{
    flex: 1,
    alignItems: 'center',
  },
  counterContainer:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingBottom: 30,
  },
  counterArea:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 5,
  },
  counterText:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  qtdeArea:{
    width: 35,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 20,
  },
  qtdeText:{
    color: '#FFF',
    fontWeight: 'bold',
  },
  taskList:{
    width: '90%',
  },
})