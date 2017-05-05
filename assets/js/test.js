var $btn2s = $('.btn2').click(function() {
  if (this.id == 'all') {
    $('#filter > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#filter > div').not($el).hide();
  }
  $btn2s.removeClass('preselect');
  $(this).addClass('preselect');
})