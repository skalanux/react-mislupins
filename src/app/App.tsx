import { createBrowserRouter, RouterProvider } from 'react-router'

import Layout from '../features/collection/components/Layout'
import CollectionView from '../features/collection/components/CollectionView'
import UnderConstruction from '../features/collection/components/UnderConstruction'
import PlanitosView from '../features/planitos/components/PlanitosView'
import { buildSeedIssues } from '../features/collection/data/seedIssues'
import { SeedCollectionRepository } from '../features/collection/collectionRepository'

const repository = new SeedCollectionRepository(buildSeedIssues())

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <CollectionView issues={repository.getCollection()} /> },
      { path: 'planitos', element: <PlanitosView repository={repository} /> },
      { path: 'login', element: <UnderConstruction /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
