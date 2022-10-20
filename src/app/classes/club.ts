export class Club {
  id: number;
  nom: string;
  ville: string;
  pays: string;
  stade: string;

  constructor(id: number, nom: string, ville: string, pays: string, stade: string) {
    this.id = id;
    this.nom = nom;
    this.ville = ville;
    this.pays = pays;
    this.stade = stade;
  }
}
