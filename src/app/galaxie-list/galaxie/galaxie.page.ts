import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { GalaxieService } from 'src/app/galaxie.service';

@Component({
  selector: 'app-galaxie',
  templateUrl: './galaxie.page.html',
  styleUrls: ['./galaxie.page.scss'],
})
export class GalaxiePage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  modif: boolean = false;
  galaxie: any = null;
  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Galaxie: GalaxieService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Galaxie.get(id).subscribe((value: any) => {
      this.galaxie = value;
    });
  }

  async setModif(){
    if (!this.modif){
      const alert = await this.alertCtrl.create({
        header: 'Etes vous sûr de vouloir modifier?',
        subHeader: 'Vous rendrez possible la modification',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          },
          {
            text: 'Confirmer',
            handler : () => { this.modif = !this.modif;}
          }
        ]
      });

      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Galaxie.update(this.galaxie).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Galaxie.delete(id);
    this.router.navigate(['/tab/galaxies']);
  }

}
