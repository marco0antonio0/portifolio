import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";

export default function WidgetProjects({ data }) {
  const [count, setcount] = useState(2);
  const [btnDisable, setbtnDisable] = useState(false);

  const r = useRouter();
  return (
    <>
      <div className={style.container0}>
        {/*===================================== */}
        <div className={style.ContainerTitulo}>
          <h1>My Projects</h1>
        </div>
        {/*===================================== */}
        <div className={style.rowCardItens}>
          {data ? (
            data.map((e, i) => {
              if (count > i) {
                return (
                  <div className={style.itemProject} key={i}>
                    {CardItem(e, () => {
                      r.push(`/post?v=${e.titulo}`);
                    })}
                  </div>
                );
              }
            })
          ) : (
            <div class={style.loadercontainer}>
              <div class={style.loader}></div>
              <p>Loading...</p>
            </div>
          )}
        </div>
        {data ? (
          <div
            className={`${style.btnMore} ${
              btnDisable ? style.btnDisable : false
            }`}
            onClick={() => {
              console.log(count);
              console.log(data.length);
              if (data.length <= count + 1) {
                setbtnDisable(true);
              }
              setcount((e) => {
                let ii = e;
                return (ii = e + 2);
              });
            }}
          >
            <span>more +</span>
          </div>
        ) : null}
        {/*===================================== */}
      </div>
    </>
  );
}

function CardItem(data, fn) {
  return (
    <>
      {/*===================================== */}
      <div className={style.itemProjectTexts}>
        <h2>{data.titulo}</h2>
        <p>{data.subtitulo}</p>
        <div className={style.btnPush} onClick={fn}>
          <span>Go Project</span>
        </div>
      </div>
      {/*===================================== */}
      <div className={style.itemProjectImg}>
        <img src={"/images/cardImageProject.svg"} alt="" />
      </div>
      {/*===================================== */}
    </>
  );
}
