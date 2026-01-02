import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ng-if',
  templateUrl: './tab-ng-if.component.html',
  styleUrls: ['./tab-ng-if.component.scss']
})
export class TabNgIfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   selectedSkill: string = 'html'


//  onSkillChange(skill: string){
//   this.selectedSkill = skill
//  }

silectedSkill: string = 'html'

changeSkill(skill: string){
  this.silectedSkill = skill
}

}
