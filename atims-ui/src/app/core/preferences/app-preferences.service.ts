import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'en' | 'fr';
export type AppCurrency = 'ZAR' | 'EUR' | 'USD';

const french: Record<string, string> = {
  'Home': 'Accueil', 'Asset Management': 'Gestion des actifs', 'Operations': 'Opérations', 'System': 'Système',
  'Dashboard': 'Tableau de bord', 'Assets': 'Actifs', 'Incidents': 'Incidents', 'Tasks': 'Tâches', 'Reports': 'Rapports', 'Settings': 'Paramètres',
  'My Profile': 'Mon profil', 'Language': 'Langue', 'Currency': 'Devise', 'Logout': 'Déconnexion', 'English': 'Anglais', 'French': 'Français',
  'Task Management': 'Gestion des tâches', 'Review assigned work and pick up tasks from the global queue.': 'Consultez les tâches attribuées et prenez des tâches dans la file globale.',
  'My Tasks': 'Mes tâches', 'Global Queue': 'File globale', 'My Assigned Tasks': 'Mes tâches attribuées', 'Work assigned to your account.': 'Travail attribué à votre compte.',
  'Unassigned tasks available to pick up.': 'Tâches non attribuées disponibles.', 'Task': 'Tâche', 'Asset': 'Actif', 'Status': 'Statut', 'Due date': 'Date d’échéance', 'Actions': 'Actions',
  'No tasks assigned': 'Aucune tâche attribuée', 'Tasks assigned to you will appear here.': 'Les tâches qui vous sont attribuées apparaîtront ici.', 'Created': 'Créé', 'Assign to me': 'M’attribuer',
  'The queue is empty': 'La file est vide', 'Unassigned tasks will appear here.': 'Les tâches non attribuées apparaîtront ici.', 'View': 'Afficher', 'Pending': 'En attente', 'Assigned': 'Attribuée', 'In Progress': 'En cours', 'Completed': 'Terminée', 'Cancelled': 'Annulée',
  'Task and incident details': 'Détails de la tâche et de l’incident', 'Current status': 'Statut actuel', 'Select a milestone, then choose Update status.': 'Sélectionnez une étape, puis choisissez Mettre à jour le statut.',
  'Task status': 'Statut de la tâche', 'Completing an incident task requires repair verification.': 'La clôture d’une tâche d’incident nécessite la vérification de la réparation.', 'Update status': 'Mettre à jour le statut',
  'Verify repair & complete': 'Vérifier la réparation et terminer', 'Incident status': 'Statut de l’incident', 'Reported': 'Signalé', 'Reported by': 'Signalé par', 'Assigned to': 'Attribué à',
  'Reported location': 'Lieu du signalement', 'What needs attention': 'Intervention nécessaire', 'No incident notes were recorded.': 'Aucune note d’incident n’a été enregistrée.', 'Resolution notes': 'Notes de résolution',
  'Activity': 'Activité', 'Notes and updates for this incident.': 'Notes et mises à jour de cet incident.', 'Loading activity…': 'Chargement de l’activité…', 'No activity has been recorded yet.': 'Aucune activité enregistrée.',
  'Add a note': 'Ajouter une note', 'Add note': 'Ajouter une note', 'This task has no linked incident activity.': 'Cette tâche n’a aucune activité d’incident associée.', 'Repair notes': 'Notes de réparation', 'Repair location': 'Lieu de réparation', 'Cancel': 'Annuler',
  'Browse and search the asset register.': 'Parcourir et rechercher le registre des actifs.', 'selected': 'sélectionné(s)', 'Clear': 'Effacer', 'Search state ID or asset name': 'Rechercher par identifiant ou nom d’actif',
  'Add': 'Ajouter', 'Delete': 'Supprimer', 'Refresh': 'Actualiser', 'Log Incident': 'Signaler un incident', 'Export': 'Exporter', 'Print': 'Imprimer', 'State ID': 'Identifiant', 'Category': 'Catégorie',
  'Location': 'Emplacement', 'Current value': 'Valeur actuelle', 'No description': 'Aucune description', 'Uncategorised': 'Sans catégorie', 'No coordinates': 'Aucune coordonnée', 'Edit asset': 'Modifier l’actif', 'Delete asset': 'Supprimer l’actif',
  'Report Generator': 'Générateur de rapports', 'Reporting': 'Rapports', 'Generate and review reports across your assets and operations.': 'Générez et consultez des rapports sur vos actifs et opérations.',
  'Build a report': 'Créer un rapport', 'Choose the information and format you need.': 'Choisissez les informations et le format souhaités.', 'Report type': 'Type de rapport', 'Department / Ministry': 'Département / Ministère',
  'Asset status': 'Statut de l’actif', 'Output format': 'Format de sortie', 'Start date': 'Date de début', 'End date': 'Date de fin', 'Generate report': 'Générer le rapport', 'Generated reports': 'Rapports générés',
  'Your previously generated files.': 'Vos fichiers précédemment générés.', 'report': 'rapport', 'reports': 'rapports', 'Loading reports…': 'Chargement des rapports…', 'No reports yet': 'Aucun rapport pour le moment', 'Generated reports will appear here.': 'Les rapports générés apparaîtront ici.',
  'Profile': 'Profil', 'Update the details associated with your account.': 'Mettez à jour les informations de votre compte.', 'Username': 'Nom d’utilisateur', 'Email address': 'Adresse e-mail', 'Phone number': 'Numéro de téléphone', 'Save changes': 'Enregistrer les modifications',
  'Two-factor authentication': 'Authentification à deux facteurs', 'Add another layer of security to your account.': 'Ajoutez une couche de sécurité à votre compte.', 'Enabled': 'Activée', 'Disabled': 'Désactivée', 'Notifications': 'Notifications',
  'Choose how you want to receive updates.': 'Choisissez comment recevoir les mises à jour.', 'Email notifications': 'Notifications par e-mail', 'Receive updates in your inbox.': 'Recevez les mises à jour dans votre boîte de réception.',
  'Push notifications': 'Notifications push', 'Receive browser or device alerts.': 'Recevez des alertes dans le navigateur ou sur votre appareil.', 'SMS notifications': 'Notifications SMS', 'Receive important updates by text.': 'Recevez les mises à jour importantes par SMS.',
  'Preferences': 'Préférences', 'Set your application language.': 'Définissez la langue de l’application.', 'Sign out': 'Se déconnecter', 'End your current session on this device.': 'Terminez votre session sur cet appareil.', 'Log out': 'Déconnexion',
  'Review open incidents and verify completed repairs.': 'Consultez les incidents ouverts et vérifiez les réparations terminées.', 'open incidents': 'incidents ouverts', 'Include History': 'Inclure l’historique',
  'No incidents match your search.': 'Aucun incident ne correspond à votre recherche.', 'No incident history found.': 'Aucun historique d’incident trouvé.', 'There are no open incidents.': 'Aucun incident ouvert.', 'Verify repair': 'Vérifier la réparation', 'Review repair': 'Examiner la réparation',
  'Total Portfolio Value': 'Valeur totale du portefeuille', 'Operational Health Rate': 'Taux de santé opérationnelle', 'Capital at Risk': 'Capital à risque', 'Across all tracked assets': 'Pour l’ensemble des actifs suivis',
  'Assets currently in working condition': 'Actifs actuellement en état de fonctionnement', 'Estimated value of assets requiring attention': 'Valeur estimée des actifs nécessitant une intervention', 'Recent Inspections': 'Inspections récentes',
  'Map Placeholder': 'Emplacement de la carte', 'Leaflet map would be displayed here': 'La carte Leaflet s’afficherait ici', 'Pins to display:': 'Repères à afficher :', 'Functional': 'Fonctionnel', 'Out of Service': 'En panne', 'Decommissioned': 'Mis hors service', 'Unknown': 'Inconnu',
  'Type': 'Type', 'Date': 'Date', 'Loading inspections...': 'Chargement des inspections...', 'Open user menu': 'Ouvrir le menu utilisateur',
  'South African rand': 'Rand sud-africain', 'Euro': 'Euro', 'US dollar': 'Dollar américain'
};

@Injectable({ providedIn: 'root' })
export class AppPreferencesService {
  readonly language = signal<AppLanguage>(this.readLanguage());
  readonly currency = signal<AppCurrency>(this.readCurrency());

  constructor() {
    this.applyLanguage(this.language());
  }

  setLanguage(language: AppLanguage): void {
    this.language.set(language);
    localStorage.setItem('atims_language', language);
    this.applyLanguage(language);
  }

  setCurrency(currency: AppCurrency): void {
    this.currency.set(currency);
    localStorage.setItem('atims_currency', currency);
  }

  translate(value: string): string {
    return this.language() === 'fr' ? french[value] ?? value : value;
  }

  locale(): string {
    return this.language() === 'fr' ? 'fr-FR' : 'en-ZA';
  }

  private readLanguage(): AppLanguage {
    return localStorage.getItem('atims_language') === 'fr' ? 'fr' : 'en';
  }

  private readCurrency(): AppCurrency {
    const value = localStorage.getItem('atims_currency');
    return value === 'EUR' || value === 'USD' ? value : 'ZAR';
  }

  private applyLanguage(language: AppLanguage): void {
    document.documentElement.lang = language;
  }
}
