// can call new Vue instance since imported Vue with cdn in the html file
new Vue({
  el: '#app',
  // on initial render:
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      console.log('started game!')
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function() {
      // random number between 3 and 10 (if random num generated is 1 or 2, use min (which is 3), otherwise use the random num)
      // let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= this.calculateDamage(3, 10)
      if (this.checkWin()) {
        return
      }
      // if (this.monsterHealth <= 0) {
      //   alert('You win!')
      //   this.gameIsRunning = false
      //   return // to exit out of the fxn and not run code below
      // }

      // damage = this.calculateDamage(5, 12)
      this.playerHealth -= this.calculateDamage(5, 12)
      if (this.checkWin()) {
        return
      }
      if (this.playerHealth <= 0) {
        alert('You lose!')
        this.gameIsRunning = false
      }
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {},
    calculateDamage: function(min, max) {
      Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) { // confirm() is built in JS fxn that shows yes/no to user
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true // have to return a truthy/falsey value here to check checkWin() condition in attack fxn
    } else if (this.playerHealth <= 0) {
        if (confirm('You died! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true // have to return a truthy/falsey value here to check checkWin() condition in attack fxn
    }
    return false // have to return a truthy/falsey value here to check checkWin() condition in attack fxn
  }
})
