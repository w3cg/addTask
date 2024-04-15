import TaskForm from "./components/task/task-form";
import Calendar from './components/ui/calendar';
import useStore from "./store/board-store";
import Task from "./components/task";

function App() {
  // const { tasksAll, selectedDay, setSelectedDay} = useStore();
  const { tasksAll, setSelectedDay } = useStore();
  // const {selected, setSelectedDay} = useState<Date>(new Date());
  // const { setSelectedDay } = useState<Date | undefined>(undefined);


  const handleDateSelect = (date: Date) => {
    setSelectedDay(date?.toISOString().split('T')[0]);
  };

  return (
    // <div className="flex w-screen h-screen">
    <div className="flex flex-col md:flex-row w-screen h-screen">

      <div className="w-full md:w-1/3 lg:w-1/4 mx-auto xl:w-1/5 p-4 bg-gray-100">
          <Calendar onDateSelect = {handleDateSelect}/>
          <div className="text-black text-center">
            <br />
            <h1>Tareas Pendientes</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">{tasksAll.length}</button>
          </div>
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 mx-auto p-4 bg-white">
        <div className="mx-4">
          <h1 className="text-black font-bold text-2xl my-4">
            Lista de Tarea
          </h1>
          <TaskForm />
          <ul className="max-w-md space-y-2 text-white list-disc list-inside">
            {tasksAll.map(task => (
              <Task key={task.id} body={task} />
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;