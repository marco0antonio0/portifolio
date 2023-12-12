import TopBar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import Sobre from "@/components/sobre";
import { useEffect, useState } from "react";
import GridItens from "@/components/gridItens";
import Head from "next/head";

export default function Projetos() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    data.length
      ? null
      : fetch("https://api-portifolio.nova-work.cloud/api/getdata")
          .then((e) => e.json())
          .then((e) => {
            setdata(e.data);
          });
  }, [data]);

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
        <GridItens data={data} state={true} />
      </div>
    </main>
  );
}
