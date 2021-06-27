import Ember from 'ember'

export default Ember.Controller.extend({
	actions: {
		userAchive(){
			this.set('hasAchived',true);
		},
		userNotArchived(){
			this.set('hasAchived',false);
		}
	}
})