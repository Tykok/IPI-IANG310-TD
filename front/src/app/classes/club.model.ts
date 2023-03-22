export class ClubModel {
  id: number;
  name: string;
  city: string;
  country: string;
  stadium: string;
  logo: string;
  isActive?: boolean;

  constructor(id: number, name: string, city: string, country: string, stadium: string, logo: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.country = country;
    this.stadium = stadium;
    this.logo = logo;
    this.isActive = isActive;
  }
}
