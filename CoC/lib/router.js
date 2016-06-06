Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('classes'); }
});

//Router.route('/', {name: 'llistaAlumnes'});
Router.route('/', {name: 'classesPage'});
Router.route('/studentsPage', {name: 'studentsPage'});
Router.route('/randomEventPage', {name: 'randomEventPage'});
Router.route('/randomEventsList', {name: 'randomEventsList'});

//Router.route('/submit', {name: 'alumneSubmit'});*/

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'alumnePage'});
Router.onBeforeAction(requireLogin, {only: 'alumneSubmit'});
