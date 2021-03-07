import { Pipe, PipeTransform } from '@angular/core';
import {FlyingHero} from './flying-heroes.component';

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: FlyingHero[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}
