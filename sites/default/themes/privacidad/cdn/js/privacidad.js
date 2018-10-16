(function ($) {
  $(document).ready(function(){
    $('.form-type-select').each(function(){
      var selectLabel = $(this).find('label').text();
      $(this).find('option[value="_none"]').text(selectLabel);
    });
  });
})(jQuery);
