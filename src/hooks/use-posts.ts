import { QueryKeys } from "@/common/query-key";
import { type Post } from "@/services/api/user-api";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import request from 'graphql-request';

type UseProfileOptions = Omit<UseQueryOptions<Post[]>, 'queryKey' | 'queryFn'>;



const usePosts = (queryField : (keyof Post)[], options?: UseProfileOptions) => {
    const queryPosts = `#graphql
        query MyQuery {
            posts {
                ${queryField.join(' ')}
            }
        }`;

    return useQuery<Post[]>({
        ...options,
        queryKey: [QueryKeys.POST],
        queryFn: async () => {
            const response = await request(import.meta.env.VITE_DATABASE_URL + '/graphql', queryPosts);
            return response.posts; // Đảm bảo trả về trường 'posts'
        },
    });
};

export default usePosts;