import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MissionService} from '../../heroes/mission.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnDestroy, OnInit {
  @Input() astronaut: string;
  mission = '';
  noMissionTitle = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
  }

  confirm(): void {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnInit(): void {
    this.subscription = this.missionService.missionAnnounced.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
