import {Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RulesEnum} from '../enums/rules.enum';

@Component({
  selector: 'app-rules-form',
  templateUrl: './rules-form.component.html',
  styleUrls: ['./rules-form.component.scss']
})
export class RulesFormComponent implements OnInit {

  public rulesForm: FormGroup;
  public rulesEnum = RulesEnum;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.rulesForm = new FormGroup({
      displayRules: new FormArray([]),
      exclusionRules: new FormArray([])
    });

  }

  public addRuleFormGroup(formName: string): void {
    this.getFormArray(formName).push(
      new FormGroup({
        type: new FormControl(''),
        url: new FormControl('', [Validators.required])
      })
    );
  }

  public onRuleDelete(index: number, formName: string): void {
    this.getFormArray(formName).removeAt(index);
  }

  public getFormArray(formName: string): FormArray {
    return (this.rulesForm.get(formName) as FormArray);
  }

  public isButtonEnabled(formName: string): boolean {
    const formArray = this.getFormArray(formName).controls;
    if (formArray.length) {
      return formArray.every((formGroup: FormGroup) => !formGroup.controls.url.errors);
    }
    return true;
  }
}
