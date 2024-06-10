import { Outlet } from "react-router-dom";
//import Header from "./components/header";
import Footer from "./components/footer";

//import Beach from "./assets/images/beach.jpg";


export default function Root() {

  return (
    <>
      {/* <Header/> */}
  
   
        <main
          style={{
          
            backgroundSize: "cover",
            backgroundClip: "fixed",
            height: "100hv",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "top, bottom",
          }}
        >
          <div className="w-[100%] h-[100%] bg-white bg-opacity-100">
            <Outlet />
          </div>
        </main>
 
    

      <Footer />
    </>
  );
}
