import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-app';

  onItemClicked() {
    window.alert('Item clicked');
  }

  showProfilePopup(user) {
    window.alert(`${user.name} - ${user.password}`)
  }
}
