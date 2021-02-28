import {Component, OnInit} from '@angular/core';
import {MissionService} from '../heroes/mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  astronauts = ['Love11', 'Swigert', 'Heise'];
  history: string[] = [];
  missions = [
    'Fly to the moon',
    'Fly to mars',
    'Fly to Vegas'
  ];
  nextMissionIndex = 0;

  constructor(
    private missionService: MissionService
  ) {
  }

  ngOnInit(): void {
    this.missionService.missionConfirmed.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  handleSubmit(): void {
    console.log('handleSUbmit from missoin', );
  }

  announce(): void {
    const mission = this.missions[this.nextMissionIndex++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMissionIndex >= this.missions.length) { this.nextMissionIndex = 0; }
  }

}
