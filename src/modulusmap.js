function ModulusMap(map) {

  return (n) => {
    for (key in map) {
      if (n % key == 0) {
        return map[key]
      }
    }
    return n
  }

}

module.exports = ModulusMap
