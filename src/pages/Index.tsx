import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ChatButton from "@/components/ChatButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welkom bij ons
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> Platform</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Ontdek de kracht van moderne technologie en ervaar een naadloze digitale ervaring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Aan de slag
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              Meer informatie
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Waarom voor ons kiezen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Veilig & Betrouwbaar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Enterprise-grade beveiliging en 99.9% uptime garantie voor uw gemoedsrust.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Razendsnelle Prestaties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Optimale prestaties met geavanceerde caching en CDN-technologie.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">24/7 Ondersteuning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Ons expert team staat altijd voor u klaar met persoonlijke ondersteuning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om te beginnen?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Sluit je aan bij duizenden tevreden gebruikers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Gratis proberen
              </Button>
              <Link to="/admin-login">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Admin Login
                </Button>
              </Link>
            </div>
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