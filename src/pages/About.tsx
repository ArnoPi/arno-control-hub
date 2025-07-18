import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Lightbulb, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ChatButton from '@/components/ChatButton';

const About = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: '8+ jaar ervaring in full-stack development',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Specialist in user-centered design',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in cloud infrastructuur',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emma Thompson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Agile methodologie specialist',
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Tevreden Klanten' },
    { icon: Award, number: '100+', label: 'Projecten Voltooid' },
    { icon: Target, number: '99%', label: 'Succesvol Opgeleverd' },
    { icon: Lightbulb, number: '5+', label: 'Jaar Ervaring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Over <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">TechSolutions</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Wij zijn een team van gepassioneerde developers en designers die bedrijven helpen 
            groeien door middel van innovatieve technologische oplossingen.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Onze Missie
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Wij geloven dat technologie de sleutel is tot succes in de moderne wereld. 
                Onze missie is om bedrijven van alle grootten te helpen hun digitale 
                transformatie te realiseren door middel van hoogwaardige, op maat gemaakte oplossingen.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Met ons ervaren team van developers, designers en strategen zorgen wij ervoor 
                dat elk project niet alleen technisch uitstekend is, maar ook perfect aansluit 
                bij uw bedrijfsdoelstellingen.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Ons Portfolio Bekijken
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Innovatie</h3>
                  <p className="text-slate-300">Altijd vooroplopen met de nieuwste technologieën</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Ons Toegewijde Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center group hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-slate-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.github} className="text-slate-400 hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-slate-400 hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-slate-400 hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Onze Waarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Kwaliteit</h3>
                <p className="text-slate-300">
                  Wij leveren alleen werk af waar we 100% achter staan. 
                  Kwaliteit staat altijd voorop in alles wat we doen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Samenwerking</h3>
                <p className="text-slate-300">
                  Transparantie en open communicatie vormen de basis van 
                  onze succesvolle klantrelaties.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovatie</h3>
                <p className="text-slate-300">
                  We blijven constant leren en ontwikkelen om de beste 
                  en meest moderne oplossingen te kunnen bieden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default About;