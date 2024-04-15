import { Props } from "../interface/interface-task"

function Task({ body }: Props) {
    const { date, text } = body
    return (
        <div className='flex justify-between items-center bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded'>
            <div className='px-2 py-1'>{text} - {date}</div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-2 rounded">X</button>
        </div>
    )
}

export default Task