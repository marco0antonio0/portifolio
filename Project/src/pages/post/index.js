import TopBar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import Sobre from "@/components/sobre";
import { useEffect, useState } from "react";
import GridItens from "@/components/gridItens";
import Head from "next/head";
import { getPosts } from "@/services/post";
import GridItensPostagens from "@/components/gridItensPostagens";

export default function Posts() {
  const [dataFirebase, setdataFirebase] = useState([]);

  useEffect(() => {
    dataFirebase.length
      ? null
      : getPosts("informativo")
          .then((e) => {
            console.log(e);
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
      <TopBar state={[false, false, true, false]} />
      <div className="flex flex-col w-11/12 m-auto mb-5">
        <Carrosel
          img={"images/imagePost1.png"}
          img2={"images/imagePost2.png"}
        />
        <GridItensPostagens data={dataFirebase} state={true} fn={() => {}} />
      </div>
    </main>
  );
}
