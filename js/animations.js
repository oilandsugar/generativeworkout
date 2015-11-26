jQuery(function($) {
  $(document).ready(function(){
    $('#toggle-exercice-list').click(function(){
      $(this).toggleClass('fa-list');
      $(this).toggleClass('fa-list');
      $('.all-exercices').slideToggle();
    });
    $( ".all-exercices" ).sortable();
    $( ".all-exercices" ).disableSelection();
  });
});
