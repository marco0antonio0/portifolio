import { useRouter } from "next/router";
import { useState } from "react";

export default function TopBar({ state = [true, false, false] }) {
  return (
    <>
      <div className="md:flex flex-col hidden">
        <LayoutSmartphone state={state} />
      </div>
      <div className="md:hidden flex flex-col">
        <LayoutDesktop state={state} />
      </div>
    </>
  );
}

function LayoutSmartphone({ state }) {
  const [MenuState, setMenuState] = useState(false);
  const r = useRouter();
  return (
    <>
      {/* ========================================================================= */}
      <div className="flex flex-row w-full  h-32 sm1:h-24">
        <img
          src="/images/logo-portifolio.png"
          alt=""
          className="h-full w-auto p-5 ml-14 sm:ml-5 "
        />
        <img
          onClick={() => {
            setMenuState((y) => (y ? false : true));
          }}
          src="/images/iconMenu-portifoio.png"
          alt=""
          className="h-auto w-12 m-auto mr-16 cursor-pointer active:scale-[1.05] select-none"
        />
      </div>
      {/* ========================================================================= */}
      <div
        className={`${
          !MenuState ? "hidden" : "flex"
        } rounded-lg flex-col bg-white shadow-md border-2 border-black border-opacity-5 w-auto align-middle absolute right-3 top-24 p-8 py-8 text-2xl gap-5`}
      >
        <button
          className={`m-auto ml-0 cursor-pointer active:scale-[1.05] ${
            !state[0] ? "opacity-50" : ""
          }`}
          onClick={() => {
            r.push("/");
          }}
        >
          <h1>inicio</h1>
        </button>
        <button
          className={`m-auto ml-0 cursor-pointer active:scale-[1.05] ${
            !state[1] ? "opacity-50" : ""
          }`}
          onClick={() => {
            r.push("/projeto");
          }}
        >
          <h1>projetos</h1>
        </button>
        <button
          className={`m-auto ml-0 cursor-pointer active:scale-[1.05] ${
            !state[2] ? "opacity-50" : ""
          }`}
          onClick={() => {
            r.push("https://wa.me/5591984837847");
          }}
        >
          <h1>contato</h1>
        </button>
      </div>
    </>
  );
}
function LayoutDesktop({ state }) {
  const r = useRouter();
  return (
    <>
      <div className="flex flex-row h-36">
        <img
          src="/images/logo-portifolio.png"
          alt=""
          className="h-full w-auto p-5 ml-20 lg:ml-5"
        />
        <div className="flex flex-row text-2xl font-medium w-96 pt-5 m-auto ml-72 lg:ml-20 ">
          <button
            className={`m-auto cursor-pointer active:scale-[1.05] ${
              !state[0] ? "opacity-50" : ""
            }`}
            onClick={() => {
              r.push("/");
            }}
          >
            <h1>inicio</h1>
          </button>
          <button
            className={`m-auto cursor-pointer active:scale-[1.05] ${
              !state[1] ? "opacity-50" : ""
            }`}
            onClick={() => {
              r.push("/projeto");
            }}
          >
            <h1>projetos</h1>
          </button>
          <button
            className={`m-auto cursor-pointer active:scale-[1.05] ${
              !state[2] ? "opacity-50" : ""
            }`}
            onClick={() => {
              r.push("https://wa.me/5591984837847");
            }}
          >
            <h1>contato</h1>
          </button>
        </div>
      </div>
    </>
  );
}
