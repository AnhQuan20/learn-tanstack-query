import { QueryKeys } from "@/common/query-key";
import userApi, { type IUser } from "@/services/api/user-api";
import { useQuery,  type UseQueryOptions } from "@tanstack/react-query";

type UseProfileOptions = Omit<UseQueryOptions<IUser>,'queryKey'|'queryFn'>

const useProfile = (opstions?: UseProfileOptions) => {
    return useQuery({
        ...opstions,
        queryKey: [QueryKeys.PROFILE],
        queryFn: () => userApi.getAllUsers(),
    });
}

export default useProfile

