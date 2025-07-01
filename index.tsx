import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
 
interface Task {
  id: string;
  title: string;
  done: boolean;
}

function TaskInput({ onAdd }: { onAdd: (taskTitle: string) => void }) {
  const [text, setText] = useState('');
 
  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };
 
  return (
<View style={styles.inputContainer}>
<TextInput
        style={styles.input}
        placeholder="Digite o nome da tarefa"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
<TouchableOpacity onPress={handleAdd} style={styles.addButton}>
<Text style={styles.addButtonText}>Adicionar</Text>
</TouchableOpacity>
</View>
  );
}
 
function TaskItem({
  task,
  onToggle,
  onDelete,
}: {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
<View style={styles.itemContainer}>
<TouchableOpacity onPress={() => onToggle(task.id)} style={{ flex: 1 }}>
<Text style={[styles.itemText, task.done && styles.itemTextDone]}>
          {task.title}
</Text>
</TouchableOpacity>
 
      <TouchableOpacity onPress={() => onToggle(task.id)}>
<Text style={styles.toggleButton}>{task.done ? '↺' : '✔︎'}</Text>
</TouchableOpacity>
 
      <TouchableOpacity onPress={() => onDelete(task.id)}>
<Text style={styles.deleteButton}>🗑️</Text>
</TouchableOpacity>
</View>
  );
}
 
function TaskList({
  tasks,
  onToggle,
  onDelete,
}: {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
<FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
<TaskItem task={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      ListEmptyComponent={
<Text style={styles.emptyText}>Nenhuma tarefa cadastrada.</Text>
      }
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  );
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
 
  const addTask = (title: string) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), title, done: false },
    ]);
  };
 
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };
 
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
 
  return (
<View style={styles.container}>
<Text style={styles.title}>Minhas Tarefas</Text>
<TaskInput onAdd={addTask} />
<TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  // TaskInput
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: '#FFF',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  // TaskList
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
  // TaskItem
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  itemTextDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  toggleButton: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  deleteButton: {
    fontSize: 18,
    marginHorizontal: 8,
    color: '#E53935',
  },
});
