$(function{


  var h = $('.longtext p')[0].scrollHeight;


  $('#more').click(function(e) {
      e.stopPropagation();
      $('.longtext p').animate({
          'height': h
      })
      $(this).css('display', 'none');
      $('#less').css('display', 'flex');
  });

  $('#less').click(function() {
      $('.longtext p').animate({
          'height': '136px'
      })
      $(this).css('display', 'none');
      $('#more').css('display', 'flex');
  })


})
