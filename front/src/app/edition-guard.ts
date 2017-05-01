import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EditionsService } from './editions';


@Injectable()
export class EditionGuard implements CanActivate {

  constructor(private editionsService: EditionsService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const ok = this.editionsService.availableEditions.indexOf(route.params['edition']) !== -1;
    if (!ok)
      this.router.navigate(['/']);
    return ok;
  }

}
