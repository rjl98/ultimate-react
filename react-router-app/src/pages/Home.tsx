import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h2>Hola Mundo! Componente App.tsx</h2>
            <button onClick={() => navigate("/products")}>Enviar</button>
        </>
    );
}
