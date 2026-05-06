"use client";

import React from 'react';

const plans = [
  {
    name: "Iniciante",
    price: "€0",
    description: "Perfeito para testar o motor.",
    buttonText: "Escolher Plano",
    // Se tiveres um link para o grátis ou quiseres deixar apenas visual
    link: "#", 
  },
  {
    name: "Pro",
    price: "€49",
    description: "Aceleração total para o seu negócio.",
    buttonText: "Escolher Plano",
    // Link do plano de 49 euros
    link: "https://buy.stripe.com/test_51TTs6IRvHtj4AtDepE...", 
  },
  {
    name: "Elite",
    price: "€99",
    description: "Controlo absoluto do mercado.",
    buttonText: "Escolher Plano",
    // NOVO LINK CORRIGIDO DE 99 EUROS
    link: "https://buy.stripe.com/test_eVq7sN78Fe7V6jR48t3gk01", 
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Já Perdes</h1>
        <p className="text-gray-400 mb-12 text-lg">
          Software revisado para quem não tem tempo a perder.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-gray-800 p-8 rounded-2xl bg-zinc-900 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <div className="text-4xl font-bold my-4">{plan.price}<span className="text-sm font-normal text-gray-500">/mês</span></div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
              </div>
              <a 
                href={plan.link}
                className="block w-full py-3 px-6 text-center rounded-lg font-medium transition-all bg-white text-black hover:bg-blue-600 hover:text-white"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-2 text-green-500 font-mono text-xs">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          SISTEMA DE RENDA EXTRA ATIVO
        </div>
      </div>
    </div>
  );
}