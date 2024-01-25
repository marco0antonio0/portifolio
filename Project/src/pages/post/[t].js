import TopBar from "@/components/topbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import Head from "next/head";
import { getPostByKey } from "@/services/post";
const MAX_RETRIES = 5;

export default function Post() {
  const [data, setdata] = useState([]);
  const [dataFirebase, setdataFirebase] = useState([]);
  const [titulo, settitulo] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const r = useRouter();
  const { t } = r.query;

  useEffect(() => {
    dataFirebase.length
      ? null
      : getPostByKey(t, { prefix: "informativo" })
          .then((e) => {
            if (typeof e == "undefined") {
              if (retryCount < MAX_RETRIES) {
                // Increment retry count and try again
                setRetryCount(retryCount + 1);
              } else {
                // Retry count exceeded, redirect to "/404"
                r.push("/404");
              }
            } else {
              setRetryCount(0);
              settitulo(e.title);
              setdataFirebase(e);
            }
          })
          .catch((e) => {
            if (typeof e == "undefined" || e == null) {
              if (retryCount < MAX_RETRIES) {
                // Increment retry count and try again
                setRetryCount(retryCount + 1);
              } else {
                // Retry count exceeded, redirect to "/404"
                r.push("/404");
              }
            }
            setdataFirebase([]);
          });
  }, [retryCount, t, titulo]);

  return (
    <main className={`flex flex-col w-full`}>
      <Head>
        <title>Projeto {titulo.length ? titulo : ""}</title>
        <meta
          name="description"
          content="Desenvolvedor Full Stack em Belém, especializado em Front-end e Back-end. Universitário na UNAMA e líder da Liga Acadêmica LADSOFT em Belém."
        />
        <meta
          name="keywords"
          content={`Projeto ${titulo},Portfólio Marco Antonio, Desenvolvedor Full Stack, Belém, Front-end, Back-end, Universitário, UNAMA, Liga Acadêmica LADSOFT`}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <TopBar state={[false, false, false]} />
      <div className="flex flex-col w-11/12 m-auto mb-5">
        {!dataFirebase ? (
          <div className="flex items-center justify-center m-auto my-40">
            <div className="animate-spin rounded-full border-t-4 border-green-300 border-opacity-50 h-12 w-12"></div>
          </div>
        ) : (
          <div className="  m-auto prose prose-2xl xl:prose-xl lg:prose-lg md:prose-base sm:prose-sm w-full">
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {dataFirebase["title"]}
            </h1>
            <Markdown>{dataFirebase["text"]}</Markdown>
          </div>
        )}
      </div>
    </main>
  );
}
