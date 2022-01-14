import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalaxieService } from '../galaxie.service';

@Component({
  selector: 'app-galaxie-list',
  templateUrl: './galaxie-list.page.html',
  styleUrls: ['./galaxie-list.page.scss'],
})
export class GalaxieListPage implements OnInit {
  galaxies!: any;
  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Galaxie: GalaxieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.Galaxie.getAllGalaxie().subscribe((data: any) => {
      this.galaxies = data;
    });
  }


}
