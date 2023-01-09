import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "./style";

export type Task = {
    id: number;
    description: string;
    isDone: boolean;
};

type Props = {
    task: string;
    onCheck: (id: number) => void;
    onRemove: (id: number) => void;
};

export default function Task({ task, onCheck, onRemove }: Props) {
    const thisTask: Task = JSON.parse(task);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onCheck(thisTask.id)}>
                <Icon
                    name={thisTask.isDone ? "check-circle" : "checkbox-blank-circle-outline"}
                    size={24}
                    color={thisTask.isDone ? "#5E60CE" : "#4EA8DE"}
                />
            </TouchableOpacity>
            <Text style={thisTask.isDone ? styles.textOutlined : styles.text}>
                {thisTask.description}
            </Text>
            <TouchableOpacity onPress={() => onRemove(thisTask.id)}>
                <Icon
                    name="trash-can-outline"
                    size={24}
                    color="#808080"
                />
            </TouchableOpacity>
        </View>
    );
}
