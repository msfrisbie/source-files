Players = new Mongo.Collection("players");


Meteor.methods({
  addPlayer: function(player) {

    throw new Error("blah");

    Players.insert({
      name: player.name,
      number: player.number,
      position: player.position
    })
  }
})

if (Meteor.isClient) {
  Meteor.subscribe("player-subset");

  Template.body.helpers({
    players: function() {
      // Get all players in the db
      return Players.find({});
    }
  });

  Template.body.events({
    "submit #create-player": function(event) {
      event.preventDefault();

      Meteor.call("addPlayer", {
        name: event.target.name.value,
        number: event.target.number.value,
        position: event.target.position.value
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish("player-subset", function() {
    return Players.find({
      name: {
        $ne: "Aaron Rodgers"
      }
    });
  });
}
