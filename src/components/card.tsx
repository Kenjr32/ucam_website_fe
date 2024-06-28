// Components

import Image from "./image/image";
// Types


// Utilities

const cardSlider = ({
  id,
  image,
  conference,
  description,
  hover,
  mouseEnter,
  mouseLeave,
}: any) => {
  //const ref: any = useRef(null);
  // const scroll = (scrollOffset: any) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };

  return (
    <>
      <div
        onMouseEnter={() => mouseEnter(id)}
        onMouseLeave={() => mouseLeave(id)}
        key={id}
        className=" flex justify-center col-span-1 w-[400px]  rounded-xl overflow-hidden bg-[#93c4c9]"
      >
        <div className="relative shadow-lg bg-gray-600 rounded-lg w-84 min-h-[150px] hover:cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-500">
          <div className="bg-gray-400 h-96 rounded-t-lg overflow-hidden w-full object-fill items-center align-middle">
            <Image
              source={image}
              alt=""
              styling="h-full w-full items-center justify-center  object-cover"
            />
          </div>
          <div className="inset-0 bg-black bg-opacity-30 flex justify-start  h-[100%] absolute"></div>

          {hover && (
            <div
              className="inset-0 bg-black bg-opacity-50 flex justify-start  h-[100%] absolute"
              key={id}
            >
              <div className="flex flex-col justify-end px-5 w-full py-5 text-white text-xs text-center ">
                <span className="text-lg font-semibold text-white">
                  {conference}
                </span>
                <span className="text-base font-semibold text-white text-wrap">
                  {description}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default cardSlider;
