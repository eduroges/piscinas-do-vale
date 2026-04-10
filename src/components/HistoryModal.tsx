
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react";

export function HistoryModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="group relative overflow-hidden border-accent/20 bg-accent/5 px-8 py-6 text-accent hover:bg-accent hover:text-white transition-all duration-500 animate-on-scroll delay-300"
        >
          <History className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
          Conheça nossa história
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] border-white/10 bg-primary/95 backdrop-blur-xl text-primary-foreground sm:rounded-2xl shadow-2xl overflow-hidden p-0">
        <div className="absolute inset-0 bg-mesh-gradient opacity-10 pointer-events-none" />
        <div className="relative p-8 md:p-12">
          <DialogHeader className="mb-8">
            <div className="w-12 h-[2px] bg-accent mb-4" />
            <DialogTitle className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Uma trajetória de <span className="text-gold-gradient">excelência</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 font-body text-lg font-light leading-relaxed text-primary-foreground/80">
            <p>
              Com mais de <strong>20 anos de experiência</strong>, a Piscinas do Vale é especializada na criação de piscinas de alto padrão, unindo design sofisticado, execução precisa e acabamento impecável.
            </p>
            <p>
              Atuando no <strong>Vale do Paraíba e Litoral Norte</strong>, desenvolve projetos exclusivos que valorizam o imóvel e transformam áreas de lazer em experiências únicas.
            </p>
            <p>
              Seu compromisso com a qualidade, a personalização e a excelência construtiva posiciona a empresa como referência para clientes que buscam mais do que uma piscina — buscam um projeto diferenciado.
            </p>
          </div>
          <div className="mt-12 flex justify-end">
             <div className="w-24 h-[1px] bg-accent/20" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
