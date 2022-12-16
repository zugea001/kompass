let retning = 0
basic.forever(function () {
    retning = input.compassHeading()
    if (retning < 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (retning < 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (retning < 112.5) {
        basic.showArrow(ArrowNames.West)
    } else if (retning < 257.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (retning < 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (retning < 247.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (retning < 192.5) {
        basic.showArrow(ArrowNames.East)
    } else if (retning < 337.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
