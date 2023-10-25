//@author hcadavid

apimock=(function(){

	var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"}];
	mockdata["maryweyland"]=[{author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}];

	 mockdata["Luisa"]=[{author:"Luisa","points":[{"x":150,"y":180},{"x":115,"y":120}],"name":"Plano1"},
	 {author:"Luisa","points":[{"x":250,"y":80},{"x":115,"y":-120}],"name":"Plano2"}];

	 mockdata["Karol"]=[{author:"Karol","points":[{"x":150,"y":150},{"x":150,"y":-150}],"name":"CasaAzul"},
	 {author:"Karol","points":[{"x":110,"y":0},{"x":150,"y":130},{"x":150,"y":0},{"x":110,"y":130}],"name":"CasaVerde"}]; 


	return {
		getBlueprintsByAuthor:function(author,callback){
			callback(
				author,
				mockdata[author]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);
		},

		putBlueprintsByNameAndAuthor:function(authname,bpname,points,callback){
			mockdata[authname].find(function(e){return e.name===bpname}).points=points;

			callback(
				points
			);
		}
	}	

})();

/*
Example of use:
var fun=function(list){
	console.info(list);
}

apimock.getBlueprintsByAuthor("johnconnor",fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/