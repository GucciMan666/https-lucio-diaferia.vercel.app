import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Portfolio() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Obrigado por se inscrever, ${email}! Em breve você receberá novidades.`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f111a] to-[#1a1c24] text-white font-sans">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Lúcio Diaféria</h1>
        <p className="mt-4 text-xl md:text-2xl opacity-70">Baterista profissional desde os 8 anos — groove, técnica e atitude.</p>
      </header>

      <section className="max-w-4xl mx-auto px-4 mb-16">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Receba novidades</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20"
              />
              <Button onClick={handleSubscribe} className="bg-white text-black hover:bg-gray-200">
                Inscrever-se
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">Sobre Mim</h2>
        <p className="text-lg leading-relaxed opacity-80">
          Meu nome é Lúcio Diaféria. Comecei a tocar bateria aos 8 anos de idade, impulsionado por uma paixão precoce por ritmos, groove e intensidade sonora. Hoje, com 16 anos, sou baterista profissional com experiência em gravações de estúdio, apresentações ao vivo e diversos projetos musicais. Já toquei com bandas como The Canters, Xpermatozóides e Lactovivos, cada uma trazendo sua própria identidade e desafio musical.
          <br /><br />
          Me inspiro em artistas como Aquiles Priester, Giba Favery, e bandas como System of a Down, Tool e Foo Fighters. Também trabalho com gravação profissional em estúdio próprio, oferecendo serviços com níveis variados de produção — da gravação simples à masterização completa.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">Bandas</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">The Canters</h3>
            <p className="opacity-70">(2023 – atual) Banda de rock com trocadilho no nome — "os cantores" e "decanter de vinho".</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Xpermatozóides</h3>
            <p className="opacity-70">(2022 – atual) Rock cômico inspirado em Mamonas Assassinas, atualmente trocando de nome para algo mais direto.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Lactovivos</h3>
            <p className="opacity-70">(2021 – atual) Projeto com grande presença nas redes sociais, 88 mil seguidores no Instagram.</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/mnt/data/bf76a577-e640-48ab-9290-5999831a3612.jpeg" alt="Lúcio tocando bateria" className="rounded-xl shadow-md" />
          <img src="/mnt/data/IMG_2834.jpeg" alt="Cymbals e amplificador Marshall" className="rounded-xl shadow-md" />
          <img src="/mnt/data/IMG_4630.jpeg" alt="Lúcio com outro músico" className="rounded-xl shadow-md" />
        </div>
      </section>

      <footer className="text-center text-white/60 py-8 border-t border-white/10">
        © {new Date().getFullYear()} Lúcio Diaféria. Todos os direitos reservados.
      </footer>
    </div>
  );
}