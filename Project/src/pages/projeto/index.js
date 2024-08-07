import TopBar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import Sobre from "@/components/sobre";
import { useEffect, useState } from "react";
import GridItens from "@/components/gridItens";
import Head from "next/head";
import { getPosts } from "@/services/post";

export default function Projetos() {
  const [dataFirebase, setdataFirebase] = useState([]);
  const [dataPosts, setdataPosts] = useState([])
  const [isLoad, setload] = useState(false)

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
      setdataPosts(e)
      setload(true)
    })

  }, [dataPosts])


  useEffect(() => {
    dataFirebase.length
      ? null
      : getPosts("post")
        .then((e) => {
          setdataFirebase(e);
        })
        .catch((e) => setdataFirebase([]));
  }, [dataFirebase]);

  return (
    <main className={`flex flex-col w-full`}>
      <Head>
        <title>Projetos de Marco Antonio</title>
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
      <TopBar state={[false, true, false]} />
      <div className="flex flex-col w-11/12 m-auto mb-5">
        <Carrosel img={"images/img11.png"} img2={"images/walpaper233.png"} />
        <GridItens data={dataPosts} state={true} btnText="mostrar mais" />
      </div>
    </main>
  );
}
