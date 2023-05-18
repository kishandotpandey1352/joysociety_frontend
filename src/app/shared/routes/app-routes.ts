export class APP_ROUTES {
	public static root: string = '';
	public static slash: string = '/';
	public static previous: string = '../';
	public static add: string = 'add';
	public static edit : string = 'edit';

	//* Pre Auth layout */
	public static login: string = 'login';
	public static forgotPassword: string = 'forgot-password';
	public static signUp: string = 'signup';

	//* Post Auth Layoyt */
	public static dashboard: string = 'home';
	public static profileEdit: string = 'profile-edit';
	public static updateCreds: string = 'update-credentials';
	public static billing: string = 'billing-address';
	public static members: string = 'members';
	public static memberInvite: string = 'member-invite';
	public static memberMsg: string = 'message-all-member';
	public static downLoadMembers: string = 'download-member-list';
	public static memberCommunication: string = 'member-communication';
	public static invites: string = 'invites';
	public static workshops: string = 'workshop';
	public static events: string = 'event';
	public static tribes: string = 'tribe';
	public static plans: string = 'plans';
	public static subscriptions: string = 'subscriptions';
	public static eventDetail: string = 'event/detail';
	public static goal: string = 'goals';
	public static tru: string = 'tru-success-evaluation';
	public static truPart1: string = 'tru-success-evaluation/free';
	public static truPart1Report: string = 'tru-success-evaluation/free-report';
	public static truPart2: string = 'tru-success-evaluation/comprehensive';
	public static truPart2Report: string = 'tru-success-evaluation/comprehensive-report';
}