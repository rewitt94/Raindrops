function ModulusMap(map) {

  return (n) => {
    values = ''
    for (key in map) {
      if (n % key == 0) {
        values += map[key]
      }
    }
    return values || n
  }

}

module.exports = ModulusMap
