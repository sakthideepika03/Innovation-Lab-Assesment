// Function that accepts a callback
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        callback("Data loaded!");
    }, 1000);
}

function handleData(message) {
    console.log(message);
}
fetchData(handleData);

// Scope demo using var, let, const
var globalVar = "I'm global";

function checkScope() {
    var localVar = "I'm local";
    if (true) {
        let blockLet = "I'm block scoped";
        const blockConst = "I'm also block scoped";
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log(globalVar);
    console.log(localVar);
}
checkScope();

// Function with callback on task complete
function doTask(task, callback) {
    console.log(Doing (task));
    callback();
}

doTask("Wash dishes", () => {
    console.log("Task complete!");
});