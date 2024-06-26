import useTitle from "../hooks/useTitle";
import TodoList from "./TodoList";

type Props = {};

function MainContent({}: Props) {
    console.log("MainContent");
    const { titleName } = useTitle();
    return (
        <div>
            <h2>{titleName}</h2>
            <TodoList />
        </div>
    );
}

export default MainContent;
