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
      let max = 10
      let min = 3
      // random number between 3 and 10 (if random num generated is 1 or 2, use min (which is 3), otherwise use the random num)
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.monsterHealth -= damage

      if (this.monsterHealth <= 0) {
        alert('You win!')
        this.gameIsRunning = false
        return // to exit out of the fxn and not run code below
      }

      max = 12
      min = 5
      damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.playerHealth -= damage

      if (this.playerHealth <= 0) {
        alert('You lose!')
        this.gameIsRunning = false
        return // to exit out of the fxn and not run code below
      }
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {}
  }
})
