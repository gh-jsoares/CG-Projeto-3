'use strict'

class Utils {
    static getAspect(inverted = false) {
        return inverted ? window.innerHeight / window.innerWidth : window.innerWidth / window.innerHeight
    }
}