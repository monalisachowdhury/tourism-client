import Root from "../Root/Root";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
          path:'/allTouristsSpot',
          element: <AllTouristsSpot/> 
        },
        {
          path:'/addTouristsSpot',
          element: <AddTouristsSpot/>
        },
        {
          path:'/myList',
          element: <MyList/>
        }
      ]
    },
  ]);
  