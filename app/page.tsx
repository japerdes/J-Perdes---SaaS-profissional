export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-6xl font-black text-blue-500 mb-2">Já Perdes</h1>
      <p className="text-xl text-gray-400 mb-12 text-center">Software revisado para quem não tem tempo a perder.</p>

      {/* Tabela de Preços */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          { nome: "Iniciante", preco: "0", desc: "Perfeito para testar o motor." },
          { nome: "Pro", preco: "49", desc: "Aceleração total para o seu negócio.", destaque: true },
          { nome: "Elite", preco: "99", desc: "Controle absoluto do mercado." }
        ].map((plano, i) => (
          <div key={i} className={`p-8 rounded-2xl border ${plano.destaque ? 'border-blue-500 bg-blue-500/10' : 'border-gray-800 bg-gray-900/50'} flex flex-col items-center`}>
            <h3 className="text-2xl font-bold mb-4">{plano.nome}</h3>
            <div className="text-4xl font-black mb-4">€{plano.preco}<span className="text-lg text-gray-500 font-normal">/mês</span></div>
            <p className="text-gray-400 text-center mb-8">{plano.desc}</p>
            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plano.destaque ? 'bg-blue-500 hover:bg-blue-600' : 'bg-white text-black hover:bg-gray-200'}`}>
              Escolher Plano
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-sm text-gray-500 uppercase tracking-widest">Sistema de Renda Extra Ativo</span>
      </div>
    </div>
  );
}