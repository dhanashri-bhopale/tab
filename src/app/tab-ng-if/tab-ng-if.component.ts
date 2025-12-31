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

  selectedSkill: string = 'html'

  skillArr =[
    {
    name: 'Javascript',
    des: 'JavaScript is a programming language used to create dynamic content for websites. It is a lightweight, cross-platform, and single-threaded programming language.'
  },
  {
    name: 'Angular',
    des: 'Angular is a framework for building client applications in HTML and TypeScript.'
  },
  {
    name: 'Bootstrap',
    des: 'Bootstrap is a free, open-source front-end framework used to build responsive, mobile-first websites quickly and easily.'
  },
  {
    name: 'HTML',
    des: ' HTML (HyperText Markup Language) is the standard language used to create and structure content on the web.'
  }
]

 onSkillChange(skill: string){
  this.selectedSkill = skill
 }

}
