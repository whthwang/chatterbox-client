//View

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    //thing1: form input needs to be Messages.text
    //thing2: submit needs to take from Messages.text
    // Stop the browser from submitting the form
    event.preventDefault();
    //this is what will add to our form
    console.log(this.$form);
    Messages.text = $('#message').val();
    MessagesView.renderMessage(Messages);
    App.post();
    console.log('clicky cliky!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null; //will return true if anything is passed
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  } 

};