import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { ApiRoutes } from '../../../../shared/routes/api.routes';


@Component({
	selector: 'app-profile-edit',
	templateUrl:'./badges.component.html',
	styleUrls: ["./badges.component.css"]
})
export class BadgesComponent implements OnInit {

	constructor(private ds: DataService) { }

    ngOnInit(): void {
		this.callBadges()
    }

	callBadges(){
		this.ds.get(ApiRoutes.getBadges).subscribe({
			next: (res: any) => {
				// if (!!res) {
				// 	this.tribeDetail = res;
				// 	this.form.patchValue(res);
				// 	if (this.tribeDetail.tribe_url) {
				// 		this.form.get('tribe_url')?.setValue(this.tribeDetail.tribe_url);
				// 		this.croppedImage = this.tribeDetail.tribe_url;
				// 	}
				// }
				console.log('res from badges : ',res)
			},
			error: (err: any) => console.log(err),
			complete: () => {}
		});
}
}
