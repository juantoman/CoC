Template.groupsPage.helpers({
  groups: function() {
    return groups.find({classId: Session.get('classId')}, {sort: {createdOn: -1}});
  }
});
Template.groupsPage.events({
  'click .btn-delete': function(event) {
    event.preventDefault();
    Meteor.call('groupDelete', event.target.name);
  },
  'click .btn-xp': function(event) {
    event.preventDefault();
    Session.setPersistent('groupId', event.target.name);
  },
  'click .btn-hp': function(event) {
    event.preventDefault();
    Session.setPersistent('groupId', event.target.name);
  }
});