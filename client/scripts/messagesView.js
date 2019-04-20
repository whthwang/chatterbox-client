var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    //this.$chats.append(`<div>${message.username}</div>`)
    this.$chats.append(`<div class='username'>${message.username}: ${message.text}</div>`);
    $('.username').click(Friends.toggleStatus);
  }
  
};


/*

var message = {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
};
MessagesView.renderMessage(message);
expect($('#chats').children().length).to.equal(1);

*/