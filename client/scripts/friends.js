//$('.username').click(Friends.toggleStatus);

var Friends = {  
  
  toggleStatus: function () {
    
    return true;  
  },

};


/*

sinon.spy(Friends, 'toggleStatus');
App.initialize();
MessagesView.renderMessage({
  username: 'Mel Brooks',
  text: 'I didn\'t get a harumph outa that guy.!',
  roomname: 'lobby'
});
$('#chats').find('.username').trigger('click');
expect(Friends.toggleStatus.called).to.be.true;
Friends.toggleStatus.restore();


Friends.toggleStatus.called is false

*/