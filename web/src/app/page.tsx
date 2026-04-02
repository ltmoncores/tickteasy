import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRightLeft, Ticket, Flame, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Header/Navbar */}
      <header className="glass sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-tr from-primary to-secondary p-2 rounded-xl">
            <Ticket className="text-black h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-white tracking-wider">ABSTRACT</span>
            <span className="font-medium text-xs text-primary tracking-[0.2em] uppercase">Tickets</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="/dashboard" className="text-xs text-secondary font-bold hover:text-white transition tracking-widest hidden md:inline-block">BACKOFFICE (CRIAR EVENTO)</a>
          <a href="/pitch" className="text-xs text-primary font-bold hover:text-white transition tracking-widest hidden md:inline-block">PITCH DECK</a>
          <span className="text-xs text-white/50 uppercase tracking-widest hidden lg:inline-block">Powered by Abstract Chain</span>
          <div className="flex items-center gap-4 border border-white/10 rounded-full p-1 pl-6 bg-black/50 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wide text-white/80">ENTRAR</span>
            <div className="flex gap-2">
              <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition flex flex-center items-center justify-center">G</button>
              <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition flex flex-center items-center justify-center">A</button>
              <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition flex flex-center items-center justify-center">✉</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Main Hero Banner */}
          <div className="lg:col-span-2 glass-card overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 z-0 opacity-50 mix-blend-overlay"></div>
            
            {/* Visual Abstractions (Simulating the Event Art) */}
            <div className="absolute inset-0 z-0 opacity-40 blur-3xl pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-screen animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent rounded-full mix-blend-screen animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative z-10 p-12 flex flex-col h-full justify-between items-center text-center">
              <div className="mt-8">
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-lg mb-2">
                  Eclipse
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-medium tracking-widest uppercase mb-12">
                  Music Festival 2026 <span className="text-primary">- São Paulo</span>
                </p>
                <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 max-w-2xl mx-auto">
                  Sua Entrada para o Futuro dos Eventos. Seguro. Rastreável. Sem Cambistas.
                </h2>
              </div>
              <button className="mt-12 bg-white text-black hover:bg-primary transition-colors hover:text-black font-extrabold px-10 py-4 rounded-full text-lg tracking-wider shadow-[0_0_30px_rgba(0,255,170,0.5)]">
                EXPLORAR EVENTOS
              </button>
            </div>
          </div>

          {/* Web3 Features Panel */}
          <div className="glass-card p-8 flex flex-col justify-center space-y-8 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 flex items-start gap-4 group">
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold tracking-wide mb-1">ANTICAMBISTA</h3>
                <p className="text-white/50 text-sm">Teto de preço no contrato inteligente</p>
              </div>
            </div>

            <div className="relative z-10 flex items-start gap-4 group">
              <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                <ArrowRightLeft className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold tracking-wide mb-1">REVENDA CONTROLADA</h3>
                <p className="text-white/50 text-sm">Mercado secundário unificado</p>
              </div>
            </div>

            <div className="relative z-10 flex items-start gap-4 group">
              <div className="bg-accent/10 p-3 rounded-lg border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <Ticket className="text-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold tracking-wide mb-1">INGRESSO NFT</h3>
                <p className="text-white/50 text-sm">Propriedade digital real (ERC-1155)</p>
              </div>
            </div>
            
            <div className="relative z-10 flex items-start gap-4 group">
              <div className="bg-orange-500/10 p-3 rounded-lg border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                <Flame className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold tracking-wide mb-1">TAXAS ZERO</h3>
                <p className="text-white/50 text-sm">Gás abstraído com Paymasters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Events Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold tracking-widest uppercase text-white/80">Eventos em Destaque</h2>
          <div className="flex gap-2">
            <button className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition"><ChevronLeft className="w-5 h-5 text-white/70"/></button>
            <button className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition"><ChevronRight className="w-5 h-5 text-white/70"/></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-transparent relative p-6">
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-primary">LOTE 1</div>
               <h3 className="text-3xl font-black italic tracking-widest text-white mt-8 uppercase">Eclipse</h3>
            </div>
            <div className="p-6 border-t border-white/5">
              <h4 className="font-bold text-lg text-white mb-2">ECLIPSE FESTIVAL | São Paulo</h4>
              <p className="text-sm text-white/50 mb-4">15.Nov.2026 • Allianz Parque</p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-white/40">A partir de</span>
                <div className="text-right">
                  <div className="font-bold text-xl text-primary">R$ 250</div>
                  <div className="text-xs text-white/30">≈ 0.05 ETH</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 glass text-white text-sm font-semibold py-3 rounded-lg hover:bg-white/5 transition">VER DETALHES</button>
                <Link href="/checkout" className="flex-1 block text-center bg-gradient-to-r from-secondary to-blue-500 text-white text-sm font-bold py-3 rounded-lg hover:brightness-110 shadow-[0_0_15px_rgba(0,100,255,0.4)] transition">COMPRAR AGORA</Link>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-accent/20 to-transparent relative p-6">
               <h3 className="text-3xl font-black italic tracking-widest text-white mt-8 uppercase">Cyber Laje</h3>
            </div>
            <div className="p-6 border-t border-white/5">
              <h4 className="font-bold text-lg text-white mb-2">CYBER LAJE | Rio de Janeiro</h4>
              <p className="text-sm text-white/50 mb-4">10.Dez.2026 • Fundição Progresso</p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-white/40">A partir de</span>
                <div className="text-right">
                  <div className="font-bold text-xl text-primary">R$ 180</div>
                  <div className="text-xs text-white/30">≈ 0.035 ETH</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 glass text-white text-sm font-semibold py-3 rounded-lg hover:bg-white/5 transition">VER DETALHES</button>
                <Link href="/checkout" className="flex-1 block text-center bg-gradient-to-r from-secondary to-blue-500 text-white text-sm font-bold py-3 rounded-lg hover:brightness-110 shadow-[0_0_15px_rgba(0,100,255,0.4)] transition">COMPRAR AGORA</Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-orange-500/20 to-transparent relative p-6">
               <div className="absolute top-4 right-4 bg-orange-500/20 backdrop-blur border border-orange-500/50 text-orange-400 px-3 py-1 rounded-full text-xs font-bold">SOLD OUT</div>
               <h3 className="text-3xl font-black italic tracking-widest text-white mt-8 uppercase">Web3 Summit</h3>
            </div>
            <div className="p-6 border-t border-white/5">
              <h4 className="font-bold text-lg text-white mb-2">LATAM WEB3 SUMMIT</h4>
              <p className="text-sm text-white/50 mb-4">02.Fev.2027 • SP Expo</p>
              <div className="flex justify-between items-center mb-6 opacity-50">
                <span className="text-sm text-white/40">A partir de</span>
                <div className="text-right">
                  <div className="font-bold text-xl text-white">R$ 450</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 glass text-white text-sm font-semibold py-3 rounded-lg hover:bg-white/5 transition">MERCADO SECUNDÁRIO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
