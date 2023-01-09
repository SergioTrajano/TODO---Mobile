import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { styles } from "./style";

type Task = {
    name: string;
    isDone: boolean;
};

export function Home() {
    const [newTask, setNewTask] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    function handdleAddTask(): void {
        const taskToAdd: Task = {
            name: newTask,
            isDone: false,
        };

        setTasks((prevState) => [...prevState, taskToAdd]);
        setNewTask("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../../assets/Logo.png")}
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
                        <Icon
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
                                    (total, prev) => (prev.isDone ? (total += 1) : total),
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
                                    (total, prev) => (prev.isDone ? total : (total += 1)),
                                    0
                                )}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
