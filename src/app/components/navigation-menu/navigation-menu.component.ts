import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ion-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent  implements OnInit {

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  constructor() { }

  ngOnInit() {}

}
