import { Component } from '@angular/core';
import { ConfigService } from '../../../../shared/config/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {  
  urlLogo = ""
  constructor(    
    private readonly configService: ConfigService
  ) 
{        
  this.urlLogo = this.configService.getAppConfig().urlStorage + "assets/img/company/LogoCompleto.png";
}
}