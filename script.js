let btnaction = document.querySelector(".btn");
let outputDiv = document.querySelector(".output");

btnaction.addEventListener("dblclick", () => {
    let attendclasses = prompt("Enter the attended classes");
    let totalclasses = prompt("Enter the Total classes");
    attendclasses = Number(attendclasses);
    totalclasses = Number(totalclasses);
    let currpercent = (attendclasses / totalclasses) * 100;
    let neededclasses = Math.ceil((0.75 * totalclasses - attendclasses) / 0.25);

    let message = `The current attendance percentage: <b>${currpercent.toFixed(2)}%</b><br>`;
    let bunkclasses=Math.ceil((attendclasses-0.75 * totalclasses)/0.75);
    if (currpercent < 75) {
        message += `You need to attend <b>${neededclasses}</b> more classes to reach 75% attendance.`;
    } else {
        message += `Your attendance is sufficient!<br>
        You can bunk <b>${bunkclasses}</b> classes`;
    }
    outputDiv.innerHTML = message;
});
