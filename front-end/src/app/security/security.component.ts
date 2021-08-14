import { Component, OnInit } from '@angular/core';
import { JwtCommercialService } from '../services/jwt-commercial.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

 

constructor(private service: JwtCommercialService) { }
authRequest: any = {'username': 'alidation', 'password': 'farautsch'};
ngOnInit(): void {
  this.getAccessToken(this.authRequest);
}
public getAccessToken(authRequest){
  const resp = this.service.generateToken(authRequest);
  resp.subscribe(data => console.log('token:' + data));

}
}