import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetail() {
    const params = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.toString());
    return <div>ProductDetail</div>;
}
