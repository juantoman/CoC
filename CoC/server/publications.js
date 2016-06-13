Meteor.publish('classes', function() {
  return classes.find();
});
Meteor.publish('students', function() {
  return students.find();
});
Meteor.publish('randomEvents', function() {
  return randomEvents.find();
});
Meteor.publish('behaviours', function() {
  return behaviours.find();
});Meteor.publish('behavioursLog', function() {
  return behavioursLog.find();
});