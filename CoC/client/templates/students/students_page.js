Template.studentsPage.helpers({
  students: function() {
    return students.find({classId: Session.get('classId')}, {sort: {submitted: -1}});
  }
});
Template.studentsPage.events({
  'click .btn-delete': function(event) {
    event.preventDefault();
    Meteor.call('studentDelete', event.target.name);
  }
});
