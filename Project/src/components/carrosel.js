import EstadoGlobal from "@/models/global";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
export default function Carrosel({ img, img2 }) {
  const { btnstate, setbtnstate } = useContext(EstadoGlobal);
  const r = useRouter();
  return (
    <>
      <img
        src={!img ? "/images/walpaper1111.png" : img}
        alt=""
        className="m-auto mt-5 mb-0 md:hidden"
      />
      <img
        src={!img2 ? "/images/walpaper21.png" : img2}
        alt=""
        className="m-auto mt-5 mb-0 hidden md:flex"
      />
      {/*================================================================== */}
      <div
        className={`${
          img ? "hidden" : "flex"
        } h-16 w-9/12 xl:w-10/12  m-auto flex-row text-white text-xl font-semibold lg:text-lg sm:text-base lg:h-14 sml:font-normal sml:text-sm md:mt-5 md:mb-3`}
      >
        {/*================================================= */}
        <div
          onClick={() => {
            setbtnstate((e) => (e ? false : true));
          }}
          className={`${
            !btnstate ? "bg-redP" : " border-redP border-2 text-redP"
          }  h-full flex m-auto ml-0 mr-3 cursor-pointer select-none active:scale-[1.05]  shadow-lg opacity-80 sml:w-40 sml:mr-14 `}
        >
          <span className="px-16 m-auto md:px-12 sml:px-0 ">ver mais</span>
        </div>
        {/*================================================= */}
        <div
          onClick={() => {
            r.push("https://wa.me/5591984837847");
          }}
          className=" h-full flex m-auto ml-3 text-redP cursor-pointer select-none active:scale-[1.05]"
        >
          <span className="px-16 m-auto sml:w-32 sml:p-0 ">contato</span>
        </div>
        {/*================================================= */}
      </div>
      {/*================================================================== */}
    </>
  );
}
