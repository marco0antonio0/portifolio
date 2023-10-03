import style from "./style.module.css";
export default function WidgetCardInfo() {
  return (
    <>
      <div className={style.container0}>
        {/*======================================= */}
        <div className={style.containerLeft}>
          <h2>Ola,Me chamo Marco</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={style.iconClass}>
            <span>web</span>
            <span>mobile</span>
            <span>apis</span>
          </div>
        </div>
        {/*======================================= */}
        <div className={style.containerRight}>
          <div>
            <img src="/images/card1.svg" alt="" />
          </div>
          <div>
            <img src="/images/card2.svg" alt="" />
          </div>
        </div>
        {/*======================================= */}
      </div>
    </>
  );
}
