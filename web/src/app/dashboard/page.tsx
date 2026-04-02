'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Plus, Calendar, MapPin, DollarSign, Percent, Loader2, CheckCircle2 } from 'lucide-react';

export default function Dashboard() {
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeploying(true);
    setLog(["Inicializando compilação do ERC-1155..."]);
    
    setTimeout(() => setLog(prev => [...prev, "Injetando parâmetros de Price Ceiling e Royalties..."]), 800);
    setTimeout(() => setLog(prev => [...prev, "Conectando ao Abstract Global Wallet..."]), 1600);
    setTimeout(() => setLog(prev => [...prev, "Assinando transação com Paymaster (Zero Gas Fee)..."]), 3000);
    setTimeout(() => setLog(prev => [...prev, "Deploying no L2 ZK-Rollup..."]), 4500);
    
    setTimeout(() => {
      setIsDeploying(false);
      setIsDeployed(true);
      setLog(prev => [...prev, "✅ Smart Contract Deployed: 0x8a39e...45f1b"]);
    }, 6000);
  };

  return (
    <main className="min-h-screen pb-20 bg-background text-foreground selection:bg-primary/30">
      {/* Navbar Minimalista */}
      <header className="glass sticky top-0 z-50 px-8 py-4 flex items-center justify-between border-b border-white/5">
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="bg-gradient-to-tr from-primary to-secondary p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Layers className="text-black h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-white tracking-wider">ABSTRACT</span>
            <span className="font-medium text-xs text-primary tracking-[0.2em] uppercase">Tickets | Backoffice</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-sm font-bold text-white/50 tracking-widest hidden md:inline-block">Organizador Logado: INVESTOR</span>
          <div className="h-10 w-10 bg-gradient-to-tr from-accent to-secondary rounded-full border-2 border-white/20"></div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Formulário de Criação (2/3 da tela) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-widest">Criar Novo Evento</h2>
          <p className="text-white/50 mb-8">Lance a infraestrutura Web3 do seu evento em poucos cliques.</p>

          <form onSubmit={handleDeploy} className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-bold tracking-wide text-white/70">Nome do Evento</label>
              <input 
                type="text" 
                required 
                defaultValue="ECLIPSE MUSIC FESTIVAL 2026"
                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-sm font-bold tracking-wide text-white/70">Data</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-4 text-white/30 w-5 h-5" />
                  <input type="text" defaultValue="15/11/2026" className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold tracking-wide text-white/70">Local</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-white/30 w-5 h-5" />
                  <input type="text" defaultValue="Allianz Parque, SP" className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
            </div>

            <hr className="border-white/5 my-8" />

            <h3 className="text-xl font-bold tracking-widest text-primary mb-4">REGRAS DO SMART CONTRACT</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-sm font-bold tracking-wide text-white/70">Preço de Venda Primária (R$)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-4 text-white/30 w-5 h-5" />
                  <input type="number" defaultValue={250} className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold tracking-wide text-white/70">Teto de Revenda Secundária (P/ Bloquear Cambista)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-4 text-white/30 w-5 h-5" />
                  <input type="number" defaultValue={300} className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold tracking-wide text-white/70">Royalties (Lucro Automático na Revenda)</label>
              <div className="relative">
                <Percent className="absolute left-4 top-4 text-white/30 w-5 h-5" />
                <input type="number" defaultValue={5} className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>

            {!isDeploying && !isDeployed && (
              <button type="submit" className="w-full mt-8 bg-gradient-to-r from-primary to-blue-500 text-black font-black py-4 rounded-xl text-lg hover:brightness-110 shadow-[0_0_15px_rgba(0,255,170,0.4)] transition-all flex items-center justify-center gap-3">
                <Plus className="w-6 h-6" /> DEPLOY EVENTO NA BLOCKCHAIN
              </button>
            )}
            
            {isDeploying && (
              <button disabled className="w-full mt-8 bg-white/10 text-white/50 font-black py-4 rounded-xl text-lg flex items-center justify-center gap-3 cursor-not-allowed">
                <Loader2 className="w-6 h-6 animate-spin" /> PROCESSANDO NO ABSTRACT CHAIN...
              </button>
            )}

            {isDeployed && (
              <Link href="/" className="w-full mt-8 bg-green-500/20 text-green-400 border border-green-500/50 font-black py-4 rounded-xl text-lg hover:bg-green-500/30 transition-all flex items-center justify-center gap-3">
                <CheckCircle2 className="w-6 h-6" /> EVENTO ATIVO! (VER NO APLICATIVO DO FÃ)
              </Link>
            )}
          </form>
        </div>

        {/* Console de Feedback (1/3 da tela) */}
        <div className="space-y-6">
           <h2 className="text-xl font-bold uppercase tracking-widest text-white/50 mb-2">Live Console</h2>
           <div className="glass-card font-mono text-xs p-6 h-[400px] bg-black border-white/10 overflow-hidden flex flex-col justify-end">
             <div className="space-y-3 opacity-80">
                <div className="text-white/40">{'>'} Waiting for organizer input...</div>
                {log.map((line, idx) => (
                  <div key={idx} className={`${line.includes('Deployed') ? 'text-primary font-bold' : 'text-blue-300'} flex items-start break-words`}>
                    <span className="mr-2">{'>'}</span> {line}
                  </div>
                ))}
             </div>
           </div>
           
           <div className="glass-card p-6 border-white/10">
              <h3 className="text-sm font-bold text-white mb-2 uppercase">Infra Estrutura</h3>
              <div className="flex justify-between items-center text-sm text-white/50 py-2 border-b border-white/5">
                <span>Account Abstraction:</span> <span className="text-primary font-bold">Ativo (AGW)</span>
              </div>
              <div className="flex justify-between items-center text-sm text-white/50 py-2 border-b border-white/5">
                <span>Paymaster (Taxa Zero):</span> <span className="text-primary font-bold">Patrocinado</span>
              </div>
              <div className="flex justify-between items-center text-sm text-white/50 py-2">
                <span>Contrato:</span> <span className="text-white">ERC-1155</span>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
