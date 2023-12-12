export default function Sobre() {
  return (
    <>
      <div className="flex flex-row w-8/12 xl:w-9/12 lg:w-10/12 sm:w-11/12 m-auto mt-5 lg:flex-col">
        <div className=" h-auto w-1/2 text-2xl m-auto xl:text-xl lg:w-10/12 sm:w-full">
          <h1 className="font-bold text-6xl mb-10 xl:text-5xl xl:mb-5 sm:text-4xl">
            Sobre mim
          </h1>
          <p>
            Olá, meu nome é Marco Antonio, tenho 23 anos e sou um engenheiro de
            software apaixonado por tecnologia e desenvolvimento de software.
            Minha paixão me levou a me especializar em desenvolvimento web e
            mobile, onde estou constantemente trabalhando em projetos que
            envolvem integrações com APIs e gerenciamento de bancos de dados
            para aprimorar minhas habilidades como desenvolvedor. Foco
            principalmente no desenvolvimento web com Flutter Web e Next.js,
            além de me especializar em engenharia de integrações com APIs para
            criar soluções excepcionais. Convido você a explorar meus
            repositórios para conhecer mais sobre meus projetos atuais!
          </p>
        </div>
        <div className="w-1/12"></div>
        <div className=" w-1/2 h-auto m-auto lg:w-10/12 mt-5">
          <img
            src="/images/3d-business-man-turned-around-while-working-at-the-computer 1.png"
            alt=""
            className="m-auto"
          />
        </div>
      </div>
    </>
  );
}
