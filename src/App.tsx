import { useDispatch } from "react-redux";
import { addTodoRequest, getTodosRequest } from "./features/todos/todosSlice";
import Todos from "./features/todos/todos";
import { useFormik } from "formik";
export default function App() {
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: {
      title: "",
      body: "",
      userid: ""
    },
    onSubmit: () => {
      console.log("submitted",values)
      dispatch(addTodoRequest(values as any))
      handleReset(null)
    }
  })
  return (
    <div className="m-4">
      <button
        onClick={() => {
          dispatch(getTodosRequest());
        }}
        className="relative inline-block text-lg group"
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative"> Get All Todos</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
      <Todos />
      <form onSubmit={handleSubmit} className="flex gap-4 flex-col max-w-xs">
        <p className="font-bold text-2xl">Add Todo</p>
        <input value={values.title} name="title" onChange={handleChange} type="text" placeholder="title" className="border p-2.5 rounded-md border-black" id="title" />
        <input value={values.body} name="body" onChange={handleChange} type="text" placeholder="body" className="border p-2.5 rounded-md border-black" id="body" />
        <input value={values.userid} name="userid" onChange={handleChange} type="number" placeholder="userId" className="border p-2.5 rounded-md border-black" id="userid" />
        <button className="text-white p-2.5 rounded-md bg-blue-400">Add Todo</button>
      </form>
    </div>
  );
}
