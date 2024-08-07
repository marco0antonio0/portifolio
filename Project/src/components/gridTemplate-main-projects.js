import { useRouter } from "next/router";
import Markdown from "react-markdown";

function model(e) {
  return `
## ${e['titulo']}

![img](${e['link_image']})

`
}

export default function GridTempMainProjects({ data, titulo, subtitulo }) {
  const r = useRouter();
  return (
    <>
      <h1 className="flex m-auto my-0 text-5xl font-bold md:text-4xl mt-10 sml:text-3xl text-center">
        {titulo}
      </h1>
      <span className="m-auto my-5 text-xl opacity-70 mt-3 sml:px-5 text-justify">
        {subtitulo}
      </span>
      <div className="w-8/12 m-auto flex flex-col md:w-10/12 sm:w-full prose xl:prose-xl lg:prose-lg md:prose-base sm:prose-sm">
        {data.map((e, i) => (
          <div key={`${e['titulo']}-${i}`}>
            <Markdown className="prose-img:w-full">{model(e)}</Markdown>
            <a href={`/projeto/${e['titulo']}`}>{'-->'} acessa projeto</a>
          </div>
        ))}
      </div>
    </>
  );
}
