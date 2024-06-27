import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../types";

export default function useDeletePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) =>
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`),
        onMutate: (selectedPost) => {
            console.log(selectedPost);
            queryClient.setQueryData<Post[]>(["posts"], (posts = []) =>
                posts.filter((post) => post.id !== selectedPost)
            );
        },
    });
}
