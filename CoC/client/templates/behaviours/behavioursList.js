Template.behavioursList.helpers({
  behaviourList: function() {
    return behaviours.find({classId: Session.get('classId')});
  }
});

Template.behavioursList.events({
  'submit form': function(event) {
    event.preventDefault();
    var behaviour = {
      classId: Session.get('classId'),
      behaviourDescription: $(event.target).find('[name=behaviourDescription]').val(),
      createdOn: new Date()
    };
    Meteor.call('behaviourInsert', behaviour);
  },
  'change .inputGroup': function(event) {
    event.preventDefault();
    if (event.currentTarget.value )
    {
      console.log("Hola")
      Meteor.call('behaviourUpdate', event.target.id, event.currentTarget.value);
    } else {
      Meteor.call('behaviourDelete',event.target.id);
    }
  }
});