
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simuleer ticket aanmaken (later met Supabase)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock ticket ID
      const ticketId = `T-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      
      toast({
        title: "Ticket aangemaakt!",
        description: `Je aanvraag is ontvangen met ticket nummer: ${ticketId}. Je krijgt binnen 24 uur een reactie via e-mail.`,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of neem direct contact op.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Start je project</CardTitle>
        <CardDescription>
          Vertel me over je idee en ik neem binnen 24 uur contact met je op
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Naam *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Je volledige naam"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="je@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Bedrijf (optioneel)</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Naam van je bedrijf"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Onderwerp *</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Korte beschrijving van je project"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Bericht *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Vertel me meer over je project, doelen en wensen..."
              className="min-h-[120px]"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verzenden...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Verstuur aanvraag
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
