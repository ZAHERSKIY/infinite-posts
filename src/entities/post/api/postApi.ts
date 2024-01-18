import { baseApi } from '@/shared/api/rtkApi';
import { PostType } from '../model/types';

export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query<PostType[], { limit: number; page: number }>({
      query: ({ limit = 5, page = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _page: page,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        const updatedCache = new Set(currentCache.map((item) => item.id));
        newItems.forEach((item) => {
          if (!updatedCache.has(item.id)) {
            currentCache.push(item);
            updatedCache.add(item.id);
          }
        });
        return currentCache;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: build.query<PostType, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});
