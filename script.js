
const justFood = (pocetOsob) => {
    const cena = 300;
    return `Catering Just Food byl dodán pro ${pocetOsob} lidí za ${pocetOsob * cena} Kč`;
  }
  
  const yourMama = (pocetOsob) => {
    const cena = 800;
    return `Catering Your Mama byl dodán pro ${pocetOsob} lidí za ${pocetOsob * cena} Kč`;
  }
  
  const flavourHaven = (pocetOsob) => {
    const cena = 3000;
    return `Catering Flavour Haven byl dodán pro ${pocetOsob} lidí za ${pocetOsob * cena} Kč`;
  }
  
console.log(justFood(500))
console.log(yourMama(200))
console.log(flavourHaven(100))

const createEvent = (udalost, pocetOsob, catering) => {
  const nazevFirmy = catering(pocetOsob);
  return `Událost ${udalost} s ${nazevFirmy}`;
}
console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven))

