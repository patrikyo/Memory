window.onload = function(){ 
	var spelplan = document.querySelector("#spelplan");
	var idArr = [];

	spelplan.addEventListener("click" , function(e){
		if(e.target.nodeName === "DIV" && e.target.getAttribute("id") !== "spelplan"){	
			var id = e.target.getAttribute("id");
			idArr.push(id);
			var ele = document.getElementById(id);
			var barnBild = ele.children[0];
			barnBild.className="aktiv";
		
			if(idArr.length > 1){
				var foregaendeBrickasId = idArr[idArr.length -2].toLowerCase();
				var nuvarandeId = e.target.getAttribute("id").toLowerCase();
					if(nuvarandeId !== foregaendeBrickasId){
						idArr= [];
						var nollstael = document.querySelectorAll(".memory img");
						nollstael.forEach(function(ele){
							ele.className="";
						});
					}else{
						idArr=[];
					}	
			}
		}
	});
}


