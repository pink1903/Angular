import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { VersionCheckService } from "./version-check.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  constructor(private versionCheckService: VersionCheckService) {
  }

  ngOnInit() {
    console.log('starts:');
    this.versionCheckService.initVersionCheck(environment.versionCheckURL)
  }
}
