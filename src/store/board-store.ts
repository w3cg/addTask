import { create } from "zustand";
import { Task } from "../components/interface/interface-task";


interface StoreState {
    tasksAll: Task[];
    selectedDay: string | null;
    addTask: (task: Task) => void;
    setSelectedDay: (date: string | null) => void;
    deleteTask: (id) => void;
}

const useStore = create<StoreState>((set) => ({
    tasksAll: [],
    selectedDay: null,

    addTask: ( task ) => {
        set((state: StoreState) => ({
            tasksAll: [...state.tasksAll, { text: task.text, id: task.id, date: state.selectedDay ?? new Date().toISOString().split('T')[0], completed: false }]
          }));
          console.log(task);
          
    },

    setSelectedDay: (date) => {
        set({selectedDay: date});
    },

    deleteTask: (id) => {
        console.log(id);
        
        set((state: StoreState) => ({
            tasksAll: state.tasksAll.filter(task => task.id !== id)
          }));
          
    },

    setAll: () => {
        console.log();
    },
}));



export default useStore;
