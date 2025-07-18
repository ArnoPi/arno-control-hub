import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users, Star, Code2, Rocket, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "@/components/ChatButton";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            Innovatieve Tech Oplossingen
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transformeer uw bedrijf met
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent block"> Cutting-Edge Tech</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Van websites tot mobile apps, van e-commerce tot AI integraties - 
            wij realiseren digitale oplossingen die uw bedrijf naar het volgende niveau tillen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Bekijk Onze Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Portfolio Bekijken
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400">Projecten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-slate-400">Tevredenheid</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-slate-400">Jaar Ervaring</div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Onze Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Volledige digitale oplossingen voor moderne bedrijven
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all group">
              <CardHeader>
                <Code2 className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Moderne, responsieve websites die converteren en uw merk versterken.
                </p>
                <Link to="/services" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  Meer info <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all group">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Native iOS & Android apps die uw gebruikers dagelijks willen gebruiken.
                </p>
                <Link to="/services" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  Meer info <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all group">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Krachtige webshops die verkopen verhogen en klanten behouden.
                </p>
                <Link to="/services" className="text-green-400 hover:text-green-300 inline-flex items-center">
                  Meer info <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Alle Services Bekijken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Waarom TechSolutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-400 mb-4 mx-auto" />
                <CardTitle className="text-white">Bewezen Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  5+ jaar ervaring met 50+ succesvolle projecten voor tevreden klanten.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <Rocket className="h-12 w-12 text-blue-400 mb-4 mx-auto" />
                <CardTitle className="text-white">Snelle Levering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Agile ontwikkeling zorgt voor snelle iteraties en tijdige oplevering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-400 mb-4 mx-auto" />
                <CardTitle className="text-white">Persoonlijke Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Direct contact met ons team en 24/7 ondersteuning voor al uw vragen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">
                    "Fantastische service en uitstekende ondersteuning. Precies wat we nodig hadden voor ons bedrijf."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mr-3"></div>
                    <div>
                      <p className="text-white font-medium">Jan van der Berg</p>
                      <p className="text-slate-400 text-sm">CEO, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Ons Platform. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
      
      {/* Chat Button */}
      <ChatButton />
    </div>
  );
};

export default Index;