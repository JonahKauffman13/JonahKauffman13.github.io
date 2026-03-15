// Global variables
let haveCup = false;
let cupIsFull = false;
let day = 0;
let minutes = 0;
let gameActive = true;
let concourseDiscovered = true;
let outsideBathroomDiscovered = false;
let waterDiscovered = false;
let boxDiscovered = false;
let libraryDiscovered = false;
let portableDiscovered = false;
let rm511Discovered = false;
let bathroomDiscovered = false; 


// Game functions
function check_time() {
    clear();
    minutes++;
    
    if (minutes >= 15) {
        tardy();
        return false;
    } else {
        drawMap();
        print("---");
        print("It is 12:" + (45+minutes) + ". The game starts in " + (15 - minutes) + " minutes");
        print("---");
        return true;
    }
}

function drawMap(){
    let map = ``;

     if(libraryDiscovered && concourseDiscovered && waterDiscovered){
        map += `
        ----------------    -------------    ------------------
        | Security Post|----| Concourse |----| Water Fountain |
        ----------------    -------------    ------------------
                           |`;
    }else if(libraryDiscovered && concourseDiscovered){
        map += `
        -----------------    -------------
        | Security Post |----| Concourse |
        -----------------    -------------
                           |`;
    }else if(waterDiscovered && concourseDiscovered){
        map += `
                       -------------    ------------------
                       | Concourse |----| Water Fountain |
                       -------------    ------------------
                           |`;
    }else{
        map += `
                       -------------
                       | Concourse |
                       -------------
                           |`;
    }
    map += `
                      -----------------    ------------
                      | Bathroom Area |----| Bathroom |
                      -----------------    ------------`; 
    
    if(portableDiscovered && rm511Discovered){
        map += `
                           |
        ---------------    ---------------  
        | Locker Room |----| Dark Hallway |
        ---------------    ---------------        `;
    }else if(portableDiscovered && rm511Discovered){
        map += `
                           |
        ---------------    ----------------
        | Locker Room |----| Dark Hallway |
        ---------------    ----------------`

    }else if(portableDiscovered){
        map += `
                           |
                     ----------------
                     | Dark Hallway |
                     ----------------`
    }

    printAscii(map);
}

function tardy() {
    print("You didn't make it to the locker room in time, so the Commanders lose :(");
    
    if (day < 5) {
        print("\nWould you like to try again next week? Say yes or no");
        function processInput(input){
            if (input.toLowerCase() === "yes") {
                day++;
                minutes = 0;
                haveCup = false;
                cupIsFull = false;
                start();
            } else if (input.toLowerCase() === "no") {
                print("\nok, better luck next time!");
                gameActive = false;
            } else {
                print("Please type 'yes' or 'no'");
            }
        }

        waitForInput(processInput);
    } else {
        gameActive = false;
    }
}

function start() {
    clear();
    print("Happy " + getDayName(day) + "!");
    printAscii(`
 ___   __   ___
 \\ \\  /\\ \\  / /
  \\ \\/ /\\ \\/ /
   \\/ /  \\/ /
    \\/    \\/`);
    
    print("\nYou've just arrived here at NorthWest Stadium. " +
            "It is currently 12:45pm, so " +
            "the game starts in 15 minutes");
    print("\nYou're standing outside in front of the stadium. Your first" +
            " objective is to go to the bathroom, which you have been holding the whole car ride and through the security line.");
    print("\nTo enter the stadium, type Start");
    
    function processInput(input){
        if (input.toLowerCase() === "start") {
            concourse();
        } else {
            print("\nThat's not an option. Are you trying to miss the game? " +
                "You  paid so much for your tickets.");
            print("To enter the stadium, type Start");
        }
    }

    waitForInput(processInput);
}

function getDayName(dayNum) {
    const days = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
    return days[dayNum] || 'Unknown';
}


function water() {
    waterDiscovered = true;
    if (!check_time()) return;
    
    print("\nYou drink some water. And you're a good fan so you" +
        " take a reasonable time to drink");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\tconcourse\n\tstay here");
    
    function processInput(input){
        if (input.toLowerCase() === "concourse") {
            concourse();
        } else if (input.toLowerCase() === "stay here") {
            water();
        } else {
            stayHere();
            waitThenCall(water);
        }
    }

    waitForInput(processInput);
}

function portable() {
    portableDiscovered = true;
    if (!check_time()) return;
    
    print('You are <span class="location">in the dark hall</span>. ' +
        "A toddler commanders fan runs past you, " +
        "you see all the cool commanders posters on the walls! ");
    print("\nWhere would you like to go next? Say one of these choices:" +
        "\n\tmysterious window\n\toutside of bathroom");
    
    function processInput(input){
        if (input.toLowerCase() === "mysterious window") {
            rm511();
        } else if (input.toLowerCase() === "outside of bathroom") {
            outsideBathroom();
        } else {
            stayHere();
            waitThenCall(portable);
        }
    }

    waitForInput(processInput);
}

