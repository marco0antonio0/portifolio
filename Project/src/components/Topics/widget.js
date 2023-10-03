import style from "./style.module.css";

export default function WidgetTopics() {
  const TopicsList = [
    {
      img: "/images/TopicsFlutter.svg",
      titulo: "Flutter Framework",
      subtitulo: "Find amazing projects",
      tags: ["web", "mobile", "....."],
    },
    {
      img: "/images/TopicsNextjs.svg",
      titulo: "Next js Framework",
      subtitulo: "Find amazing projects",
      tags: ["web", "mobile", "apis"],
    },
    {
      img: "/images/TopicsFlask.svg",
      titulo: "Flask Framework",
      subtitulo: "Find amazing projects",
      tags: ["web", "mobile", "apis"],
    },
    {
      img: "/images/TopicsReact.svg",
      titulo: "React js Framework",
      subtitulo: "Find amazing projects",
      tags: ["web", "mobile", "....."],
    },
  ];
  return (
    <>
      <div className={style.container0}>
        {/*===================================== */}
        <div className={style.ContainerTitulo}>
          <h1>My Frameworks</h1>
        </div>
        {/*===================================== */}
        <div className={style.rowCardItens}>
          {TopicsList.map((e, i) => {
            return (
              <div className={style.itemTopics} key={i}>
                {CardItem(e)}
              </div>
            );
          })}
        </div>
        {/*===================================== */}
      </div>
    </>
  );
}

function CardItem(data) {
  return (
    <>
      {/*===================================== */}
      <div className={style.imgItem}>
        <img src={data.img} alt="" />
      </div>
      {/*===================================== */}
      <div className={style.itemContainerTexts}>
        <h2>{data.titulo}</h2>
        <span>{data.subtitulo}</span>
        <div className={style.tags}>
          {data.tags.map((e, ii) => {
            return <text key={ii}>{e}</text>;
          })}
        </div>
      </div>
      {/*===================================== */}
    </>
  );
}
