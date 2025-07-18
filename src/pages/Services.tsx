import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  BarChart3, 
  Shield, 
  Cog,
  ArrowRight,
  Check
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ChatButton from '@/components/ChatButton';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Moderne, responsieve websites die converteren',
      features: ['Responsive Design', 'SEO Geoptimaliseerd', 'Snelle Laadtijden', 'Content Management'],
      price: 'Vanaf €1.299',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native en cross-platform mobile applicaties',
      features: ['iOS & Android', 'Cross-platform', 'Push Notificaties', 'Offline Functionaliteit'],
      price: 'Vanaf €2.999',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete webshop oplossingen voor online verkoop',
      features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Multi-channel'],
      price: 'Vanaf €1.899',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data-driven dashboards en rapportage tools',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Automated Reports'],
      price: 'Vanaf €2.499',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Beveiligingsoplossingen en penetratietesten',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
      price: 'Vanaf €899',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Cog,
      title: 'API Development',
      description: 'Robuuste API\'s en integraties',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Third-party Integraties'],
      price: 'Vanaf €1.599',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Onze <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Van concept tot implementatie - wij leveren cutting-edge technologische oplossingen 
            die uw bedrijf naar het volgende niveau tillen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <p className="text-slate-300">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <Check className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                      Meer Info
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Ons Werkproces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', desc: 'We analyseren uw behoeften en doelstellingen' },
              { step: '02', title: 'Ontwerp', desc: 'Wij creëren een op maat gemaakt ontwerp' },
              { step: '03', title: 'Ontwikkeling', desc: 'Onze experts bouwen uw oplossing' },
              { step: '04', title: 'Launch', desc: 'We lanceren en ondersteunen uw project' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om te starten?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Laten we samen uw visie tot leven brengen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Gratis Consultatie
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Portfolio Bekijken
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default Services;