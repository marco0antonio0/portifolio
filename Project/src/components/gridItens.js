import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function GridItens({ data, state = false }) {
  const [count, setcount] = useState(4);
  const r = useRouter();
  return (
    <>
      <h1 className="flex m-auto my-0 text-5xl font-bold md:text-4xl mt-10 sml:text-3xl text-center">
        Projetos desenvolvidos
      </h1>
      <span className="m-auto my-5 text-xl opacity-70 mt-3 sml:px-5 text-justify">
        Explore paginas de projetos abaixo e veja magnificos projetos
        desenvolvidos por marco
      </span>
      <div className=" w-8/12 justify-center sm:justify-start  m-auto flex flex-row flex-wrap content-between items-stretch align-middle md:w-10/12 sm:w-full">
        {!data.length ? (
          <div className="flex items-center justify-center m-auto my-20 mt-5">
            <div className="animate-spin rounded-full border-t-4 border-green-300 border-opacity-50 h-12 w-12"></div>
          </div>
        ) : (
          data.map((e, i) => {
            if (i < count) {
              return <Item key={i} nome={e["titulo"]} id={e["id"]} />;
            }
          })
        )}
      </div>
      <div
        className={`h-16 w-full  m-auto flex flex-row text-white text-xl font-semibold lg:text-lg sm:text-base lg:h-14 sml:font-normal sml:text-sm`}
      >
        <div
          onClick={() => {
            !state
              ? r.push("/projeto")
              : setcount((e) => {
                  let isntance = e;
                  isntance += 3;
                  return isntance;
                });
          }}
          className={`${
            count >= data.length ? "opacity-10" : "opacity-80"
          }  bg-redP h-full flex m-auto cursor-pointer select-none active:scale-[1.05]  shadow-lg  sml:w-40 `}
        >
          <span className="px-16 m-auto md:px-12 sml:px-0 ">ver mais</span>
        </div>
      </div>
    </>
  );
}
function Item({ nome, id }) {
  const r = useRouter();
  return (
    <>
      <div
        onClick={() => {
          r.push("/projeto/" + nome);
        }}
        className="w-72 h-auto bg-whitep flex flex-col content-end align-middle ml-5 mb-5 lg:w-5/12 shadow-lg active:scale-[1.05] cursor-pointer"
      >
        <img
          src="/images/iconGithub.png"
          alt=""
          className="m-auto mt-8 lg:mt-4 md:px-8"
        />
        <h1 className="m-auto font-medium text-2xl mt-2 lg:text-xl px-5">
          {nome.length > 20 ? `${nome.substring(0, 18)} ...` : nome}
        </h1>
        <span className="m-auto mb-14 lg:text-sm lg:mb-7">
          clique e saiba mais
        </span>
      </div>
    </>
  );
}
