

/*
Aufgabe:

<html><head></head><body><h1></h1><p></p></body></html>
	
---->

<html>
	<head>
	</head>
	<body>
		<h1>
        </h1>
		<p>
        </p>
	</body>
</html>

--> return : "\n"  
--> Tab: "\t"

Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = [  
                "html","head","head","body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","ul",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","ul",
                "body","html"
            ];

            // "h1","h1",
            // "p","p",
            // "ul","li","li","li","li","li","li","ul",
            // "p","p",



let stack = [];

// Modul: HTML-Synthese | Test
// output(getHTML());
function getHTML() {

    let htmlStr = "";
	let count = 0;
	let op = "";
	const newLine = "\n";

    for (let i = 0; i < tags.length; i++) {
        if (isOpenElement(tags[i])) { 
            count = stack.length -1; 
			op = "open";
        } else {
			count = stack.length; 
			op = "close";
		}

		htmlStr += getTabs(count) + getElement(tags[i],op) + newLine;

    }

    return htmlStr;
}

// Modul: Erstellen der Tabulatoren (1..n)
function getTabs(count) {
    let tabs ="";
    for (let i = 0; i < count; i++) {
        tabs += "\t";
    }
    return tabs;
}

// Modul: Entscheidung open/close
function isOpenElement(tag) {
    
    // tag liegt NICHT oben! --> neu, open
    let cond = (tag != stack[stack.length-1])  
    
    if (cond) {  // open
        stack.push(tag);
      //  output(stack);
        return true;
    } else {  // close
        stack.pop();
     //   output(stack);
        return false;
    }
     
}

// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
output(getElement(tags[1],"open"));
output(getElement(tags[1],"close"));
output(getElement(tags[1]));
function getElement(tag,op) {
    switch (op) {
        case "open": 
            return controls[1] + tag + controls[3];
        case "close":
            return controls[1] + tag + controls[2];
        default:
          return "#!?";
    }
}

// Modul: Ausgabe | Test
//output("hi");
function output(inputData) {
    console.log(inputData);
}
