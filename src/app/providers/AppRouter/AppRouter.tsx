import { PostDetailsPage } from '@/pages/PostDetailsPage';
import { PostListPage } from '@/pages/PostListPage';
import { ROUTER_PATHS } from '@/shared/constants/routes';
import { RootLayout } from '@/widgets/root-layout';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: ROUTER_PATHS.POST_LIST,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <PostListPage />,
      },
      {
        path: ROUTER_PATHS.POST_DETAILS,
        element: <PostDetailsPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
