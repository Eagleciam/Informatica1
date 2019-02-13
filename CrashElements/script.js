var firstElement = new ElementToMove("first_player", 0);
var secondElement = new ElementToMove("second_player", 41);
var dashboard = new Dashboard("dashboard");

document.onkeypress = function(e){
	if(e.key == "a" || e.key == "s" || e.key == "d" || e.key == "w"){
		if(e.key == "a"){
			firstElement.moveToLeft();
			checkIfCrashElements();
		}else if(e.key == "d"){
			firstElement.moveToRight();
			checkIfCrashElements();
		}else if(e.key == "w"){
			firstElement.moveToTop();
			checkIfCrashElements();
		}else if(e.key == "s"){
			firstElement.moveToBottom();
			checkIfCrashElements();
		}
	}
	
	if(e.key == "i" || e.key == "j" || e.key == "k" || e.key == "l"){
		if(e.key == "j"){
			secondElement.moveToLeft();
			checkIfCrashElements();
		}else if(e.key == "l"){
			secondElement.moveToRight();
			checkIfCrashElements();
		}else if(e.key == "i"){
			secondElement.moveToTop();
			checkIfCrashElements();
		}else if(e.key == "k"){
			secondElement.moveToBottom();
			checkIfCrashElements();
		}
	} 
};

function checkIfCrashElements(){
	if(
		( (firstElement.marginTop >= secondElement.marginTop && firstElement.marginTop <= (secondElement.marginTop + 40))
		|| (secondElement.marginTop >= firstElement.marginTop && secondElement.marginTop <= (firstElement.marginTop + 40)) )
		&&
		( (firstElement.marginLeft >= secondElement.marginLeft && firstElement.marginLeft <= (secondElement.marginLeft + 40))
		|| (secondElement.marginLeft >= firstElement.marginLeft && secondElement.marginLeft <= (firstElement.marginLeft + 40)) )
	){
		dashboard.setColor("#ffcfcf");
	}else{
		dashboard.setColor("#e4ffcf");
	}
	
}
	
function ElementToMove (id, marginTop) {
		
    this.data = document.getElementById(id);
	
	this.marginTop = marginTop;
	this.marginLeft = 0;
		
	this.moveToLeft = function() {
		if(this.marginLeft > 0){
			this.marginLeft --;
			this.data.style.marginLeft = this.marginLeft+"px";
		}
    };
	
	this.moveToRight = function() {
		if(this.marginLeft >= 0 && this.marginLeft < 460){
			this.marginLeft ++;
			this.data.style.marginLeft = this.marginLeft+"px";
		}
    };
	
	this.moveToTop = function() {
		if(this.marginTop > 0){
			this.marginTop --;
			this.data.style.marginTop = this.marginTop+"px";
		}
    };
	
	this.moveToBottom = function() {
		if(this.marginTop >= 0 && this.marginTop < 460){
			this.marginTop ++;
			this.data.style.marginTop = this.marginTop+"px";
		}
    };
	
    
}
 
function Dashboard(id){
	console.log(id);
	this.data = document.getElementById(id);
	console.log(this.data);
	
	this.setColor = function(color){
		this.data.style.background = color;
	}
	
}
 

