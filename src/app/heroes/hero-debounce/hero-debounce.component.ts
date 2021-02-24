import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-debounce',
  templateUrl: './hero-debounce.component.html',
  styleUrls: ['./hero-debounce.component.css']
})
export class HeroDebounceComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('input', {static: true}) input: ElementRef<HTMLInputElement>;
  inputSubscription: Subscription;
  inputValue = '';
  debouncedValue = '';

  constructor(
    private readonly heroService: HeroService
  ) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inputChanged()
  }

  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe()
  }

  inputChanged(): void {
    this.inputSubscription = this.heroService.debounceTextOnChange(this.input.nativeElement, 1000)
      .subscribe((res: any) => {
        const target = res.target as HTMLInputElement
        console.log('res',res)
        console.log('res',target.value)
        this.debouncedValue = target.value;
      });
  }

}
