import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent implements OnInit {
  private resource: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    return this.route.params
      .map((params: Params) => {
      	return params['resource'];
      }).subscribe((resource) => this.resource = resource);
  }


}
