document.addEventListener("contextmenu", handleMessage, false);

function handleMessage(msgEvent){
	var sel = '';
	//set new variable

	sel = window.parent.getSelection()+'';
	//fill variable with current selection

	sel = sel.replace(/^\s+|\s+$/g,"");
	//for removing spaces
    
    safari.self.tab.setContextMenuEventUserInfo(msgEvent, sel);
    //set selection as variable user info data 
}