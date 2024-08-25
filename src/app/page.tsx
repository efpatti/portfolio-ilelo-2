export default function Home() {
  const textos = [
    "bonitos",
    "que convertem",
    "otimizados",
    "modernos",
    "seguros",
  ];

  return (
    <main className="flex flex-col min-h-screen items-center justify-center w-full">
      <div className="bg-gradient-to-b from-slate-950 from-70% to-gray-900 h-screen md:h-96 w-full flex flex-col justify-center items-left p-10 text-slate-200">
        <h1 className="text-left text-3xl font-black">Gosto de criar sites</h1>
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
          <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="mr-3 block animate-text-slide text-left leading-tight [&_li]:block">
              {textos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <li aria-hidden="true">{textos[0]}</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="h-96">conteudo</div>
      <div className="h-96">contedo</div>
      <div className="h-96">contedo</div>
      <div className="h-96">contedo</div>
      <div className="h-96">contedo</div>
    </main>
  );
}
