var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    this.$chats.prepend(`<div class='${message.username}' onclick='Friends.toggleStatus(this);'>${message.username}: ${message.text}</div>`);
    //$('div').click(Friends.toggleStatus());
    console.log(this);
  }
  
};


