import { Link } from "react-router-dom";

export default function Product() {
    const products = [
        { id: 1, name: "Iphone" },
        { id: 2, name: "Android" },
    ];
    return (
        <>
            <div>Pagina de productos</div>
            <Link to="/">Inicio</Link>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`}>{p.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
