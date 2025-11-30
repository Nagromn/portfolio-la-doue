/* $('#container').fadeIn(4000); */

 

var $container = $('.projets').isotope({
itemSelector : '.projets li',
layoutMode :'fitRows'
})

  // bind filter button click
  $('.button-group').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
   /* filterValue = filterFns[ filterValue ] || filterValue; */
    $container.isotope({ filter: filterValue });
  });
  


  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  

