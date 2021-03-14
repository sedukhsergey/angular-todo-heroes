import { Injectable } from '@angular/core';
import {Subject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MissionService {
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  // missionAnnounced = new Subject<string>();
  // missionConfirmed = new Subject<string>();

  missionAnnounced = this.missionAnnouncedSource.asObservable();
  missionConfirmed = this.missionConfirmedSource.asObservable();

  announceMission(mission: string): void {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string): void {
    this.missionConfirmedSource.next(astronaut);
  }

}
