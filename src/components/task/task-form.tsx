import { FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import useStore from '../../store/board-store';

function TaskForm() {
  const { register, handleSubmit, reset } = useForm();
  const { addTask } = useStore();

  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    addTask({id: new Date().toISOString(), text: data.text, completed: false });
    reset();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input {...register('text', { required: true })} className="mr-2 p-2 border border-gray-300  text-black" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Añadir Tarea
      </button>
    </form>
  );
}

export default TaskForm;
