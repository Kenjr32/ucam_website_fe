import { useEffect } from "react";
import Cover from "../components/cover"

export default function Home() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return (
      <>
        <div>
          <Cover />

          <section className="w-full text-black py-20 bg-white ">
            <div className="w-full max-w-7xl m-auto items-center flex justify-center">
              <section className="space-y-9">
                <div className="text-6xl font-bold text-black text-center">
                  Welcome to UC
                  <span className="text-[#BE0B32]">A</span>
                  <span className="text-[#1a7c22]">M</span>
                </div>
              </section>
            </div>
          </section>
          <section></section>
        </div>
      </>
    );

}