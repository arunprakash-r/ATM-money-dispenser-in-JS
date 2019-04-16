window.addEventListener('load', function() {
    let amount, totalNotes = 0;

    document.getElementById('button').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('notesList').innerHTML = '';
        amount = document.getElementById('amount').value;
        totalNotes = 0;
        if(amount === 0) {
            return;
        }
        calculate(amount);
    });

    const calculate = (amount) => {
        console.log(`Entered amount = ${amount}`);
        let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];


        for(let i=0; i<notes.length; i++) {
            notesCalc(notes[i]);
        }

        document.getElementById('totalNotes').innerHTML = totalNotes;
    }

    const notesCalc = (note) => {
        if (amount >= note) {
            let notesUsable = Math.trunc(amount / note);
            let listItem = `${notesUsable} notes of Rs.${note}`;
            let node = document.createElement("LI");
            let textnode = document.createTextNode(listItem);
            let nodeList = document.getElementById('notesList');
            node.appendChild(textnode);
            nodeList.insertBefore(node, nodeList.firstChild);
            // console.log(`Rs.${note} notes dispensed = ${notesUsable}`);
            amount = amount % note;
            console.log(`Remaining balance out of Rs.${note} = ${amount}`);
            totalNotes += notesUsable;
        }
    }
});