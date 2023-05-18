import { Component, HostListener, OnInit } from '@angular/core';

interface IChatFilters {
	label: string,
	isActive: boolean
}

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit {
	chatFilter: IChatFilters[] = [
		{ label: "All", isActive: true },
		{ label: "Unread", isActive: false }
	];
	notificationNew: any[] = [];
	notificationOld: any[] = [];
	ddHeight!: number;
	selectedChatFilter: string = "All";

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.ddHeight = window.innerHeight - 150;
	}

	constructor() {
		this.onResize();
	}

	ngOnInit(): void {
		this.getNotifications();
		
	}

	filterChat(item: IChatFilters): void {
		this.selectedChatFilter = item.label;
		this.chatFilter.map((i: IChatFilters) => {
			if (i.label == item.label) {
				i.isActive = true
			} else {
				i.isActive = false;
			}
			return i;
		});
	}

	private getNotifications(): void {
		const notifications: any[] = [
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: true },
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: true },
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: true },
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: true },
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: false },
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: false },
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: false },
			{ img: "assets/img/avatar.png", name: "Joy added", description: "Meditate & Motivate", time: "5h ago", isNew: false },
		];
		this.notificationNew = notifications.filter(i => i.isNew);
		this.notificationOld = notifications.filter(i => !i.isNew);
	}

}
