import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rules-controls',
  templateUrl: './rules-controls.component.html',
  styleUrls: ['./rules-controls.component.scss']
})
export class RulesControlsComponent {
  @Input() public rules: AbstractControl[];
  @Output() public deleteRule: EventEmitter<number> = new EventEmitter<number>();
  public optionTypes: string[] = ['Contains', 'Exact Match'];

  constructor() {
  }


  public onDeleteRule(index: number): void {
    this.deleteRule.emit(index);
  }

  public changeType(event: Event, index): void {
    const selectValue = (event.target as HTMLSelectElement).value;
    (this.rules[index] as FormGroup).controls.type.setValue(selectValue);
  }

  public getUrlInputErrors(rule: AbstractControl): boolean {
    return !!(rule as FormGroup).controls.url.errors;
  }
}
