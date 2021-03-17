const digitalClock = {
  time: '11s',
  startTicking: function() {
    // increment
    return this.time 
  }.bind(this)
}

const result = digitalClock()

console.log(result)