// JavaScript Document
$(function(){
	
	var genres =[];
	
	

	
	function addGenre(){
		var genre = new Object();
		genre.name = $("#txt_addGenre").val();
		genres.push(genre);
		
	};//end add genre
	
	function updateGenres(){
		//clear current genre list
		$("#genreList").html("");
		
		//populate the genre list
		for (var g = 0; g < genres.length; g++)
		{
			$("#genreList").append(
			"<li>" + genres[g].name + "</li>"
			);//end append
		};//end for
		$("#genreList").listview("refresh");
	};//end update genres
	
	
	$("#btnAddGenre").on("click",addGenre);
	$("#FavGenres").on("pagebeforeshow",updateGenres);

});