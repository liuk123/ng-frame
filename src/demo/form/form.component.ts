import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, ValidationErrors } from '@angular/forms';
import { valideUtilsSrv } from 'src/app/shared/utils/valide-util.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  disabled: boolean = false;

  form:FormGroup = this.fb.group({
    username: [{value: '', disabled: this.disabled},[Validators.required,Validators.maxLength(5), this.valideUtilSrv.decimals(2)]],
    pwd: [{value: '', disabled: this.disabled}],
    confirmpwd: [{value: '', disabled: this.disabled}],
    sex: [{value: 0, disabled: this.disabled}],
    likes: this.fb.array([
      this.createlikes()
    ])
  },{validators: this.identityRevealedValidator})

  constructor(
    private fb: FormBuilder,
    private valideUtilSrv: valideUtilsSrv,
  ) { }

  ngOnInit() {
    console.log(this.likes)
  }

  private createlikes(){
    return this.fb.group({
      id: [''],
      brand: [{value: '', disabled: this.disabled}],
      descs: this.fb.array([
        this.fb.control('1'),
        this.fb.control('2')
      ])
    })
  }

  //兴趣
  get likes(){
    return this.form.get('likes') as FormArray
  }

  //添加兴趣
  addlikes(){
    this.likes.push(this.createlikes())
  }

  mklikes(n: number){
    let num = n-this.likes.controls.length
    if(num > 0){
      for(let i = 0; i < num; i++){
        this.likes.push(this.createlikes())
      }
    }else{
      for(let i = 0; i < -num; i++){
        this.likes.removeAt(0);
      }
    }
  }

  //删除兴趣
  rmlikes(i: number){
    this.likes.removeAt(i)
  }

  //清空表单
  resetform(){
    this.mklikes(1);
    this.form.reset();
  }

  onSubmit({value, valid, controls},ev:Event){
    console.log(value)
    console.log(valid)
    if(!valid) this.form.markAllAsTouched();
  }

  // 赋值
  // this.form.patchValue(ev.data);

  //校验 交叉
  identityRevealedValidator(control: FormGroup): ValidationErrors | null{
    const pwd = control.get('pwd');
    const confirmpwd = control.get('confirmpwd');
    return pwd && confirmpwd && pwd.value === confirmpwd.value ? null : { 'confirmpwd': true };
  };

  setdisabled(){
    this.disabled = !this.disabled;
  }
}
