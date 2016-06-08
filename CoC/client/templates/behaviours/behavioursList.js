Template.behavioursList.helpers({
  behaviourList: function() {
    if (Session.get('behaviourButton') == "btn-positive")
    {
      positiveBehaviour=true;
    } else {
      positiveBehaviour=false;
    }
    return behaviours.find({classId: Session.get('classId'), positive: positiveBehaviour });
  }
});

Template.behavioursList.events({
  'submit form': function(event) {
    event.preventDefault();
    if (Session.get('behaviourButton') == "btn-positive")
    {
      positiveBehaviour=true;
    } else {
      positiveBehaviour=false;
    }
    var behaviour = {
      classId: Session.get('classId'),
      behaviourDescription: $(event.target).find('[name=behaviourDescription]').val(),
      positive: positiveBehaviour,
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
  },
  'click button': function(event) {
    event.preventDefault();
    Session.set('behaviourButton', event.currentTarget.id);
    if (Session.get('behaviourButton') == "btn-positive")
    {
      $("#btn-positive").addClass("btn-primary").removeClass("btn-default");
      $("#btn-negative").addClass("btn-default").removeClass("btn-primary");
    } else {
      $("#btn-positive").addClass("btn-default").removeClass("btn-primary");
      $("#btn-negative").addClass("btn-primary").removeClass("btn-default");
    }
  }  
});