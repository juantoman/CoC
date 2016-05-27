Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('classes'); }
});

//Router.route('/', {name: 'llistaAlumnes'});
Router.route('/', {name: 'classesPage'});
Router.route('/students', {name: 'studentsPage'});

/*name: 'alumnePage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'alumneSubmit'});*/

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
