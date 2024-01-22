import { db } from "@/firebase.config";
import { get, push, ref, remove, set, update } from "firebase/database";

function transformarEmLista(objeto: {
  [key: string]: { text: string; title: string };
}): { key: string; text: string; title: string }[] {
  return Object.entries(objeto).map(([key, value]) => ({ key, ...value }));
}
// recupera todos os dados e transforma em lista
async function getPosts() {
  return new Promise((resolve, reject) => {
    var reff = ref(db, "post/");
    get(reff)
      .then((e) => {
        if (e.exists()) {
          resolve(transformarEmLista(e.val()));
        } else {
          reject(null);
        }
      })
      .catch((e) => {
        reject(null);
      });
  });
}
// recupera apenas o dado fornecido pela key
async function getPostByKey(
  key: string,
  { prefix = "post/" }: { prefix: string }
) {
  return new Promise((resolve, reject) => {
    var reff = ref(db, prefix + key);
    get(reff)
      .then((e) => {
        if (e.exists()) {
          resolve(e.val());
        } else {
          reject(null);
        }
      })
      .catch((e) => {
        reject(null);
      });
  });
}

export { getPosts, getPostByKey };