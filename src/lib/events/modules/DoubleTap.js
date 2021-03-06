/**
 * Trigger a function by double-tapping or double-clicking.
 * @method doubleTap
 * @memberof Grindstone
 * @param {function} callback
 * @returns {NodeList} collection
 * @example $('#selector').doubleTap(() => {});
 */

const doubleTap = function (callback) {
  let active;
  let interaction;

  this.each(function () {
    active = false;
    interaction = utils.createInteraction('touchend', 'click');
    $(this).on(interaction, () => {
      if (active) {
        callback();
        active = false;
      }
      active = true;
      setTimeout(() => {
        active = false;
      }, 350);
    });
  });
  return this;
};

$.fn.doubleTap = doubleTap;

// @if !NODE_ENV='production'
module.exports = doubleTap;
// @endif
