var Counter = (function () {


  /* =================== private methods ================= */


  /* =================== public methods ================== */

  // counter elements
  /** @description Counter from 0 to data-count attribute value. sample: data-count="1000"  
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     */  
  function counter(selector, duration, distance) {
    $(selector).each(function () {

      var distance_of_object = $(this).position().top + distance;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > distance_of_object) {
        var $this = $(this),
          countTo = $this.attr('data-count');

        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: duration,
            easing: 'easeInOutQuint',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      }
    });
  }

  /* =============== export public methods =============== */
  return {
    counter: counter
  };
}());