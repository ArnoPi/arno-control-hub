
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  Settings as SettingsIcon,
  User,
  Shield,
  Database,
  Mail,
  Globe,
  Palette,
  Bell,
  Key,
  Save,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setSaving] = useState(false);

  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Arnotjuh.be Admin',
    siteDescription: 'Professional web development services',
    defaultLanguage: 'nl',
    timezone: 'Europe/Amsterdam',
    dateFormat: 'DD/MM/YYYY',
    currency: 'EUR'
  });

  // Profile Settings
  const [profileSettings, setProfileSettings] = useState({
    name: 'Arno Tjuh',
    email: 'admin@arnotjuh.be',
    phone: '+31 6 12345678',
    bio: 'Full-stack developer gespecialiseerd in moderne web technologieën.',
    avatar: '/placeholder.svg'
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: true,
    loginNotifications: true,
    sessionTimeout: 24,
    passwordExpiry: 90,
    allowedIPs: '192.168.1.0/24, 85.144.0.0/16'
  });

  // Email Settings
  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUser: 'noreply@arnotjuh.be',
    smtpPassword: '••••••••',
    smtpEncryption: 'tls',
    fromName: 'Arnotjuh.be',
    fromEmail: 'noreply@arnotjuh.be'
  });

  // Theme Settings
  const [themeSettings, setThemeSettings] = useState({
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    accentColor: '#F59E0B',
    darkMode: true,
    sidebarCollapsed: false,
    compactMode: false
  });

  const handleSave = async () => {
    setSaving(true);
    // Simuleer opslaan
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    console.log('Settings saved');
  };

  const tabs = [
    { id: 'general', label: 'Algemeen', icon: SettingsIcon },
    { id: 'profile', label: 'Profiel', icon: User },
    { id: 'security', label: 'Beveiliging', icon: Shield },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'theme', label: 'Thema', icon: Palette },
    { id: 'backup', label: 'Backup', icon: Database }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Instellingen</h1>
          <p className="text-slate-400">Beheer systeeminstellingen en voorkeuren</p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={isSaving}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isSaving ? (
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          Opslaan
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
          <CardContent className="p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* General Settings */}
          {activeTab === 'general' && (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Algemene Instellingen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="siteName" className="text-slate-300">Site Naam</Label>
                    <Input
                      id="siteName"
                      value={generalSettings.siteName}
                      onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="defaultLanguage" className="text-slate-300">Standaard Taal</Label>
                    <Select value={generalSettings.defaultLanguage} onValueChange={(value) => setGeneralSettings({...generalSettings, defaultLanguage: value})}>
                      <SelectTrigger className="bg-slate-700 border-slate-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nl">Nederlands</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timezone" className="text-slate-300">Tijdzone</Label>
                    <Select value={generalSettings.timezone} onValueChange={(value) => setGeneralSettings({...generalSettings, timezone: value})}>
                      <SelectTrigger className="bg-slate-700 border-slate-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Europe/Amsterdam">Europe/Amsterdam</SelectItem>
                        <SelectItem value="Europe/London">Europe/London</SelectItem>
                        <SelectItem value="America/New_York">America/New_York</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currency" className="text-slate-300">Valuta</Label>
                    <Select value={generalSettings.currency} onValueChange={(value) => setGeneralSettings({...generalSettings, currency: value})}>
                      <SelectTrigger className="bg-slate-700 border-slate-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EUR">Euro (€)</SelectItem>
                        <SelectItem value="USD">US Dollar ($)</SelectItem>
                        <SelectItem value="GBP">British Pound (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="siteDescription" className="text-slate-300">Site Beschrijving</Label>
                  <Textarea
                    id="siteDescription"
                    value={generalSettings.siteDescription}
                    onChange={(e) => setGeneralSettings({...generalSettings, siteDescription: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Profiel Instellingen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={profileSettings.avatar} />
                    <AvatarFallback className="bg-slate-600 text-slate-200 text-xl">
                      AT
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" className="border-slate-600">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Avatar
                    </Button>
                    <p className="text-xs text-slate-400">JPG, PNG of GIF. Max 2MB.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-300">Naam</Label>
                    <Input
                      id="name"
                      value={profileSettings.name}
                      onChange={(e) => setProfileSettings({...profileSettings, name: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileSettings.email}
                      onChange={(e) => setProfileSettings({...profileSettings, email: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-300">Telefoon</Label>
                    <Input
                      id="phone"
                      value={profileSettings.phone}
                      onChange={(e) => setProfileSettings({...profileSettings, phone: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio" className="text-slate-300">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileSettings.bio}
                    onChange={(e) => setProfileSettings({...profileSettings, bio: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Beveiligingsinstellingen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Twee-factor authenticatie</h4>
                      <p className="text-sm text-slate-400">Extra beveiliging voor je account</p>
                    </div>
                    <Switch
                      checked={securitySettings.twoFactorEnabled}
                      onCheckedChange={(checked) => setSecuritySettings({...securitySettings, twoFactorEnabled: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Login notificaties</h4>
                      <p className="text-sm text-slate-400">Email bij nieuwe login sessies</p>
                    </div>
                    <Switch
                      checked={securitySettings.loginNotifications}
                      onCheckedChange={(checked) => setSecuritySettings({...securitySettings, loginNotifications: checked})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sessionTimeout" className="text-slate-300">Sessie timeout (uren)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={securitySettings.sessionTimeout}
                      onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: parseInt(e.target.value)})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="passwordExpiry" className="text-slate-300">Wachtwoord verloop (dagen)</Label>
                    <Input
                      id="passwordExpiry"
                      type="number"
                      value={securitySettings.passwordExpiry}
                      onChange={(e) => setSecuritySettings({...securitySettings, passwordExpiry: parseInt(e.target.value)})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="allowedIPs" className="text-slate-300">Toegestane IP adressen</Label>
                  <Textarea
                    id="allowedIPs"
                    value={securitySettings.allowedIPs}
                    onChange={(e) => setSecuritySettings({...securitySettings, allowedIPs: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={3}
                    placeholder="192.168.1.0/24, 85.144.0.0/16"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Email Settings */}
          {activeTab === 'email' && (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Email Instellingen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="smtpHost" className="text-slate-300">SMTP Host</Label>
                    <Input
                      id="smtpHost"
                      value={emailSettings.smtpHost}
                      onChange={(e) => setEmailSettings({...emailSettings, smtpHost: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpPort" className="text-slate-300">SMTP Port</Label>
                    <Input
                      id="smtpPort"
                      type="number"
                      value={emailSettings.smtpPort}
                      onChange={(e) => setEmailSettings({...emailSettings, smtpPort: parseInt(e.target.value)})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpUser" className="text-slate-300">SMTP Gebruiker</Label>
                    <Input
                      id="smtpUser"
                      value={emailSettings.smtpUser}
                      onChange={(e) => setEmailSettings({...emailSettings, smtpUser: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtpPassword" className="text-slate-300">SMTP Wachtwoord</Label>
                    <Input
                      id="smtpPassword"
                      type="password"
                      value={emailSettings.smtpPassword}
                      onChange={(e) => setEmailSettings({...emailSettings, smtpPassword: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fromName" className="text-slate-300">Afzender Naam</Label>
                    <Input
                      id="fromName"
                      value={emailSettings.fromName}
                      onChange={(e) => setEmailSettings({...emailSettings, fromName: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fromEmail" className="text-slate-300">Afzender Email</Label>
                    <Input
                      id="fromEmail"
                      type="email"
                      value={emailSettings.fromEmail}
                      onChange={(e) => setEmailSettings({...emailSettings, fromEmail: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-slate-600">
                    Test Verbinding
                  </Button>
                  <Button variant="outline" className="border-slate-600">
                    Test Email Versturen
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Theme Settings */}
          {activeTab === 'theme' && (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Thema Instellingen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="primaryColor" className="text-slate-300">Primaire Kleur</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        id="primaryColor"
                        type="color"
                        value={themeSettings.primaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, primaryColor: e.target.value})}
                        className="w-12 h-10 p-1 bg-slate-700 border-slate-600"
                      />
                      <Input
                        value={themeSettings.primaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, primaryColor: e.target.value})}
                        className="flex-1 bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondaryColor" className="text-slate-300">Secundaire Kleur</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        id="secondaryColor"
                        type="color"
                        value={themeSettings.secondaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, secondaryColor: e.target.value})}
                        className="w-12 h-10 p-1 bg-slate-700 border-slate-600"
                      />
                      <Input
                        value={themeSettings.secondaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, secondaryColor: e.target.value})}
                        className="flex-1 bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="accentColor" className="text-slate-300">Accent Kleur</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        id="accentColor"
                        type="color"
                        value={themeSettings.accentColor}
                        onChange={(e) => setThemeSettings({...themeSettings, accentColor: e.target.value})}
                        className="w-12 h-10 p-1 bg-slate-700 border-slate-600"
                      />
                      <Input
                        value={themeSettings.accentColor}
                        onChange={(e) => setThemeSettings({...themeSettings, accentColor: e.target.value})}
                        className="flex-1 bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Dark Mode</h4>
                      <p className="text-sm text-slate-400">Gebruik donker thema</p>
                    </div>
                    <Switch
                      checked={themeSettings.darkMode}
                      onCheckedChange={(checked) => setThemeSettings({...themeSettings, darkMode: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Compact Mode</h4>
                      <p className="text-sm text-slate-400">Minder witruimte in interface</p>
                    </div>
                    <Switch
                      checked={themeSettings.compactMode}
                      onCheckedChange={(checked) => setThemeSettings({...themeSettings, compactMode: checked})}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Backup Settings */}
          {activeTab === 'backup' && (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Backup & Herstel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <h4 className="font-medium text-white">Database Backup</h4>
                    <p className="text-sm text-slate-400">
                      Maak een backup van alle database gegevens
                    </p>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Database Backup
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-white">Configuratie Backup</h4>
                    <p className="text-sm text-slate-400">
                      Exporteer alle systeeminstellingen
                    </p>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Configuratie Export
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-white">Automatische Backups</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-slate-300">Dagelijkse database backup</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-slate-300">Wekelijkse volledige backup</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-slate-300">Cloud backup opslag</span>
                      <Switch />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-white">Herstel Opties</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="border-slate-600">
                      <Upload className="h-4 w-4 mr-2" />
                      Database Herstel
                    </Button>
                    <Button variant="outline" className="border-slate-600">
                      <Upload className="h-4 w-4 mr-2" />
                      Configuratie Import
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
