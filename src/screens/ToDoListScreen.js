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


const getCurrentDate=()=>{
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    return  date + '/' + month + '/' + year;
};


function handleAddTask(text){
  console.log(tasks[0])
  const newTask = {id: Math.random() , tasktoDo: text , completed: false , date : getCurrentDate()};
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

            <View style={styles.toContainer}>
                <Text style={styles.titleto}>
                    To do List:
                </Text>
                
              <View>
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
                  <TouchableOpacity style={styles.addButon}
                    onPress={() => setAddTask(false)}
                  >
                    <Text style={styles.label}>Add a  Task</Text>
                  </TouchableOpacity>

                  :
                  <View>    
                  <TextInput
                    style={styles.input}
                    placeholder={"what you gonna do?"}
                    onChangeText={(text) => setTmpTask(text)}
                  />
                  <TouchableOpacity
                    onPress={() => handleAddTask(addTask)}
                  >
                    <Text style={styles.label}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.label}>Cancel</Text>
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
