import style from "./style.module.css";
export default function WidgetCardInfo() {
  return (
    <>
      <div className={style.container0}>
        {/*======================================= */}
        <div className={style.containerLeft}>
          <h2>Hello, my name is Marco</h2>
          <p>
            I am a seasoned Full-Stack Developer with in a diverse array of
            programming languages, encompassing Python, JavaScript, C++, and
            Pascal. My primary and unwavering focus centers on the dynamic
            realms of web and mobile development. I have honed my craft,
            cultivating expertise in cutting-edge technologies such as Flutter,
            React.js, and Next.js. My career journey has been propelled by a
            fervent passion for seamlessly integrating APIs and adeptly
            overseeing the intricacies of database management. I am committed to
            a lifelong pursuit of knowledge, perpetually refining and elevating
            my skill set in this ever-evolving field.
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
