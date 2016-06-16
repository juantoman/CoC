Template.studentsPage.helpers({
  students: function() {
    return students.find({classId: Session.get('classId')}, {sort: {createdOn: -1}});
  }
});
Template.studentsPage.events({
  'click .btn-delete': function(event) {
    event.preventDefault();
    Meteor.call('studentDelete', event.target.name);
  },
  'click .btn-xp': function(event) {
    event.preventDefault();
    Session.setPersistent('studentId', event.target.name);
    //Meteor.call('studentXP', event.target.name, 100);
  },
  'click .btn-hp': function(event) {
    event.preventDefault();
    Session.setPersistent('studentId', event.target.name);
    //Meteor.call('studentHP', event.target.name, 10);
  }
});