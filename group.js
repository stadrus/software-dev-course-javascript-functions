

// // ============================================
// // 🧩 Task 1: 
// // ============================================


function generateBadge(name, role){
    return `Name: ${name}, Role: ${role}`
}
let testBob = generateBadge("Bob", "Director");
console.log(testBob);
let testSam = generateBadge ("Sam", "Assistant");
console.log(testSam);
let testCal = generateBadge("Cal", "Bro");
console.log(testCal);

// ============================================
// :jigsaw: Task 2: Calculate Event Cost
// ============================================

function calculateTotalCost(numAttendees, cost){
    let total = calculateSubTotal(numAttendees, cost);
    if (total > 100.0){
        return total * .9;
    }
    else{
        return total;
    }
}
function calculateSubTotal(numAttendees, cost){
    return numAttendees * cost;
}
let testJason = calculateTotalCost(110, 20);
console.log(testJason);
let testMelissa = calculateTotalCost(20, 200);
console.log(testMelissa);
let testDarcy = calculateTotalCost(20, 200);
console.log(testDarcy);
let test2Stacey = calculateTotalCost (50, 150);
console.log(test2Stacey);

// ============================================
// :jigsaw: Task 3: Validate Email
// ============================================

function validateEmail(email){
    return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@somewhere.com"));
console.log(validateEmail("not.valid"));
console.log(validateEmail("test1@testing.com"));
console.log(validateEmail("working@lc.com"));