// It is a little past midnight in your cool developer crib, and you have just received a shaky text from your most faithful client.
// Somewhere in your client's hushed emojis, you make out a plea for an emergency favor.
// Your client is adrift, stuck in the Caribbean on his "modestly-sized" yacht,
// and a swashbucklin' galleon full of monkeys trained by Keith Richards himself is fast approaching.
// Your client needs a function ASAP to calculate the likelihood of victory so that he/she may make an informed decision.

// Through the power of Tinder, your client will create two smoking object profiles that you can swipe right on and pass along to your function.
// These objects represent your client's ("modestly-sized," he could not emphasize that enough) yacht and the wild barrel of sea-faring monkeys --
// they will look like the following:

//     {hit_points: 20,
//     orangutans: 5,
//     chimpanzees: 3,
//     gorillas: 4,
//     jane_reporting_4_duty: false},

//     {hit_points: 70,
//     crew: 35}
//

// You also found a sticky note under your rear end with the following power levels:

//      Orangutans: 5
//      Chimpanzees: 3
//      Gorillas: 9
//      Humans: 1

// The dynamics of your function, bite_me_monkey, boil down to this:

//      The highest numeric outcome of your functions' two competing sides determines the return string of bite_me_monkey

//          If the final primate number is greater than or equal to your client's final number,
//          then the primates win and the function should return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"

//          Otherwise, return "Everything's good, I'll see you in the office on Monday."

//      A third function parameter, terrain, determines which side has an advantage in the fight:

//          If the terrain bonus is "island," then the humans have 20 extra points on top of their fighting battle number.

//          If the terrain bonus is "sea," then the primates have 10 extra points on top of their fighting battle number.

//      The monkey object will contain a Boolean wildcard value, jane_reporting_4_duty, that confirms whether or not Jane Goodall is present. If so, then the primates'
//      fighting battle value is multiplied by half of however many chimpanzees are present (this is applied after any terrain bonus).

//      The two fighting battle numbers are calculated by:

//          Multiplying power levels against the headcount of the appropriate species.

//          Taking the aggregate of those products and adding it to the appropriate object's hit points value

//  --------------------------------------------------------------------------------------------------------\

//  Ok, this is an incredible story for a puzzle. Here we go:

// function biteMeMonkey (monkObj, clientObj, terrain) {
//   let humanBattleNumber = 0
//   let monkeyBattleNumber = 0

//   let clientCrew = clientObj.crew
//   let clientHP = clientObj.hitPoints

//   let monkHP = monkObj.hitPoints
//   let chimpanzees = monkObj.chimpanzees
//   let orangutans = monkObj.orangutans
//   let gorillas = monkObj.gorillas

//   let goodallFactor = monkObj.jane_reporting_4_duty ? 0.5 * chimpanzees : 1

//   humanBattleNumber += clientCrew + clientHP
//   monkeyBattleNumber += monkHP + chimpanzees * 3 + orangutans * 5 + gorillas * 9

//   switch (terrain) {
//     case 'island': {
//       humanBattleNumber += 20
//       break
//     }
//     case 'sea': {
//       monkeyBattleNumber += 10
//       break
//     }
//   }

//   monkeyBattleNumber *= goodallFactor

//   return monkeyBattleNumber > humanBattleNumber
//     ? "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
//     : "Everything's good, I'll see you in the office on Monday."
// }

// console.log(
//   biteMeMonkey(
//     {
//       hitPoints: 10,
//       orangutans: 0,
//       chimpanzees: 0,
//       gorillas: 0,
//       janeReporting4Duty: false
//     },
//     { hitPoints: 20, crew: 0 },
//     'sea'
//   )
// )

// Report:

// Passed 880 tests, failed at 125. Let's examine the failed tests to get a clue

// Failed with :
// Monkey object { hitPoints: 5,
//   orangutans: 1,
//   chimpanzees: 5,
//   gorillas: 9,
//   janeReporting4Duty: false }
// Client object { hitPoints: 17, crew: 85 }
// Terrain island

// Failed with :
// Monkey object { hitPoints: 3,
//   orangutans: 6,
//   chimpanzees: 5,
//   gorillas: 3,
//   janeReporting4Duty: false }
// Client object { hitPoints: 23, crew: 58 }
// Terrain island

// Failed with :
// Monkey object { hitPoints: 5,
//   orangutans: 1,
//   chimpanzees: 1,
//   gorillas: 4,
//   janeReporting4Duty: false }
// Client object { hitPoints: 16, crew: 21 }
// Terrain sea

// Failed with :
// Monkey object { hitPoints: 10,
//   orangutans: 4,
//   chimpanzees: 5,
//   gorillas: 9,
//   janeReporting4Duty: false }
// Client object { hitPoints: 25, crew: 95 }
// Terrain island

// Failed with :
// Monkey object { hitPoints: 9,
//   orangutans: 2,
//   chimpanzees: 5,
//   gorillas: 5,
//   janeReporting4Duty: false }
// Client object { hitPoints: 17, crew: 78 }
// Terrain sea

// In all cases, Jane Goodall is not present. Let's use our debugger and watch what's happening.

// Debugging Result: !!! if jane is not present, it returns undefined! This is because we were looking for a "jane_reporting_4_duty" key in our monkObj
// (as was described in the question) as opposed to the "janeReporting4Duty" key that is actually present in the monkObj. Furthermore, a case that both client
// and monkey power are equal should yield a result in "abandon ship" .

// Second attempt after fixes:

function biteMeMonkey(monkObj, clientObj, terrain) {
	let humanBattleNumber = 0;
	let monkeyBattleNumber = 0;

	// Deconstruction because oof

	let clientCrew = clientObj.crew;
	let clientHP = clientObj.hitPoints;

	let monkHP = monkObj.hitPoints;
	let chimpanzees = monkObj.chimpanzees;
	let orangutans = monkObj.orangutans;
	let gorillas = monkObj.gorillas;

	// if goodall is present, the goodallFactor becomes chimps/2, else it is 1

	let goodallFactor = monkObj.janeReporting4Duty ? 0.5 * chimpanzees : 1;

	humanBattleNumber += clientCrew + clientHP;
	monkeyBattleNumber +=
		monkHP + chimpanzees * 3 + orangutans * 5 + gorillas * 9;

	switch (terrain) {
		case "island": {
			humanBattleNumber += 20;
			break;
		}
		case "sea": {
			monkeyBattleNumber += 10;
			break;
		}
	}

	monkeyBattleNumber *= goodallFactor;

	return monkeyBattleNumber >= humanBattleNumber
		? "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
		: "Everything's good, I'll see you in the office on Monday.";
}

//  Result: 1005 tests passed, 0 failed! 1136ms runtime. Cool!
// My first instinct is that I could do some destructuring here - there's a lot of declarations going on.
