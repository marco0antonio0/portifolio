import { createContext } from "react";

const EstadoGlobal = createContext({ btnstate: false, setbtnstate: () => {} });

export default EstadoGlobal;
