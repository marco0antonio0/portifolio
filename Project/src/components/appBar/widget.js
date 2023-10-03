import { useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
export default function WidgetAppBar() {
  const [IsDrop, setIsDrop] = useState(false);
  return (
    <>
      <div className={style.container0}>
        <RowBtns_smartphone
          onClick={() => {
            setIsDrop((e) => (e ? false : true));
          }}
        />
        {/*==================================== */}
        <div className={style.logo}>
          <h1>Nova Work</h1>
        </div>
        {/*==================================== */}

        <RowBtns_pc />
        <RowBtns_tablet />

        {/*==================================== */}
      </div>
      {/* ==================== */}
      {/* menu recolhivel */}
      {IsDrop ? (
        <div className={`${style.dropMenu} ${style.isNotNotEnable}`}>
          <RowBtns_DropMenu />
        </div>
      ) : null}
    </>
  );
}

function RowBtns_pc() {
  const r = useRouter();
  return (
    <>
      <div className={`${style.rowsBTNS} ${style.isEnable}`}>
        {/*===================================== */}
        {/* icon home */}
        <div onClick={() => r.push("/")}>
          <img src="/images/iconHome.svg" alt="" />
        </div>
        {/*===================================== */}
        {/* icon github */}
        <div onClick={() => r.push("https://github.com/marco0antonio0")}>
          <img src="/images/iconGithub.svg" alt="" />
        </div>
        {/*===================================== */}
        {/* icon contato */}
        <div onClick={() => r.push("https://wa.me/5591984837847")}>
          <img src="/images/iconContato.svg" alt="" />
        </div>
      </div>
    </>
  );
}
function RowBtns_tablet() {
  const r = useRouter();
  return (
    <>
      <div className={`${style.rowsBTNS} ${style.isNotEnable}`}>
        {/*===================================== */}
        {/* icon home */}
        <div onClick={() => r.push("/")}>
          <img src="/images/iconMinimalHome.svg" alt="" />
        </div>
        {/*===================================== */}
        {/* icon github */}
        <div onClick={() => r.push("https://github.com/marco0antonio0")}>
          <img src="/images/iconMinimalGithub.svg" alt="" />
        </div>
        {/*===================================== */}
        {/* icon contato */}
        <div onClick={() => r.push("https://wa.me/5591984837847")}>
          <img src="/images/iconMinimalContato.svg" alt="" />
        </div>
      </div>
    </>
  );
}
function RowBtns_smartphone({ onClick = function () {} }) {
  return (
    <>
      <div className={`${style.rowsBTNS} ${style.isNotNotEnable}`}>
        {/*===================================== */}
        {/* icon menu */}
        <div onClick={onClick}>
          <img src="/images/iconMenu.svg" alt="" />
        </div>
      </div>
    </>
  );
}
function RowBtns_DropMenu() {
  const r = useRouter();
  return (
    <>
      <div className={`${style.ColunmBTN} `}>
        {/*===================================== */}
        {/* icon home */}
        <div onClick={() => r.push("/")}>
          <img src="/images/iconHomeWhite.svg" alt="" />
        </div>
        {/*===================================== */}
        {/* icon github */}
        <div onClick={() => r.push("https://github.com/marco0antonio0")}>
          <img src="/images/iconGithub.svg" alt="" />
        </div>
        {/*===================================== */}
        {/* icon contato */}
        <div onClick={() => r.push("https://wa.me/5591984837847")}>
          <img src="/images/iconContato.svg" alt="" />
        </div>
      </div>
    </>
  );
}
