import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table-songs',
  templateUrl: './table-songs.component.html',
  styleUrls: ['./table-songs.component.css']
})
export class TableSongsComponent implements OnInit {

  artistId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.artistId = id;
    });
  }

}
