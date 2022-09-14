import { useRoutes } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage';
import CollectionsPage from "pages/CollectionsPage/CollectionsPage";
import PicturesPage from "pages/PicturesPage/PicturesPage";

const AppRoutes = () => useRoutes([
    {path: "/", element: <MainPage/>},
    {path: "/collections", element: <CollectionsPage/>},
    {path: "/pictures", element: <PicturesPage/>},
]);

export default AppRoutes;