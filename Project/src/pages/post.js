import Head from "next/head";
import WidgetAppBar from "./../components/appBar/widget";
import WidgetTopics from "./../components/Topics/widget";
import WidgetBottomBar from "./../components/Bottombar/widget";
import WidgetPost from "./../components/post/widget";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WidgetNotFound from "./../components/notFound/widget";

export default function Home() {
  const [data, setdata] = useState();
  const [coment, setcoment] = useState("Carregando...");
  const [coment2, setcoment2] = useState("Carregando...");
  const [load, setload] = useState(false);
  const [erro, seterro] = useState(false);
  const r = useRouter();
  const { v } = r.query;
  useEffect(() => {
    if (!load && v) {
      fetch(`https://api-portifolio.nova-work.cloud/api/getonedata?titulo=${v}`)
        .then((e) => e.json())
        .then((e) => {
          setload(true);
          if (e.data.length == 0) {
            seterro(true);
          } else {
            setcoment(v);
          }
          setdata(e.data[0]);
          setcoment2(e.data[0]["subtitulo"]);
          setload(true);
        })
        .catch((e) => {
          seterro(true);
        });
    }
  }, [v]);
  return (
    <>
      <Head>
        <title>Projet - {coment} </title>
        <meta name="description" content={coment2} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="colunm">
        <div className="colunm1">
          <WidgetAppBar />
          {erro ? <WidgetNotFound e={v} /> : <WidgetPost data={data} />}
          <WidgetTopics />
          <WidgetBottomBar />
        </div>
      </div>
    </>
  );
}
