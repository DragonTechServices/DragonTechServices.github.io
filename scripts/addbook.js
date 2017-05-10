// JavaScript Document
$(function(){
	
	var books =[];
	
	

	
	function addBook(){
		var book = new Object();
		book.name = $("#txt_addTitle").val();
		books.push(book);
		
	};//end add book
	
	function updateBooks(){
		//clear current book list
		$("#bookList").html("");
		
		//populate the book list
		for (var g = 0; g < books.length; g++)
		{
			$("#bookList").append(
			"<li>" + books[g].name + "</li>"
			);//end append
		};//end for
		$("#bookList").listview("refresh");
	};//end update books
	
	
	$("#btnAddBook").on("click",addBook);
	$("#FavBooks").on("pagebeforeshow",updateBooks);

});