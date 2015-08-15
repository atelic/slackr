Meteor.startup(function () {

    Factory.define('message', Messages, {
        text: function(){
            return Fake.sentence();
        }
    });

    // Uncomment to clear messages before seeding
    Messages.remove({});

    // Seed some messages
    if (Messages.find().count() === 0) {
        _(10).times(function(n){
            Factory.create('message');
        });
    }
});
