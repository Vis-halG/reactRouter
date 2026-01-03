import Apployout from "./ui/Apployout";
import Home from "./ui/Home"
import About from "./ui/About"
import Movies from "./ui/Movies";

import { createBrowserRouter , RouterProvider} from "react-router-dom";



const App = () => {
  const router = createBrowserRouter ([

     {
path:"/",
element: <Apployout/>,
children: [
{
path:"/home",
element: <Home/>
    },
       {
path:"/about",
element: <About/>
    },
     {
path:"/movies",
element: <Movies/>
    },
]
    },
    


  ]);

  return <RouterProvider router={router} />
}
export default App;