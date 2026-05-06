'use client'

import React from 'react'

const planos = [
  {
    nome: "Iniciante",
    preco: "0",
    desc: "Perfeito para testar o motor.",
    link: "https://buy.stripe.com/test_5kQfZj3Wt3th9w39sN3gk00",
    destaque: false
  },
  {
    nome: "Pro",
    preco: "49",
    desc: "Aceleração total para o seu negócio.",
    link: "https://buy.stripe.com/test_4gMfZjgJf4xldMj7kF3gk02",
    destaque: true
  },
  {
    nome: "Elite",
    preco: "99",
    desc: "Controlo absoluto do mercado.",
    link: "https://buy.stripe.com/test_4gMfZjgJf4xldMj7kF3gk02",
    destaque: false
  }
]

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-8 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-black text-blue-500 mb-2">Já Perdes</h1>
        <p className="text-xl text-gray-400">Software revelado para quem não tem tempo a perder.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {planos.map((plano) => (
          <div 
            key={plano.nome} 
            className={`p-8 rounded-3xl border ${
              plano.destaque ? 'border-blue-500 bg-blue-500/5 scale-105' : 'border-gray-800 bg-gray-900/50'
            } flex flex-col items-center transition-all hover:border-blue-400`}
          >
            <h3 className="text-2xl font-bold mb-4">{plano.nome}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-black">€{plano.preco}</span>
              <span className="text-gray-500 ml-1 text-sm">/mês</span>
            </div>
            <p className="text-gray-400 text-center mb-8 h-12">{plano.desc}</p>
            
            <a 
              href={plano.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 rounded-full font-bold transition-all text-center ${
                plano.destaque 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              Escolher Plano
            </a>
          </div>
        ))}
      </div>

      <footer className="text-center mt-20">
        <span className="inline-block px-4 py-1 rounded-full border border-green-500/50 text-green-500 text-xs font-bold uppercase tracking-widest">
          ● SISTEMA DE RENDA EXTRA ATIVO
        </span>
      </footer>
    </div>
  )
}