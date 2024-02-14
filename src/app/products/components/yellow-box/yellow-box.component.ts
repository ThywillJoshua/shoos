import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow-box',
  templateUrl: 'yellow-box.component.html',
  styleUrls: ['./yellow-box.component.scss'],
})
export class YellowBoxComponent implements OnInit {
  @Input() color: string = 'yellow';

  constructor() {}

  ngOnInit() {}
}
