import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subscription} from 'rxjs';
import {HeroService} from '../../pages/heroes/hero.service';
import {DebounceService} from './debounce.service';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('input', {static: true}) input: ElementRef<HTMLInputElement>;
  inputSubscription: Subscription;
  debouncedValue = '';

  constructor(
    private readonly debounceService: DebounceService
  ) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inputChanged();
  }

  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe();
  }

  inputChanged(): void {
    this.inputSubscription = this.debounceService.debounceTextOnChange(this.input.nativeElement, 1000)
      .subscribe((res: Event) => {
        const target = res.target as HTMLInputElement;
        this.debouncedValue = target.value;
      });
  }

}
