import { useRoutes } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage';
import CollectionsPage from "pages/CollectionsPage/CollectionsPage";
import PicturesPage from "pages/PicturesPage/PicturesPage";
import OneCollectionPage from "../pages/OneCollectionPage/OneCollectionPage";
import CreatePage from "../pages/CreatePage/CreatePage";

const AppRoutes = () => useRoutes([
    {path: "/", element: <MainPage/>},
    {path: "/collections", element: <CollectionsPage/>},
    {path: "/pictures", element: <PicturesPage/>},
    {path: "/collections/:id", element: <OneCollectionPage />},
    {path: "/create", element: <CreatePage />},
]);

export default AppRoutes;