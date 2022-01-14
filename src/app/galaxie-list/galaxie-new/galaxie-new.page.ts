import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GalaxieService } from 'src/app/galaxie.service';
import { Galaxie } from 'src/app/models/galaxie.model';

@Component({
  selector: 'app-galaxie-new',
  templateUrl: './galaxie-new.page.html',
  styleUrls: ['./galaxie-new.page.scss'],
})
export class GalaxieNewPage implements OnInit {

  public galaxie!: Galaxie;
  constructor(
    private Galaxie: GalaxieService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.galaxie = new Galaxie();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouvelle galaxie enregistrée',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
              this.router.navigate(['tab/galaxies']);
      }, 2000);
    });
  }

  add(){
    this.Galaxie.saveNewGalaxie(this.galaxie).subscribe(() => {
      this.galaxie = new Galaxie();
      this.presentToast();
    });
  }

}
