// JavaScript Document
$(function(){
	
	var series1 =[];
	
	

	
	function addSeries(){
		var series = new Object();
		series.name = $("#txt_addSeries").val();
		series1.push(series);
		
	};//end add series
	
	function updateSeries(){
		//clear current series list
		$("#seriesList").html("");
		
		//populate the series list
		for (var g = 0; g < series1.length; g++)
		{
			$("#seriesList").append(
			"<li>" + series1[g].name + "</li>"
			);//end append
		};//end for
		$("#seriesList").listview("refresh");
	};//end update series
	
	
	$("#btnAddSeries").on("click",addSeries);
	$("#FavSeries").on("pagebeforeshow",updateSeries);

});