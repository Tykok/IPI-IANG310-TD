export class Club {
  id: number;
  nom: string;
  ville: string;
  pays: string;
  stade: string;
  logo: string;
  isActive?: boolean;

  constructor(id: number, nom: string, ville: string, pays: string, stade: string, logo: string, isActive: boolean) {
    this.id = id;
    this.nom = nom;
    this.ville = ville;
    this.pays = pays;
    this.stade = stade;
    this.logo = logo;
    this.isActive = isActive;
  }
}
