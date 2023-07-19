import React, {useState,useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,

} from 'react-native';

import styles from '../styles/toDoStyle'


export default ToDoListScreen = () => {

const [tasks, setTasks] = useState([]);
const [addTask, setAddTask] = useState(true);
const [tmpTask, setTmpTask] = useState("");
const [tmpCrono, setTmpCrono] = useState('00:00');
const [workState, setWorkState] = useState('idle');



let intervalID;
useEffect(() => {
      let minutos=0;
      let segundos=0;
      intervalID = setInterval(() => {   
        segundos+=1
        if(segundos==60){
          minutos+=1
          segundos=0
        }
        setTmpCrono(minutos.toString().padStart(2, '0')+':'+segundos.toString().padStart(2, '0'))
      }, 1000);
      return () => clearInterval(intervalID);
  }, [workState]);


const getCurrentDate=()=>{
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    return  date + month + year;
};


function handleAddTask(text){
  console.log(tasks[0])
  var randint= Math.floor(Math.random() * 100000)
  console.log('--------------------',typeof randint,' ',randint)
  var date = getCurrentDate()
  let randid= randint.toString()+date;
  console.log('--------------------',typeof randid,' ',randid)

  console.log(randid)
  const newTask = {id: randid , tasktoDo: text , completed: false , date : date};
  setTasks((prevTasks) => [...prevTasks, newTask]);
    setAddTask(true);
}

/*
const handleToggleTask = (taskId) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
  );
};
*/

// Dashboard Screen
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>
                    Daily Planner
                </Text>
                <View style={styles.datecontainer}>
                    <Text style={styles.dateText}>
                        Date:
                    </Text>
                    <Text style={styles.dateText}>
                        {getCurrentDate()}
                    </Text>
                </View>
            </View>

            <View>
              <Text>TRABAJANDO EN</Text>
              <Text>*Value de la todolist*</Text>
            </View>

            <View style={styles.timerContainer}>
              <View style={styles.roundContainer}>
                <View>
              <View style={styles.pomoCountC}>
                  <Text style={styles.pomocountText}>10/250</Text>
                </View>
                <View style={styles.cronoContainer}>
                  <Text style={styles.cronoText}>{tmpCrono}</Text>
                </View>
                </View>
                <View style={styles.startpomC}>
                  <TouchableOpacity style={styles.startpomB}>
                    <Text style={styles.startpomT}>Iniciar</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>

            <View style={styles.toContainer}>
              <View>
                <Text style={styles.titleto}>
                    To do List:
                </Text>
                </View>
              <View style={{backgroundColor:"blue",height:'auto'}}>
                <FlatList
                  data={tasks}
                  renderItem={({ item }) => (
                      <Text style={styles.taskText}>{item.tasktoDo}</Text>
                  )}
                  keyExtractor={(item) => item.id}
                />

                <View style={styles.inputContainer}>

                {addTask 
                
                ?
                <View style={styles.buttonContainer1}>
                  <TouchableOpacity style={[styles.roundButton,styles.addButton]}
                    onPress={() => setAddTask(false)}
                  >
                    <Text style={styles.whitelabel}>Add a  Task</Text>
                  </TouchableOpacity>
                  </View>

                  :
                  <View style={styles.buttonContainer2}>    
                  <TextInput
                    style={styles.input}
                    placeholder={"what you gonna do?"}
                    onChangeText={(text) => setTmpTask(text)}
                  />
                  <TouchableOpacity style={[styles.roundButton,styles.addButton]}
                    onPress={() => handleAddTask(tmpTask)}
                  >
                    <Text style={styles.label}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.roundButton,styles.cancelbutton]} onPress={() => {setAddTask(true)}}>
                    <Text style={styles.whitelabel}>Cancel</Text>
                  </TouchableOpacity>
                  </View>  
                }
                </View>
                </View>
              </View>
              
            
     </View>
     </SafeAreaView>
    );
}
