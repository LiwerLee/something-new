import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(
    private translate: TranslateService
  ) { }
  links = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'taskManager', route: '/task-manager' },
    { label: 'Contact', route: '/contact' }
  ];
}
