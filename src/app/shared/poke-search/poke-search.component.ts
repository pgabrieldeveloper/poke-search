import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  @Output() public searchEmiter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public searchEventEmiter(name:string){
    this.searchEmiter.emit(name);
  }

}
