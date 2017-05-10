// JavaScript Document
$(function(){
	
	var authors =[];
	
	

	
	function addAuthor(){
		var author = new Object();
		author.name = $("#txt_addAuthor").val();
		authors.push(author);
		
	};//end add author
	
	function updateAuthors(){
		//clear current author list
		$("#authorList").html("");
		
		//populate the author list
		for (var g = 0; g < authors.length; g++)
		{
			$("#authorList").append(
			"<li>" + authors[g].name + "</li>"
			);//end append
		};//end for
		$("#authorList").listview("refresh");
	};//end update authors
	
	
	$("#btnAddAuthor").on("click",addAuthor);
	$("#FavAuthors").on("pagebeforeshow",updateAuthors);

});author