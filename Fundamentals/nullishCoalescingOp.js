//The nullish coalescing operator is written as two question marks ??.

//it treats null and undefined. 
//we’ll say that a value is “defined” when it’s neither null nor undefined.

// The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b.

//basically, returns the first argument if it’s not null/undefined. Otherwise, the second one.
//eg:
let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

//another eg:
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

//if we do || in the above code then also we get the same output.
//so the basic difference b/w OR and ?? is:
// || returns the first truthy value.
// ?? returns the first defined value.

//eg:
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// precedence of ?? is same as ||
//it's forbidden to use ?? with && and || without any explicit parenthesses.

