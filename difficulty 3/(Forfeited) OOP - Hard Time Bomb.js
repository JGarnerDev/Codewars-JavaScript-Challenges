// A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer.
// There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);

var wireCode;
Bomb.CutTheWire(wireCode);

// Not sure how to do this one at all! Here's the best practices solution:

for (var name in this) {
	if (typeof this[name] === "number") {
		Bomb.CutTheWire(this[name]);
	}
}

// What's going on here?

// A loop is made that iterates over the values (name) of the Bomb object and if the type of the value pointed at has the type of "number",
// the CutTheWire method of bomb is applied to it.

// I'm not so sure how I feel about this puzzle - the instructions could have been a little more explicit in stating that the numeric ID is the
// only numeric value in the Bomb object. I think the second-place answer has a little more sense to it:

for (var i in global) if (i.indexOf("boom") === 0) Bomb.CutTheWire(global[i]);

// What's going on here?

// A loop is created to point at each index in global. If that corresponding element has "boom" at it's own first index, it is the target of the CutTheWire function.

// This seems like a better response because it is explicitly handling the global scope. Still, it seems odd that this answer relies on finding the "boom" string, which is
// not stated in the instructions. Ho-hum.
