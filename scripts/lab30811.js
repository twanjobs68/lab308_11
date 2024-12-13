//ALAB 308.1.1
        //  Objectives
        // Create variable declarations using both let and const.
        // Apply different types of data literals.
        // Use arithmetic operators to manipulate data.
        // Use comparison operators to compare data.
        // Perform string concatenations.
        // Implement escape sequences in strings for special characters.
        // Use template literals for string interpolation and multi-line strings.
        // Create effective documentation through the use of comments.

        //1-Create variable declarations using both let and const.

        let musicChartNum = 2;
        let musicSequence = 5;
        const musicType = "Gospel";

        //2-Apply different types of data literals and  5-Perform string concatenations.
        console.log(musicSequence + 10 + " is the number of the radio station I listen to.");
        console.log("I've listened to church music since I turned " + musicSequence);
        console.log("I love " + musicType + " music!");
        console.log(`${musicType}, music is INSPIRING!`);
        console.log(`I listen to ${musicType} in my car regularly!`);
        console.log(`I listen to ${musicType} in my car regularly on channel ${musicSequence}.`);

        // genre and new artist are accessed outside of the object "person". 
        // The console log use the "\n" escape sequences to display text in new line.

        const genre = "Gospel";
        const newArtist = "FAZE";
        const yrPerform = 97; //questions on performing arithmetic with this variable and person.age
        //OBJECT Literal
        let person = {
            name: "Peggy",
            age: 42,
            occupation: "artist",
            numHits: 15
        }

        //Boolean Literal
        const mayBe = yrPerform > 2000;
        console.log("Has this artist been performing over 10 years?", + mayBe);
        //7-Use template literals for string interpolation and multi-line strings.
        console.log(`The named ${person.occupation}, "${person.name}" made her debut at the age of \n${person.age} and her ${genre} music is now ranking ${person.numHits} on the music charts.\nThe ${person.occupation}, ${newArtist} appeard on the set 5 years prior to\n${person.name}s' first appearance.`);

        //3-Use arithmetic operators to manipulate data.
        let timeLapse = yrPerform - person.age;
        console.log(`At ${timeLapse} years is a young age to break into this business so\n${person.name}'s is going to be OK!`)

        //4-Use comparison operators to compare data.
        const genreLarge = genre > "RNB";
        console.log("Is genre > than Gospel?", genreLarge); //answer is false

        // 6-Implement escape sequences in strings for special characters.
        const summary = "This summary covers the last 5 years of\n" +
            "an artists work that has gone unnoticed for years. \n" +
            "This artist and her talents entertain the old and the yourng\n" +
            "and this is one music producer who can't wait to see whats next for her. \n";
        console.log(summary);












    </script>
