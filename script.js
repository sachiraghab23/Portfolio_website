window.onload = function (){
  var menuHeader = document.getElementById("header-elem");
  var menuItems = menuHeader.getElementsByClassName("icon-container");
  for(var i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener("click",function (){
      var currentItem = document.getElementsByClassName("active");
      currentItem[0].className = currentItem[0].className.replace("active","");
      this.className = this.className.trim() + " active";
      let level = this.id;
      let topVal;
      const desktopScroll = [0,390,900,1300,1560];
      const tabScroll = [0,2190,2760,3230,3220];
      const mobileScroll = [0,2080,2820,3440,3638];
      if(window.innerWidth > 768){
        topVal = desktopScroll[level-1];
      }else if(window.innerWidth > 480){
        topVal = tabScroll[level-1];
      }else{
        topVal = mobileScroll[level-1];
      }
      window.scrollTo(0,topVal);
    });
  }  
}