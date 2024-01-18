import { PostDetailsPage } from '@/pages/PostDetailsPage';
import { PostListPage } from '@/pages/PostListPage';
import { ROUTER_PATHS } from '@/shared/constants/routes';
import { RootLayout } from '@/widgets/root-layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
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
