import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { AuthService } from 'src/app/services/auth.service';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  public skills:Skill[]=[];
  public editSkill:Skill | undefined;
  public deleteSkill:Skill | undefined;
  userLogged = this.authService.getUserLogged;

  constructor(private skillService: SkillService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills():void{
    this.skillService.getSkill().subscribe({
      next:(Response:Skill[]) =>{
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, skill?:Skill):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle','modal');
    if(mode === 'add'){
      console.log("add");
      button.setAttribute('data-bs-target','#addSkillModal');
    } else if(mode === 'delete'){
      this.deleteSkill=skill;
      button.setAttribute('data-bs-target','#deleteSkillModal');
    }else if(mode === 'edit'){
      this.editSkill=skill;
      button.setAttribute('data-bs-target','#editSkillModal');
    }
    container?.appendChild(button);
    button.click();
}

  public onAddSkill(addForm:NgForm){
    console.log("entro");
    document.getElementById('add-skill-form')?.click();
    this.skillService.addSkill(addForm.value).subscribe({
      next: (response:Skill)=>{
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  
  public onUpdateSkill(skill:Skill){
    this.editSkill = skill;
    document.getElementById('add-skill-form')?.click();
    this.skillService.updateSkill(skill).subscribe({
      next: (response:Skill)=>{
        console.log(response);
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  
  public onDeleteSkill(idSkill:number):void{
    this.skillService.deleteSkill(idSkill).subscribe({
      next: (response:void)=>{
        console.log(response);
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
