import Head from "next/head";
import { Inter } from "next/font/google";
import WidgetAppBar from "./../components/appBar/widget";
import WidgetCardInfo from "./../components/CardInfo/widget";
import WidgetTopics from "./../components/Topics/widget";
import WidgetProjects from "./../components/Projects/widget";
import WidgetBottomBar from "./../components/Bottombar/widget";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setdata] = useState();
  const [load, setload] = useState(false);
  const r = useRouter();
  useEffect(() => {
    if (!load) {
      fetch(`https://api-portifolio.nova-work.cloud/api/getdata`)
        .then((e) => e.json())
        .then((e) => {
          setload(true);
          console.log(e);
          setdata(e.data);
          setload(true);
        });
    }
  });
  return (
    <>
      <Head>
        <title>
          Inicio - Marco Antonio - Desenvolvedor Fullstack em Belém e Ananindeua
        </title>
        <meta
          name="description"
          content="Conheça o portfólio de Marco Antonio, um desenvolvedor fullstack com experiência em criar soluções web de alta qualidade para Belém e Ananindeua. Saiba mais sobre suas habilidades e projetos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="colunm">
        <div className="colunm1">
          <WidgetAppBar />
          <WidgetCardInfo />
          <WidgetTopics />
          <WidgetProjects data={data} />
          <WidgetBottomBar />
        </div>
      </div>
    </>
  );
}
