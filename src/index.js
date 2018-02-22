/**
 * method takes target element and its host
 * @param  {HTMLElement} target element to keep in check
 * @param  {HTMLElement} host   container to keep target in, window if undefined
 * @return {Boolean}            true
 */
const correctCoordinates = (target, host = document.body) => {
  const isHTMLElement = target instanceof HTMLElement;

  if (!target || !isHTMLElement) {
    throw new Error('target element must be an HTMLElement');
  }

  const { position } = window.getComputedStyle(target);

  if (position === 'static' || position === 'sticky') {
    console.warn('Target element will not show poistional changes with current display rule');
  }

  const {
    left, right, top, bottom
  } = target.getBoundingClientRect();

  const {
    hostleft, hostright, hosttop, hostbottom
  } = host.getBoundingClientRect();

  const updatedCoordinates = {
    left, right, top, bottom
  };

  const outOfBoundsLeft = hostleft > left;
  const outOfBoundsRight = hostright < (left + width);
  const outOfBoundsTop = hosttop > top;
  const outOfBoundsBottom = hostbottom < top + height;

  if (outOfBoundsTop || outOfBoundsBottom) {
    const topDiff = top - hosttop;
    const bottomDiff = hostbottom - (top + height);
    let heightUpdate = 0;

    if (bottomDiff < 0 && topDiff < 0) {
      heightUpdate = Math.abs(bottomDiff + topDiff);
      updatedCoordinates.height -= heightUpdate;
    }

    switch (true) {
      case outOfBoundsTop && outOfBoundsBottom:
      case outOfBoundsTop: {
        updatedCoordinates.top -= topDiff;
        break;
      }
      case outOfBoundsBottom: {
        updatedCoordinates.top += bottomDiff + heightUpdate;
        break;
      }
      default: {
        break;
      }
    }
  }

  if (outOfBoundsLeft || outOfBoundsRight) {
    const rightDiff = hostright - (left + width);
    const leftDiff = hostleft - left;
    let widthUpdate = 0;

    if ((rightDiff - leftDiff) < 0) {
      // NOTE 1 pix additional here just for style (;
      widthUpdate = rightDiff - leftDiff - 1;
      updatedCoordinates.width += widthUpdate;
    }

    switch (true) {
      case outOfBoundsLeft && outOfBoundsRight:
      case outOfBoundsLeft: {
        updatedCoordinates.left += leftDiff;
        break;
      }
      case outOfBoundsRight: {
        updatedCoordinates.left += rightDiff - widthUpdate;
        break;
      }
      default: {
        break;
      }
    }
  }

  target.style.left = updatedCoordinates.left;
  target.style.top = updatedCoordinates.top;
  target.style.height = updatedCoordinates.height;
  target.style.width = updatedCoordinates.left;

  return true;
}

export default correctCoordinates;
