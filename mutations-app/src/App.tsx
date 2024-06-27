import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import useCreatePost from "./hooks/useCreatePost";
import useDeletePost from "./hooks/useDeletePost";
import { Post } from "./types";

export default function App() {
    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLInputElement>(null);

    const { mutate, isPending, error } = useCreatePost(() => {
        if (titleRef.current?.value && bodyRef.current?.value) {
            titleRef.current.value = "";
            bodyRef.current.value = "";
        }
    });

    const { mutate: deletePost } = useDeletePost();

    const { data, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
            axios
                .get<Post[]>(
                    "https://jsonplaceholder.typicode.com/posts?_limit=10"
                )
                .then((response) => response.data),
    });

    return (
        <>
            <h2>Posts</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (titleRef.current?.value && bodyRef.current?.value) {
                        mutate({
                            id: 0,
                            body: bodyRef.current.value,
                            title: titleRef.current.value,
                            userId: 1,
                        });
                    }
                }}
            >
                <div>
                    <input ref={titleRef} type="text" placeholder="Titulo" />
                </div>
                <div>
                    <input ref={bodyRef} type="text" placeholder="Cuerpo" />
                </div>
                <div>
                    <button disabled={isPending}>
                        {isPending ? "Creando..." : "Enviar"}
                    </button>
                    {error && <span>{error.message}</span>}
                </div>
            </form>
            {isLoading && <p>Cargando...</p>}
            <ul>
                {data?.map((post) => (
                    <li
                        onClick={() => deletePost(post.id)}
                        key={post.id}
                        style={{ cursor: "pointer" }}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </>
    );
}
