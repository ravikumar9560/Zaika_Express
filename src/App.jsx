import { Outlet } from "react-router-dom";
import "./App.css";

// import { Footer } from "./components/Footer";
import Header from "./components/Header";

// import  RestaurantMenu  from './components/RestaurantMenu'
// import { ResMenu } from './components/ResMenu'

function App() {
  console.log("App  component rendering ");
  // const [state , setState] = useState(true);
  return (
    <>
      <Header />
      <Outlet />

      {/* <MemoHook/> */}
      {/* <UseRef/> */}
      {/* <UseRefEx1/> */}

      {/* <Memo/> */}
      {/* <Ref/> */}
      {/* <MenuCard /> */}

      {/* <RestaurantMenu/> */}

      {/* if("/" ==> Body )
        if("/about" ==> about )
          if("/contact" ==> contact ) */}

      {/* <Body /> */}
      {/* <Footer/> */}
      {/* <RestaurantMenu/> */}
    </>
  );
}

export default App;
