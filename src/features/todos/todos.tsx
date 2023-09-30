import { useSelector } from "react-redux";
import { RootState } from "../../types";

export default function Todos() {
  const { todos, loading } = useSelector((state: RootState) => state.counter);
  return (
    <ul className="flex gap-4 flex-col m-8">
      {loading ? (
        <p>Loading wait ...</p>
      ) : (
        <>
          {todos.length > 0 &&
            todos.map((user) => (
              <li className="list-disc" key={user.id}>
                {user.title}
              </li>
            ))}
        </>
      )}
    </ul>
  );
}
