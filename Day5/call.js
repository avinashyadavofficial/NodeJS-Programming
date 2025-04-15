function showDetails(lang1, lang2) {
    console.log(`${this.name} knows ${lang1} and ${lang2}`);
  }
  
  const user = {
    name: "Avinash"
  };
  
  showDetails.call(user, "JavaScript", "Python");
  