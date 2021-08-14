import { ToastrService } from 'ngx-toastr';
import { ClaimService } from './../services/claim.service';
import { Component, OnInit } from '@angular/core';
import { Claim } from '../entity/claim';
import { Product } from '../entity/Product';
import { User } from '../entity/user';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  claim:Claim = new Claim();
  product:Product;
  commercial:User;
  constructor(private claimService: ClaimService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  addClaim() {
    this.claimService.addClaim(this.claim,2,1).subscribe(res => {
      console.log(res);
      if (res.idClaim)
        this.toastr.warning("We will contact you soon","OK", { positionClass: 'toast-x' });
      else
        this.toastr.info("Please be patient until we call you","", { positionClass: 'toast-x' });
    });
  }
}
