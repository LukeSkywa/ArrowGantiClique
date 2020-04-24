import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateEditProfileGuard implements CanDeactivate<EditProfileComponent> {
  canDeactivate(
    component: EditProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(component.editForm.status);

      if(component.editForm.dirty){
        if(component.formValues!=component.infoUtenteForm){
          
          alert(component.infoUtenteForm==component.formValues);

          let discardChanges=confirm('sicuro di non voler salvare le modifiche?');
          
          if(discardChanges){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        return true;
      }
        
        
  
    }


    
  }
  
}
