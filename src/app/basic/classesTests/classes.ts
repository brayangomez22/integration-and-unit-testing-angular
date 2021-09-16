export class Gamer {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  takeDanio(danio: number) {
    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }

    return this.hp;
  }
}
