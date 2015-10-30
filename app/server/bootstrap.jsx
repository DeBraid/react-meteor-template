Meteor.startup(() => {

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "foo@bar.com",
            password: "foobar"
        });
    }

});