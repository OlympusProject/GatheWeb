import { Component} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public openNav() {
  document.getElementById("mySidebar").style.width = "250px";
//document.getElementById("main").style.marginLeft = "250px";
}
public closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

}

