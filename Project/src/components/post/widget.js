import { useRouter } from "next/router";
import style from "./style.module.css";
import Markdown from "react-markdown";

export default function WidgetPost({ data = [] }) {
  const r = useRouter();
  return (
    <>
      {data["titulo"] ? (
        <div className={style.container0}>
          <div className={style.idea1}>
            <img src="/images/iconFoguete.svg" alt="" />
            <h1>{data["titulo"]}</h1>
          </div>
          <div className={style.idea}>
            <img src="/images/iconIdea.svg" alt="" />
            <h2>{data["subtitulo"]}</h2>
          </div>

          {/* <div className={style.imgPost}>
            <img src="/images/image0.png" alt="" />
          </div> */}
          <div className={style.postText}>
            <Markdown className={style.mardownStyle}>
              {data["textPost"]}
            </Markdown>
          </div>
          <div
            className={style.btnPush}
            onClick={() => {
              r.push(data["link"]);
            }}
          >
            <span>Go Gihub project</span>
          </div>
        </div>
      ) : (
        <div class={style.loadercontainer}>
          <div class={style.loader}></div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
