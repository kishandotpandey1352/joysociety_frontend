import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  constructor( private readonly ds:DataService) { }

  ngOnInit(): void {
  }
  allApiTopics(data:any){
    // this.ds.formUrlParam().subscribe
  }
}

