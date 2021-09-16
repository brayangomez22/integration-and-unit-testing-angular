import { EventEmitter } from '@angular/core';

export class GamerTwo {
  hp: number;
  hpChange = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  takeDanio(danio: number) {
    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }

    this.hpChange.emit(this.hp);
  }
}
