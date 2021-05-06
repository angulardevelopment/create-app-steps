import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'step-app';

  @ViewChildren(ChildrenComponent) alerts: QueryList<ChildrenComponent>;
  alertsArr = [];

  ngAfterViewInit() {
    this.alertsArr = this.alerts.toArray();
    console.log(this.alertsArr)
  }

  showAlert(step) {
    this.alertsArr[step - 1].show(); // step 1 is alert index 0
  }
}
