import TopBar from "@/components/topbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import Head from "next/head";

export default function Projetos() {
  const [dataPosts, setDataPosts] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const router = useRouter();
  const { t } = router.query;

  useEffect(() => {
    if (!t) return; // Aguarde até que t esteja definido

    if (!isLoad) {
      fetch(`https://portfolio-api.dirrocha.com/posts/titulo/${t}`, { method: 'GET' })
        .then((response) => {
          if (response.status === 404 || response.status !== 200) {
            if (retryCount < MAX_RETRIES) {
              setRetryCount(retryCount + 1);
            } else {
              setIsLoad(true);
              router.push("/404");
            }
            return null;
          }
          return response.json();
        })
        .then((data) => {
          if (data) {
            setIsLoad(true);
            setDataPosts(data);
            setTitulo(data.titulo);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          if (retryCount < MAX_RETRIES) {
            setRetryCount(retryCount + 1);
          } else {
            setIsLoad(true);
            router.push("/404");
          }
        });
    }
  }, [t, retryCount, isLoad, router]);

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
        {!isLoad ? (
          <div className="flex items-center justify-center m-auto my-40">
            <div className="animate-spin rounded-full border-t-4 border-green-300 border-opacity-50 h-12 w-12"></div>
          </div>
        ) : (
          <div className="m-auto prose prose-2xl xl:prose-xl lg:prose-lg md:prose-base sm:prose-sm w-full">
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {dataPosts?.titulo}
            </h1>
            <Markdown>{dataPosts?.conteudo}</Markdown>
          </div>
        )}
      </div>
    </main>
  );
}
