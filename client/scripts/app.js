//

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    
    MessagesView.initialize();
    FormView.initialize();
    RoomsView.initialize();
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    //App.post();

  },
  
  post: function(callback = ()=>{}) {
    Parse.create(Messages
    , (data) => {
      console.log(data);
      
      callback();
    });
  },  

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data); //data is the big object with property result
      for(var i = data.results.length - 1; i >= 0; i--){
        MessagesView.renderMessage(data.results[i]);
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

  // App.initialize();
};
