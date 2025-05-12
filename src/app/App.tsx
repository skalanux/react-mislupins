import { createBrowserRouter, RouterProvider } from 'react-router'

import Layout from '../features/collection/components/Layout'
import CollectionView from '../features/collection/components/CollectionView'
import UnderConstruction from '../features/collection/components/UnderConstruction'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <CollectionView /> },
      { path: 'login', element: <UnderConstruction /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
