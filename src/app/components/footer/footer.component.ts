import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public aboutUrl: string = '/about'

  constructor(
    private uiService: UiService
  ) { }

  ngOnInit(): void {
  }

  inAboutPage(): boolean {
    return this.uiService.hasRoute(this.aboutUrl);
  }

}
