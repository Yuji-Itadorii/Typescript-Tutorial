import { useRef } from "react";
import "./styles.css";

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e : React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd} : Props)=> {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input" action="" onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();
        }}>
      <input
      ref={inputRef}
        type="text"
        placeholder="Enter a Task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
      </form>
    </div>
  )
}

export default InputField