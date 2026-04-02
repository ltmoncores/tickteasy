'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Ticket, ArrowLeft, CreditCard, Lock, Zap, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const simulateMoonpay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 4000);
  };

  return (
    <main className="min-h-screen pb-20 bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 relative z-10 glass-card p-10 mt-12">
            {/* Resumo do Pedido */}
            <div className="space-y-6 flex flex-col justify-between">
                <div>
                    <Link href="/" className="inline-flex items-center text-sm font-bold text-white/50 hover:text-white transition gap-2 mb-8 uppercase tracking-widest">
                       <ArrowLeft className="w-4 h-4" /> VOLTAR
                    </Link>

                    <span className="bg-primary/20 text-primary border border-primary/50 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                        NFT LOTE 1 (SMART CONTRACT ATIVO)
                    </span>
                    <h1 className="text-4xl font-black italic tracking-widest mt-6 uppercase">Eclipse Festival</h1>
                    <p className="text-white/60 mb-6 mt-2">15.Nov.2026 • Allianz Parque, SP</p>

                    <div className="bg-black/30 p-6 rounded-2xl border border-white/5 space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-white/5">
                            <span className="text-white/60">Pista Premium Web3</span>
                            <span className="font-bold">1x R$ 250,00</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-white/5 text-sm">
                            <span className="text-white/60">Gas Fee (Bancado pelo Produtor)</span>
                            <span className="text-primary font-bold">R$ 0,00</span>
                        </div>
                        <div className="flex justify-between items-center text-xl font-black pt-2">
                            <span>TOTAL</span>
                            <span className="text-primary">R$ 250,00 <span className="text-xs text-white/30 ml-2 font-medium">≈ 0.05 ETH</span></span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 items-center text-sm text-white/40">
                    <Lock className="w-4 h-4" /> Transação garantida via Abstract Smart Contracts.
                </div>
            </div>

            {/* Simulação Moonpay / AGW */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 relative flex flex-col justify-center">
                
                {step === 1 && (
                    <div className="space-y-8 animate-in fade-in">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 border border-white/10">
                                <CreditCard className="w-8 h-8 text-white/70" />
                            </div>
                            <h3 className="text-xl font-bold">Checkout Unificado</h3>
                            <p className="text-sm text-white/50 mt-2">Graças à abstração de contas, você pode depositar reais (Pix/Cartão). Nós convertemos para USDC e realizamos o mint automaticamente no topo da rede.</p>
                        </div>

                        <div className="space-y-4">
                            <button 
                              onClick={simulateMoonpay}
                              disabled={isProcessing}
                              className="w-full bg-slate-100 hover:bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition">
                                {isProcessing ? (
                                    <><Zap className="w-5 h-5 text-blue-500 animate-pulse" /> Abrindo Integração MoonPay...</>
                                ) : (
                                    <><CreditCard className="w-5 h-5" /> COMPRAR VIA CARTÃO (MOONPAY)</>
                                )}
                            </button>
                            <button 
                               className="w-full bg-[#32BCAD]/10 text-[#32BCAD] border border-[#32BCAD]/30 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#32BCAD]/20 transition">
                                <Zap className="w-5 h-5" /> COMPRAR VIA PIX
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="text-center space-y-6 animate-in slide-in-from-right fade-in duration-500">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 border border-green-500/50 mb-4 shadow-[0_0_30px_rgba(0,255,100,0.3)]">
                            <CheckCircle2 className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-wide text-primary">NFT Mintado!</h3>
                        <p className="text-white/60">Pagamento processado e o Ingresso ERC-1155 foi injetado na sua Abstract Global Wallet.</p>
                        
                        <div className="bg-black/30 p-4 rounded-lg border border-primary/20 mt-6 inline-block text-left text-sm font-mono text-primary/70">
                            Tx Hash:<br/>
                            <a href="#" className="underline hover:text-white">0x7f23a...91bC4</a>
                        </div>

                        <Link href="/" className="mt-8 bg-white/10 text-white font-bold py-4 rounded-xl flex w-full items-center justify-center hover:bg-white/20 transition">
                            VER MINHA CARTEIRA
                        </Link>
                    </div>
                )}
            </div>
        </div>
    </main>
  );
}
