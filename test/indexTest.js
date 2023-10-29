require ( './helpers.js' );

describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger = document.getElementById('dodger')
  })

  it('moves the DODGER to the left', () => {
    let left = dodger.style.left
    left = parseInt(left)

    moveDodgerLeft()

    let newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    if (left > 0){
      expect(newPosition).to.be.below(left)
    } else {
      expect(newPosition).to.equal(left)
    }
  })
})

function moveDodgerRight() {
  let currentPosition = dodger.style.left;
  currentPosition = parseInt(currentPosition);

  if (currentPosition < 360) {
    dodger.style.left = `${currentPosition + 1}px`;
  }
}