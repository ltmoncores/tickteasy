import React from 'react';
import Link from 'next/link';
import { Target, TrendingUp, Handshake, LockKeyhole, ArrowRight, Zap, Layers } from 'lucide-react';

export default function PitchDeck() {
  return (
    <main className="min-h-screen pb-20 bg-background text-foreground selection:bg-primary/30">
      {/* Navbar Minimalista */}
      <header className="glass sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="bg-gradient-to-tr from-primary to-secondary p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Layers className="text-black h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-white tracking-wider">ABSTRACT</span>
            <span className="font-medium text-xs text-primary tracking-[0.2em] uppercase">Tickets</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition tracking-widest hidden md:inline-block">VOLTAR AO PROTÓTIPO</Link>
          <a href="mailto:invest@tickteasy.com" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform">
            CONTATO
          </a>
        </div>
      </header>

      {/* Hero Centralizado */}
      <section className="max-w-5xl mx-auto px-6 mt-24 text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest mb-8">
          SEED ROUND ABERTO
        </div>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-white drop-shadow-lg mb-6 leading-tight">
          A Revolução do <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-accent">Ticketing</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
          Nós erradicamos o cambismo, empoderamos o organizador e abstraímos 100% da complexidade da Web3 para o usuário comum.
        </p>
      </section>

      {/* Seção: O Problema vs A Solução */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 text-red-400">O Paradigma Atual (Quebrado)</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <p><strong>Cambismo Desenfreado:</strong> Bots compram ingressos em massa. Fãs desistem ou pagam até 1000% a mais no mercado cinza.</p>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <p><strong>Perda de Receita (Organizador):</strong> Bilhões de dólares giram no mercado secundário (Viagogo, StubHub) sem que 1 centavo volte para o Evento.</p>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <p><strong>Fraudes de Código de Barras:</strong> Falsificação grotesca no acesso do evento, prejudicando a segurança.</p>
              </li>
            </ul>
          </div>

          <div className="glass-card p-10 relative overflow-hidden group border-primary/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 text-primary">A Solução Tickteasy</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p><strong>Teto de Preço (Price Ceiling):</strong> Smart Contracts bloqueiam revendas com preços abusivos. Um ingresso de R$300 não pode ser revendido por mais que R$360, por exemplo.</p>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p><strong>Royalties Perpétuos:</strong> O organizador lucra sempre que o ingresso muda de mãos de forma autorizada (EIP-2981).</p>
              </li>
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p><strong>Infra Web3 Invisível:</strong> Graças à Account Abstraction, fãs entram com o Google e compram por Pix. Zero Seed Phrases ou MetaMask.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Diferencial Tecnológico (Abstract) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black uppercase text-center mb-16 tracking-widest">
          A Motor Tecnológico: <span className="text-secondary">Abstract Chain</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
            <Zap className="w-12 h-12 text-secondary mb-6" />
            <h4 className="text-xl font-bold mb-3">ZK-Rollup L2</h4>
            <p className="text-sm text-white/50 break-words w-full">Construído no ecosystema ZK Stack da Matter Labs. Altíssima escala e segurança da Mainnet Ethereum com taxas frações de centavo.</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
            <LockKeyhole className="w-12 h-12 text-primary mb-6" />
            <h4 className="text-xl font-bold mb-3">Native AA (EIP-4337)</h4>
            <p className="text-sm text-white/50 break-words w-full">Abstract Global Wallet. Contas são contratos inteligentes. Login social com E-mail/Apple vira uma carteira segura e invisível no background.</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
            <Target className="w-12 h-12 text-accent mb-6" />
            <h4 className="text-xl font-bold mb-3">Gasless (Paymasters)</h4>
            <p className="text-sm text-white/50 break-words w-full">Os fãs não precisam comprar ETH em corretoras. Usamos Paymasters para patrocinar a taxa de gás (mint/transferência) no próprio app.</p>
          </div>
        </div>
      </section>

      {/* Modelo B2B Pitch */}
      <section className="max-w-4xl mx-auto px-6 py-12 mb-16">
        <div className="relative glass-card p-12 rounded-3xl overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0 opacity-80"></div>
          <div className="relative z-10">
            <TrendingUp className="w-16 h-16 text-white/20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 drop-shadow-md">Por Que B2B?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Nós somos a "Shopify" da bilheteria. Não competimos pela atenção do fã. Criamos a infraestrutura Branca (White-label) para que os maiores produtores de Festival do mundo tenham controle sobre o mercado primário e secundário de seus próprios eventos.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,136,255,0.4)]">
              Ver Protótipo Interativo <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
