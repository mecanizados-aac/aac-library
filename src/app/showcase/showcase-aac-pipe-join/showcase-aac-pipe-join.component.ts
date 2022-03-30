import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-aac-pipe-join',
  templateUrl: './showcase-aac-pipe-join.component.html',
  styleUrls: ['./showcase-aac-pipe-join.component.css']
})
export class ShowcaseAacPipeJoinComponent implements OnInit {

  public valoresNulos = null;
  public valores: string[];

  constructor() {
    this.valores = ['1', '2', '3', '4', '5']
  }

  ngOnInit(): void {
  }

}
