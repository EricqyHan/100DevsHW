const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  damageAuroraHealth(x) {
    this.health -= x;
    return `Aurora's health has been damaged by ${x}. Aurora's current health is ${this.health}`;
  },
  raiseAuroraHealth(x) {
    this.health += x;
    return `Aurora health has been healed by ${x}. Current health is ${this.health}`;
  },
  learnNewSkill(x) {
    this.xp += x;
    return `Aurora learned a new skill. Aurora's xp has been raised by ${x}. Current xp is ${this.xp} `;
  },
};

console.log(aurora.damageAuroraHealth(20));
console.log(aurora.raiseAuroraHealth(10));

console.log(aurora.learnNewSkill(10));
