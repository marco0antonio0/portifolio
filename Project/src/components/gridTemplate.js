import { useRouter } from "next/router";

export default function GridTemp({ data, titulo, subtitulo }) {
  const r = useRouter();
  return (
    <>
      <h1 className="flex m-auto my-0 text-5xl font-bold md:text-4xl mt-10 sml:text-3xl text-center">
        {titulo}
      </h1>
      <span className="m-auto my-5 text-xl opacity-70 mt-3 sml:px-5 text-justify">
        {subtitulo}
      </span>
      <div className=" w-8/12 justify-center sm:justify-start  m-auto flex flex-row flex-wrap content-between items-stretch align-middle md:w-10/12 sm:w-full">
        {!data.length ? (
          <div className="flex items-center justify-center m-auto my-20 mt-5">
            <div className="animate-spin rounded-full border-t-4 border-green-300 border-opacity-50 h-12 w-12"></div>
          </div>
        ) : (
          data.map((e, i) => {
            return <Item key={i} nome={e.nome} cor={e.cor} />;
          })
        )}
      </div>
    </>
  );
}
function Item({ nome, cor }) {
  const r = useRouter();
  return (
    <>
      <div
        className={`w-72 h-auto ${cor} flex flex-col ml-5 mb-5 lg:w-5/12  opacity-80 `}
      >
        <h1 className="m-auto font-medium text-2xl lg:text-xl py-10">
          {nome.length > 20 ? `${nome.substring(0, 14)} ...` : nome}
        </h1>
      </div>
    </>
  );
}
