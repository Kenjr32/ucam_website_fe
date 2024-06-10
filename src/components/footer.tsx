import { Link } from "react-router-dom";
import Image from "../components/image/image";
import LogoBlack from "../assets/images/logo/Logo UCAM1.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  function Donation() {
    navigate("/faire-un-don");
  }
  return (
    <div>
      <section className="w-full bg-[#F1F3E3] text-black py-20 max-md:px-4">
        <div className="w-full  m-auto ">
          <div className="w-full  flex justify-center"></div>
          <div className="w-[100%] justify-center flex">
            <div className=" grid grid-flow-row-dense lg:grid-cols-6  mt-10 gap-8 mx-10">
              <div className="col-span-1 justify-center flex">
                <div className="w-26 flex justify-center">
                  <Link to="/">
                    <Image source={LogoBlack} styling="h-16 w-full" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-span-1 justify-start items-center flex flex-col gap-2">
                <div className="font-bold text-xl">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>
              </div>
              <div className="col-span-1 justify-start items-center flex flex-col gap-2">
                <div className="font-bold text-xl">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>

                <div className="font-medium">Lorem Ipsum</div>
              </div>
              <div className="col-span-1 justify-start items-center flex flex-col gap-2">
                <div className="font-bold text-xl">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>
                <div className="font-medium">Lorem Ipsum</div>
              </div>
              <div className="col-span-1 justify-start items-center flex flex-col gap-2">
                <div className="font-bold text-xl">Lorem Ipsum</div>
              </div>
              <div className="col-span-1 justify-center items-center flex flex-col">
                <div className=" flex items-center  justify-center text-center ">
                  <button
                    onClick={() => Donation()}
                    className="bg-[#7ab554] hover:bg-[#93c4c9] text-xl capitalize py-6 px-4  text-white flex justify-center rounded-3xl"
                  >
                    Faire un don au Centre périnatal
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border w-[100%] opacity-50"></div>
        </div>
      </section>

      <section className="w-full bg-white text-[#25554D] py-6 max-md:px-4">
        <div className="w-full max-w-5xl m-auto">
          <div className="text-center">
            <span >
              Centre Périnatal by{" "}
              <a className="text-[#e09d92] font-bold" href="https://web.niveosystems.com/#/" target="_blank">Niveosystems</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
