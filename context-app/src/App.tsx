import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";
import TodosProvider from "./providers/TodosProvider";
import UserProvider from "./providers/UserProvider";
import TitleProvider from "./providers/TitleProvider";

function App() {
    console.log("App");
    return (
        <TodosProvider>
            <UserProvider>
                <TitleProvider>
                    <Dashboard />
                    <MainContent />
                </TitleProvider>
            </UserProvider>
        </TodosProvider>
    );
}

export default App;
