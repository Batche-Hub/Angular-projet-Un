import { Component, OnInit, Input } from '@angular/core';
import { APPAREILS } from '../mock-appareils';


@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.css']
})
export class AppareilsComponent implements OnInit {

  appareils = APPAREILS;
  @Input() utilite = 'A définir';

constructor() { }

ngOnInit(): void {
  }

}
