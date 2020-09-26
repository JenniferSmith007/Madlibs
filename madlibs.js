function madLibs() {
  let playerChoice = prompt(`Would you like story1 or story2?`);
  if (playerChoice == "story1" && playerChoice !== "") {
    let adj = prompt(`Type an Adjective:`);
    let gp = prompt(`Type a General Place:`);
    let vn = prompt(`Type a Vehicle Name (plural):`);
    let game = prompt(`Type the Name of a Game:`);
    let pn = prompt(`Type a Plural Noun:`);
    let verbOne = prompt(`Type an "ing" Verb:`);
    let verbTwo = prompt(`Type another "ing" Verb:`);
    let fn = prompt(` Type a Food Name (plural):`);
    let sport = prompt(`Type the Name of a Sport:`);
    let verbThree = prompt(`Type another "ing" verb:`);
    let emo = prompt(`Type an Emotion:`);
    let num = prompt(`Type a Number:`);

    let story1 = alert(`A vacation is when you take a trip to some place ${adj} near an amazing ${gp}. A good vacation 
    place is one where you can ride ${vn} or play ${game} or go hunting for ${pn} .I like to spend my time ${verbOne} or ${verbTwo}.When parents
    go on vacation, they spend their time eating three ${fn} a day. Usually, fathers play ${sport}, and mothers spend their
    time ${verbThree} .Adults need vacations more than kids because adults are always very  ${emo} because they have
    to work ${num} hours every day all year just to afford their vacations!`);


  } else if (playerChoice == "story2" || playerChoice !== "") {
    let adj1 = prompt(`Type and Adjective`);
    let fp = prompt(`Type a Famous Place`);
    let pn1 = prompt(`Type a Plural Noun`);
    let adj2 = prompt(`Type another Adjective`);
    let food = prompt(`Type a food(plural)`);
    let emo1 = prompt(`Type an Emotion`);
    let verb1 = prompt(`Type a "ing" Verb`);
    let cp = prompt(`Type a Common Place`);
    let adj3 = prompt(` Type another Adjective`);
    let noun1 = prompt(`Type a Noun`);
    let adj4 = prompt(`Type another Adjective`);
    let an = prompt(`Type Another Noun`);
    let fm = prompt(`Type a Family Member`);
    let adj5 = prompt(`Type Another Adjective`);

    let story1 = alert(`Today we took a ${adj1} fieldtrip to ${fp} .They're famous for making ${pn1} and for 
      cooking ${adj2} ${food} .Eating all that food made me feel ${emo1} .Next we enjoyed the local
      tradition of ${verb1} in the middle of the ${cp}! finally, we went shopping for souviners.
      I bought a ${adj3} ${noun1} for myself, and a ${adj4} ${an} for my favorite ${fm} .I'll definitely
      never forget this ${adj5} trip`);

  } else {
    let empty = alert(`Dont leave empty`);
  }
}
madLibs();






