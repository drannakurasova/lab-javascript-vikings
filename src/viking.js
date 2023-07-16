// Soldier
class Soldier {
constructor (healthPar, strengthPar) {
 this.health = healthPar;
 this.strength = strengthPar;
}

attack = () => {
   return this.strength; 
}



receiveDamage = (damage) => {
    this.health = this.health - damage;
    // tried if (damge === this.health[i]) { delete this.health[i]} but then no damage deleted nor return nothing
    }
  } 


// Viking
class Viking extends Soldier  {
    constructor (namePar, healthPar, strengthPar) {
     super (namePar);
        this.name = namePar;
        this.health = healthPar;
        this.strength = strengthPar;
    }

    receiveDamage = (damage) => {
        this.health = this.health - damage;
        if (this.health>0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    } 

    battleCry = () => { 
        return `Odin Owns You All!`
     }

}

// Saxon
class Saxon  extends Soldier {
    receiveDamage = (damage) => {
        this.health = this.health - damage;
        if (this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
  }   


// War
class War {}
