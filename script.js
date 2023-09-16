window.onload = function (){
  // const primaryColor = '#fff';
  // const secondary = '#f0f0f6';
  // const yellowBG = '#ffb400';

  var menuHeader = document.getElementById("header-elem");
  var menuItems = menuHeader.getElementsByClassName("icon-container");
  for(var i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener("click",function (){
      var currentItem = document.getElementsByClassName("active");
      currentItem[0].className = currentItem[0].className.replace("active","");
      this.className = this.className + " active";
      let level = this.id;
      window.scrollBy({
        top: level * 500,
        left:0,
        behavior:"smooth"
      });
    });
  }
  
}