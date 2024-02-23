import ReactDOM from 'react-dom/client';
import {router} from "./router";

import {RouterProvider} from "react-router-dom";
import {ContextProvider} from "./hoc";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>


);

