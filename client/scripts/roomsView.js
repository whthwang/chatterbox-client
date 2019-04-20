var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //needs to initialize first before can render room
    this.$button.click(Rooms.add);  
  },

  renderRoom: function(roomName) {
    this.$select.append(`<div>${roomName}</div>`)
  }

};

// RoomsView.renderRoom('superLobby');
// expect($('#rooms select').children().length).to.equal(1);


/*

sinon.spy(Rooms, 'add');
var prompt = window.prompt;
window.prompt = sinon.stub().returns('testroom');
App.initialize();
$('#rooms').find('button').trigger('click');
expect(Rooms.add.called).to.be.true;
window.prompt = prompt;
Rooms.add.restore();

var Rooms = {
  add: function() {
      return true;
  }
};

*/