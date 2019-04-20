//$('.username').click(Friends.toggleStatus);

var Friends = {  
  friendStatus: false,
  toggleStatus: function (param) {
    if(!this.friendStatus){
      $(param).css('background-color', 'aquamarine');
      console.log('friend on');
      this.friendStatus = true;
      return true;
    } else{
      $(param).css('background-color', 'white');
      this.friendStatus = false;
      console.log('friend off');
      return false;
    } 
    
    //return true;
  },

};

