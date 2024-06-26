// import { useReducer } from "react";

// type Action = {
//     type: "INCREMENT" | "DECREASE" | "RESET";
// };

// const reducer = (counter: number, action: Action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return counter + 1;
//         case "DECREASE":
//             return counter - 1;
//         case "RESET":
//             return 0;
//     }
//     return counter;
// };

// export default function App() {
//     const [counter, dispatch] = useReducer(reducer, 0);

//     return (
//         <>
//             <h1>Hola Mundo {counter}</h1>
//             <button onClick={() => dispatch({ type: "INCREMENT" })}>
//                 Incrementar
//             </button>
//             <button onClick={() => dispatch({ type: "DECREASE" })}>
//                 Reducir
//             </button>
//             <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//         </>
//     );
// }

import MainScreen from "./components/MainScreen";
import TodoProvider from "./todos/TodoProvider";

export default function App() {
    return (
        <TodoProvider>
            <MainScreen />
        </TodoProvider>
    );
}
