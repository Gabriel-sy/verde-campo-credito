
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Zap, DollarSign, Users, Sun, Sprout, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato para apresentar as melhores soluções para sua propriedade.",
    });
    setFormData({ name: "", email: "", phone: "", property: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">EcoRural</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-green-700 hover:text-green-600 transition-colors">Início</a>
            <a href="#beneficios" className="text-green-700 hover:text-green-600 transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-green-700 hover:text-green-600 transition-colors">Como Funciona</a>
            <a href="#contato" className="text-green-700 hover:text-green-600 transition-colors">Contato</a>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">
            Quero Economizar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Transforme sua Propriedade com 
              <span className="text-green-400"> Energia Limpa</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed drop-shadow-md">
              Reduza em até 90% sua conta de energia e aumente a produtividade da sua terra com nosso microcrédito especializado para soluções energéticas sustentáveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 shadow-lg">
                <Zap className="mr-2 h-5 w-5" />
                Simular Economia
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 shadow-lg backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Até 90% de Economia</h3>
                <p className="text-green-100 drop-shadow-sm">Potencial de redução na sua conta de energia</p>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">100% Sustentável</h3>
                <p className="text-green-100 drop-shadow-sm">Energia limpa e renovável</p>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Crédito Facilitado</h3>
                <p className="text-green-100 drop-shadow-sm">Financiamento especial para agricultores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Por que Escolher a EcoRural?
            </h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Somos especialistas em levar eficiência energética para o campo, com soluções pensadas especialmente para o agricultor familiar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-3">Energia Solar Residencial</h3>
                <p className="text-green-600 mb-4">Painéis solares para sua casa, reduzindo drasticamente os custos com eletricidade.</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Instalação profissional</li>
                  <li>• Garantia de 25 anos</li>
                  <li>• Manutenção inclusa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Sprout className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-3">Sistemas de Irrigação</h3>
                <p className="text-green-600 mb-4">Bombeamento solar para irrigação eficiente e economia de água.</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Bombeamento automático</li>
                  <li>• Economia de água</li>
                  <li>• Aumento da produtividade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-3">Equipamentos Eficientes</h3>
                <p className="text-green-600 mb-4">Motores e equipamentos de alta eficiência energética para sua propriedade.</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Menor consumo de energia</li>
                  <li>• Maior durabilidade</li>
                  <li>• Retorno garantido</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-3">Microcrédito Facilitado</h3>
                <p className="text-green-600 mb-4">Parceria com bancos para oferecer as melhores condições de financiamento.</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Juros especiais</li>
                  <li>• Aprovação rápida</li>
                  <li>• Pagamento flexível</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-3">Assessoria Técnica</h3>
                <p className="text-green-600 mb-4">Acompanhamento completo desde o projeto até a instalação e manutenção.</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Consultoria gratuita</li>
                  <li>• Projeto personalizado</li>
                  <li>• Suporte contínuo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-3">Sustentabilidade</h3>
                <p className="text-green-600 mb-4">Contribua para um futuro mais verde e sustentável para sua família.</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Redução de CO₂</li>
                  <li>• Energia renovável</li>
                  <li>• Futuro sustentável</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Como Funciona? É Simples!
            </h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Em apenas 4 passos, você transforma sua propriedade e começa a economizar energia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Diagnóstico Gratuito</h3>
              <p className="text-green-600">
                Visitamos sua propriedade e analisamos o consumo de energia atual
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Projeto Personalizado</h3>
              <p className="text-green-600">
                Criamos uma solução sob medida para suas necessidades específicas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Financiamento Aprovado</h3>
              <p className="text-green-600">
                Cuidamos de toda a documentação e aprovação do microcrédito
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Instalação e Economia</h3>
              <p className="text-green-600">
                Instalamos o sistema e você começa a economizar imediatamente
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              Começar Meu Projeto
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Pronto para Transformar sua Propriedade?
            </h2>
            <p className="text-xl text-green-600">
              Entre em contato conosco e receba uma proposta personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-green-700">(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-green-700">contato@ecorural.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-green-700">São Paulo, SP - Atendemos todo o Brasil</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-green-800 mb-4">Horário de Atendimento</h4>
                <p className="text-green-700">Segunda a Sexta: 8h às 18h</p>
                <p className="text-green-700">Sábado: 8h às 12h</p>
              </div>
            </div>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Solicite uma Proposta</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Nome Completo
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-green-300 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-green-300 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-2">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-green-300 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-2">
                      Tamanho da Propriedade (hectares)
                    </label>
                    <Input
                      type="text"
                      value={formData.property}
                      onChange={(e) => handleInputChange('property', e.target.value)}
                      className="border-green-300 focus:border-green-500"
                      placeholder="Ex: 10 hectares"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-2">
                      Conte-nos sobre sua propriedade
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-green-300 focus:border-green-500"
                      placeholder="Tipo de cultura, consumo atual de energia, objetivos..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-3">
                    Solicitar Proposta Gratuita
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">EcoRural</span>
              </div>
              <p className="text-green-200">
                Transformando propriedades rurais com energia limpa e sustentável
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-green-200">
                <li>Energia Solar Residencial</li>
                <li>Sistemas de Irrigação</li>
                <li>Equipamentos Eficientes</li>
                <li>Microcrédito Rural</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-green-200">
                <li>Sobre Nós</li>
                <li>Nossa Missão</li>
                <li>Parcerias</li>
                <li>Certificações</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-green-200">
                <li>(11) 99999-9999</li>
                <li>contato@ecorural.com.br</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 EcoRural. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
