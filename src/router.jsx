import { useState, useEffect, useCallback } from "react";

/* Router mínimo com a History API — sem dependências.
   Guarda o caminho atual e reage ao botão "voltar" do browser. */

export function useRota() {
  const [caminho, setCaminho] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setCaminho(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const irPara = useCallback((novo) => {
    if (novo === window.location.pathname) return;
    window.history.pushState({}, "", novo);
    setCaminho(novo);
    window.scrollTo(0, 0);
  }, []);

  const voltar = useCallback(() => {
    if (window.history.length > 1) window.history.back();
    else {
      window.history.pushState({}, "", "/");
      setCaminho("/");
    }
  }, []);

  return { caminho, irPara, voltar };
}

/* Link que não recarrega a página, mas continua a ser um <a>
   verdadeiro — o Google segue-o e dá para abrir em nova aba. */
export function Link({ para, irPara, children, ...resto }) {
  return (
    <a
      href={para}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        irPara(para);
      }}
      {...resto}
    >
      {children}
    </a>
  );
}
