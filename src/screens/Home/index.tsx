import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import Plusign from "react-native-vector-icons/AntDesign";
import ClipBoard from "react-native-vector-icons/Ionicons";

import { styles } from "./style";
import TaskComponent from "../../components/Task";

import { Task } from "../../components/Task";

export function Home() {
    const [newTask, setNewTask] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    function handdleAddTask(): void {
        const taskToAdd: Task = {
            id: tasks.length + 1,
            description: newTask,
            isDone: false,
        };

        setTasks((prevState) => [...prevState, taskToAdd]);
        setNewTask("");
    }

    function handleFinishTask(id: number) {
        setTasks((prevState) =>
            prevState.map((task) => {
                if (task.id === id) {
                    task.isDone = true;
                }

                return task;
            })
        );
    }

    function handleRemoveTask(id: number) {
        setTasks((prevState) => prevState.filter((task) => task.id !== id));
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../../../assets/Logo.png")}
                />
            </View>

            <View style={styles.list}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        value={newTask}
                        onChangeText={(text) => setNewTask(text)}
                    />
                    <TouchableOpacity
                        style={styles.formButton}
                        onPress={handdleAddTask}
                    >
                        <Plusign
                            name="pluscircleo"
                            size={16}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.indicatorContainer}>
                    <View style={styles.indicator}>
                        <Text style={styles.indicatorTextCreated}>Criadas</Text>
                        <View style={styles.indicatorNumberContainer}>
                            <Text style={styles.indicatorNumber}>
                                {tasks.reduce(
                                    (total, prev) => (prev.isDone ? total : (total += 1)),
                                    0
                                )}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.indicator}>
                        <Text style={styles.indicatorTextDone}>Concluídas</Text>
                        <View style={styles.indicatorNumberContainer}>
                            <Text style={styles.indicatorNumber}>
                                {tasks.reduce(
                                    (total, prev) => (prev.isDone ? (total += 1) : total),
                                    0
                                )}
                            </Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={tasks
                        .sort((x, y) => y.id - x.id)
                        .sort((x, y) => Number(x.isDone) - Number(y.isDone))
                        .map((task) => JSON.stringify(task))}
                    renderItem={({ item }) => (
                        <TaskComponent
                            task={item}
                            onCheck={handleFinishTask}
                            onRemove={handleRemoveTask}
                        />
                    )}
                    keyExtractor={(item: string) => item}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListElement}>
                            <ClipBoard
                                name="clipboard-outline"
                                size={56}
                                color="#808080"
                            />
                            <Text style={styles.emptyListTextBold}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptyListText}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
