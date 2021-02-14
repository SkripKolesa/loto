export function makeShuffleRangeIterator() {
  let items = [...Array(90).keys()].map(i => i + 1);
  return {
    next: function () {
      if (items.length) {
        const idx = Math.floor(Math.random() * Math.floor(items.length))
        const value = items[idx];
        items.splice(idx, 1);
        return {
          value: value,
          done: false
        }
      }

      return {
        value: null,
        done: true
      }
    }
  };
}

