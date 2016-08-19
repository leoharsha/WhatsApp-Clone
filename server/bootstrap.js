import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function() {
  if (Meteor.users.find().count() != 0) return;

  Accounts.createUserWithPhone({
    phone: '+972501234567',
    profile: {
      name: 'Narendra Modi'
    }
  });

  Accounts.createUserWithPhone({
    phone: '+972501234568',
    profile: {
      name: 'Anjan Kasturi'
    }
  });

  Accounts.createUserWithPhone({
    phone: '+972501234569',
    profile: {
      name: 'Sreekar Prasad L'
    }
  });
Accounts.createUserWithPhone({
    phone: '+972501234569',
    profile: {
      name: 'Asshole No-1'
    }
  });
Accounts.createUserWithPhone({
    phone: '+972501234569',
    profile: {
      name: 'Leo Harsha :P'
    }
  });
});