function outsideBathroom() {
    outsideBathroomDiscovered = true;
    if (!check_time()) return;
    
    print('You are <span class="location">in front of the bathroom</span>. ' + 
        "People keep coming in, so there's not much to do " +
        "here." );
    print("\nWhere would you like to go next? Say one of these choices:" +
        "\n\tconcourse\n\tportable\n\tMcDonalds");
    
    function processInput(input){
        if (input.toLowerCase() === "concourse") {
            concourse();
        } else if (input.toLowerCase() === "portable") {
            portable();
        } else if (input.toLowerCase() === "mcdonalds") {
            mcdonalds();
        } else {
            stayHere();
            waitThenCall(outsideBathroom);
        }
    }

    waitForInput(processInput);
}
function rm511() {
    rm511Discovered = true;
    if (!check_time()) return;

    if (!haveCup) {
        printAscii(`

            _____|~~\\_____      _____________
        _-~               \\    |    \\
        _-    | )     \\    |__/   \\   \\
        _-         )   |   |  |     \\  \\
        _-    | )     /    |--|      |  |
    __-_______________ /__/_______|  |_________
    (                |----         |  |
    \`---------------'--\\\\\\\\      .\`--'
                                 \`||||
`);
        
        print("\n Through the window, Jayden Daniels is crying - we can't win the game if "+
            "the quarterback is crying!");
        print("\nYou notice a key card scanner next to the locker room, "+
            "so you need to get a key card");
        print("\nYou know that the security guards carry key cards, so you'll "+
            "have to find a security guard, take the key card, and bring it back... "+
            "all before the game starts!");
        print("\nPress enter to go back out to the concourses");
        
        function processInput(input){
            haveCup = true;
            outsideBathroom();
        }

        waitForInput(processInput);
    } else if (haveCup && !cupIsFull) {
        printAscii(`

            _____|~~\\_____      _____________
        _-~               \\    |    \\
        _-    | )     \\    |__/   \\   \\
        _-         )   |   |  |     \\  \\
        _-    | )     /    |--|      |  |
    __-_______________ /__/_______|  |_________
    (                |----         |  |
    \`---------------'--\\\\\\\\      .\`--'
                                 \`||||
`);
        
        print("\nChris is still asleep! Chris needs coffee! What are you "+
             "waiting for??");
        print("\nPress enter to go back out to the hallway");
        
        function processInput(input){
            portable();
        }

        waitForInput(processInput);
    } else {
        print("You hand Chris the coffee.");
        setTimeout(function() {
            print("Chris slowly looks at you and takes a few sips");
            setTimeout(function() {
                print("And wakes up! Your class can begin on time!");
                print("Congrats, you saved the day!");
                gameActive = false;
            },2000);
        },2000);
    }
}

function mcdonalds() {
    bathroomDiscovered = true;
    if (!check_time()) return;
    
    print("");
    print('\nYou are now in the <span class="location">bathroom</span>. ' + 
        "There are like 50 people in " +
        "line.");
    print("\nDo you want to wait with them?(Youprobably can't hold it that long.) Say yes or no");
    
    function processInput(input){
        if (input.toLowerCase() === "yes") {
            print("\nyou step into the group and a trance comes over you");
            print("\nyou stare at yourself in the mirror and " +
                "lose track of time");
            setTimeout(function() {
                print("...");
                setTimeout(function() {
                    print("...");
                    setTimeout(function() {
                        print("\nhow long have you been here?");
                        setTimeout(function() {
                            minutes = minutes + 5;
                            bathroom();
                        },2000);
                    },2000);
                },2000);
            },2000);
        } else if (input.toLowerCase() === "no") {
            waitThenCall(outside);
        }
    }

    waitForInput(processInput);
}

function library() {
    libraryDiscovered = true;
    if (!check_time()) return;
    
    if (!haveCup) {
        print('Welcome to the <span class="location">library</span>. ' + 
        "What would you like to do here?");
    } else if (haveCup && !cupIsFull) {
        printAscii(`
        )  (
    (   ) )
    ) ( (
    _______)_
.-'---------|  
( C| CHRIS   |
'-.         |
    '_________'
    '-------'
`);
        
        print("\nSecurity is standing around talking " +
            "and watching over the crowd.");
        print("\nYou see the opportunity and sneakily get behind them and take the key card right out of their back pocket.");
        cupIsFull = true;
        print("What would you like to do next?");
    } else {
        print("The game is starting soon, and you're still hanging with security " +
            "What would you like to do next?");
    }

    print("\nSay one of these choices:\n\twatch the crowd\n\tleave");
    
    function processInput(input){
        if (input.toLowerCase() === "watch the crowd") {
            print("you look into the crowd, get lost in the many people going by, " +
                "and lose track of time");
            setTimeout(function() {
                print("...");
                setTimeout(function() {
                    print("...");
                    setTimeout(function() {
                        minutes = minutes + 5;
                        library();
                    },1000);
                },1000);
            },1000);
        } else if (input.toLowerCase() === "leave") {
            concourse();
        } else {
            stayHere();
            waitThenCall(library);
        }
    }

    waitForInput(processInput);
}


function concourse() {
    concourseDiscovered = true;


    if (!check_time()) return;


    if(minutes == 1){
        print("On the way into the stadium, you go through the metal detctor " +
            "and show you have no contraband on you."
        )
    }
    
    print('\nYou are in the <span class="location">main concourse</span>. ' + 
        "Someone is on the megaphone saying that " +
        "the game is starting soon and to take your seats, but you think you still " +
        "have plenty of time.");
    print("\nWhere would you like to go? Say one of these choices: " +
        "\n\tlibrary\n\twater fountain\n\toutside of bathroom " +
        "\n\tstay in concourse");
    
    function processInput(input){
        if (input.toLowerCase() === "library") {
            library();
        } else if (input.toLowerCase() === "water fountain") {
            water();
        } else if (input.toLowerCase() === "outside of bathroom") {
            outsideBathroom();
        } else if (input.toLowerCase() === "stay in concourse") {
            concourse();
        } else {
            stayHere();
            waitThenCall(concourse);
        }
    }

    waitForInput(processInput);
}
