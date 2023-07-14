import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMP2_DIRECTIVES } from '../comp2';
import { COMP3_DIRECTIVES } from '../comp3';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule, COMP2_DIRECTIVES, COMP3_DIRECTIVES],
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

}
