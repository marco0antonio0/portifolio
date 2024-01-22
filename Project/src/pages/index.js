import TopBar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import Sobre from "@/components/sobre";
import GridItens from "./../components/gridItens";
import { useEffect, useState } from "react";
import EstadoGlobal from "@/models/global";
import GridTemp from "@/components/gridTemplate";
import Head from "next/head";
import GridTempMainProjects from "@/components/gridTemplate-main-projects";
import { getPostByKey, getPosts } from "@/services/post";

export default function Home() {
  const [dataFirebase, setdataFirebase] = useState([]);
  const [dataMainProjects, setdataMainProjects] = useState();
  const [btnstate, setbtnstate] = useState(false);
  useEffect(() => {
    dataFirebase.length
      ? null
      : getPosts()
          .then((e) => {
            setdataFirebase(e);
          })
          .catch((e) => setdataFirebase([]));
  }, [dataFirebase]);

  useEffect(() => {
    dataMainProjects
      ? null
      : getPostByKey("textoPrincipal", { prefix: "/" })
          .then((e) => {
            console.log(e);
            setdataMainProjects(e);
          })
          .catch((e) => setdataMainProjects([]));
  }, [dataFirebase]);

  // useEffect(() => {
  //   !dataMainProjects
  //     ? null
  //     : fetch("https://api-portifolio.nova-work.cloud/api/get-main-projects")
  //         .then((e) => e.json())
  //         .then((e) => {
  //           // console.log(e);
  //           setdataMainProjects(e.data);
  //         });
  // }, [dataMainProjects]);
  return (
    <main className={`flex flex-col w-full`}>
      <Head>
        <title>Portfólio de Marco Antonio</title>
        <meta
          name="description"
          content="Desenvolvedor Full Stack em Belém, especializado em Front-end e Back-end. Universitário na UNAMA e líder da Liga Acadêmica LADSOFT em Belém."
        />
        <meta
          name="keywords"
          content="Portfólio, Marco Antonio, Desenvolvedor Full Stack, Belém, Front-end, Back-end, Universitário, UNAMA, Liga Acadêmica LADSOFT"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <TopBar state={[true, false, false]} />
      <div className="flex flex-col w-11/12 m-auto mb-5 ">
        <EstadoGlobal.Provider value={{ btnstate, setbtnstate }}>
          <Carrosel />
          {!btnstate ? null : <Sobre />}
          {dataMainProjects ? (
            <GridTempMainProjects
              titulo={dataMainProjects["title"]}
              subtitulo={"Principais projetos de marco"}
              data={dataMainProjects["text"]}
            />
          ) : (
            <div className="flex items-center justify-center m-auto  my-16">
              <div className="animate-spin rounded-full border-t-4 border-green-300 border-opacity-50 h-12 w-12"></div>
            </div>
          )}
          <GridItens data={dataFirebase} state={false} fn={() => {}} />
          <GridTemp
            titulo={"Meus frameworks"}
            subtitulo={"Principais Frameworks utilizados em projetos de marco"}
            data={[
              { nome: "Flutter", cor: "bg-purple-400" },
              { nome: "NextJS", cor: "bg-blue-300" },
              { nome: "NodeJS", cor: "bg-green-200" },
              { nome: "Flask", cor: "bg-purple-400" },
            ]}
          />
          <GridTemp
            titulo={"Linguagens de Progamação"}
            subtitulo={"Principais linguagens utilizados em projetos de marco"}
            data={[
              { nome: "Dart", cor: "bg-purple-400" },
              { nome: "Javascript", cor: "bg-blue-300" },
              { nome: "Python", cor: "bg-green-200" },
              { nome: "Kit Dev Web", cor: "bg-purple-400" },
            ]}
          />
        </EstadoGlobal.Provider>
      </div>
    </main>
  );
}
