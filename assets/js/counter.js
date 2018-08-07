var Counter = (function () {
var inRunning = false;

  /* =================== private methods ================= */


  /* =================== public methods ================== */

  // counter elements
  /** @description Counter from 0 to data-count attribute value. sample: data-count="1000"  
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     */  
  function counter(selector, duration) {
    if (!inRunning){
      
      $(selector).each(function () {

          var $this = $(this),
            countTo = Number($this.attr('data-count'))+1;
  
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
  
            {
  
              duration: duration,
              easing: 'easeInOutCubic',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                setTimeout(() => {
                  //$this.text(this.countNum);
                }, 70);
                //alert('finished');
              }
  
            });
            inRunning = true;
      });
    }
  }

  /* =============== export public methods =============== */
  return {
    counter: counter
  };
}());