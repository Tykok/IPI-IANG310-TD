export class ClubModel {
  constructor(
    public id: number = undefined,
    public name: string = undefined,
    public city: string = undefined,
    public country: string = undefined,
    public stadium: string = undefined,
    public logo: string = undefined,
    public isActive: boolean = true) {
  }

  public static fromJson(json: Object): ClubModel {
    // @ts-ignore
    return new ClubModel(
      json['id'],
      json['name'],
      json['city'],
      json['country'],
      json['stadium'],
      json['logo'],
      json['isActive']
    );
  }
}
