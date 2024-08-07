import TopBar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import Sobre from "@/components/sobre";
import GridItens from "./../components/gridItens";
import { useEffect, useState } from "react";
import EstadoGlobal from "@/models/global";
import GridTemp from "@/components/gridTemplate";
import Head from "next/head";
import GridTempMainProjects from "@/components/gridTemplate-main-projects";

export default function Home() {
  const [dataDestaque, setdataDestaque] = useState([])
  const [dataPosts, setdataPosts] = useState([])
  const [isLoad, setload] = useState(false)
  // 
  const [btnstate, setbtnstate] = useState(false);

  function removeUndefinedFields(arr) {
    return arr.filter(item => item !== undefined);
  }
  useEffect(() => {
    isLoad ? null : fetch('https://portfolio-api.dirrocha.com/posts', { method: "GET" }).then((e) => {
      if (e.status == 404 || e.status != 200) {
        setload(true)
        return []
      }
      return e.json()
    }).then((e) => {
      var temp = []
      temp = e.map((i) => {
        if (i['destaque']) {
          return i
        }
      })
      setdataDestaque(removeUndefinedFields(temp))
      setdataPosts(e)
      setload(true)
    })

  }, [dataDestaque, dataPosts])





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
          {dataDestaque ? (
            <GridTempMainProjects
              titulo={"Destaques de Projetos 🔥🔥"}
              subtitulo={"Principais projetos de marco"}
              data={dataDestaque}
            />
          ) : (
            <div className="flex items-center justify-center m-auto  my-16">
              <div className="animate-spin rounded-full border-t-4 border-green-300 border-opacity-50 h-12 w-12"></div>
            </div>
          )}
          <GridItens data={dataPosts} state={false} fn={() => { }} />


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
