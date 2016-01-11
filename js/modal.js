$(document).ready(function() {
 // alert("hi");
  $('.attButton').attr('disabled', 'disabled');
  $(".resetSearch").hide();
  $("#submitSearch").keypress(function() {  
    var startSearch, searchButton, acceptNY, acceptSF, ny, sanFrancisco, endEmpty, startEmpty, stateEmpty;
    // dictionary
    acceptNY = {
        ny : true,
        NY : true,
        "New York" : true
    };
    
    acceptSF = {
        SF : true,
        "San Francisco" : true,
        "san francisco" : true
    };

    ny = "ny";
    sanFrancisco = "sanFrancisco";
    submitSearch = $("#submitSearch").val();
    endEmpty= $("#endDate").val();
    startEmpty= $("#startDate").val();

    if (endEmpty.length === 0) {
       $(".notValid").show();
      return;     
      }

    if (startEmpty.length === 0) {     
        alert("please enter start");
         $(".notValid").show();
        return;
      }
    if (stateSearch.length === 0) {
        $(".notValid").show();
        return;
      }
    if (acceptNY[submitSearch.toLowerCase()]) {
        $(".sfpanel").remove();
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>The OutNYC<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>Park Central NY<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>Yotel New York<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>Hotel Indigo Brooklyn<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>The Standard Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $('.searchButton').hide();
        $(".resetSearch").show();
        $('.attButton').removeAttr('disabled');
        return; 
      }
     if (acceptsanFrancisco[submitSearch.toLowerCase()]) {
        $(".newyorkpanel").remove();
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>Good Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>Hotel Des Arts<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>Fairmont Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>Hotel North Beach<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>The Adagio<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
       $(".target").prepend("<div class='panel panel-info nypanel'> <div class='panel panel-body'>The Palace Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $('.searchButton').hide();
        $(".resetSearch").show();
        $('.attButton').removeAttr('disabled');
        return;
        }
  });
});
});