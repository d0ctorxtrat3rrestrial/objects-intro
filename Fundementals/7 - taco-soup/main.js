var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
var i = 0;

while(i < harryPotterTitles.length){
    console.log("Harry Potter " + harryPotterTitles[i]);
    i++;
  }
  
// ------------------------------------------------------//

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (var i = 0; i < grades.length; i++) {
    var grade = grades[i];
    if (grade >= 0 && grade <= 69) {
        console.log("You got an F");
    } else if (grade >= 70 && grade <= 76) {
        console.log("You got a D");
    } else if (grade >= 77 && grade <= 84) {
        console.log("You got a C");
    } else if (grade >= 85 && grade <= 92) {
        console.log("You got a B");
    } else if (grade >= 93 && grade <= 100) {
        console.log("You got an A");
    }
}

// ------------------------------------------------------//

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];
var totalStudents = grades.length;
var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;
var countF = 0;
var totalSum = 0;

for (var i = 0; i < totalStudents; i++) {
    var grade = grades[i];
    totalSum += grade;
    if (grade >= 93 && grade <= 100) {
        countA++;
    } else if (grade >= 85 && grade <= 92) {
        countB++;
    } else if (grade >= 77 && grade <= 84) {
        countC++;
    } else if (grade >= 70 && grade <= 76) {
        countD++;
    } else if (grade >= 0 && grade <= 69) {
        countF++;
    }
}

var averageGrade = totalSum / totalStudents;

var maxGradeCount = Math.max(countA, countB, countC, countD, countF);
var mostCommonGrade;
if (maxGradeCount === countA) {
    mostCommonGrade = "A";
} else if (maxGradeCount === countB) {
    mostCommonGrade = "B";
} else if (maxGradeCount === countC) {
    mostCommonGrade = "C";
} else if (maxGradeCount === countD) {
    mostCommonGrade = "D";
} else if (maxGradeCount === countF) {
    mostCommonGrade = "F";
}

console.log("Number of students got A's: " + countA);
console.log("Number of students got B's: " + countB);
console.log("Most common letter grade: " + mostCommonGrade);
console.log("Average percentage grade in the class: " + averageGrade);

// ------------------------------------------------------//

for (var i = 2; i <= 8; i += 2) {
    console.log(i);
}

console.log("Who do we appreciate?!");

// ------------------------------------------------------//

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var sentence = '';

for (var i = 0; i < sentenceArray.length; i++) {
    if ((i + 1) % 4 === 0) {
        sentence += "MOOOOOOOO ";
    } else {
        sentence += sentenceArray[i] + " ";
    }
}

console.log(sentence.trim());

// ------------------------------------------------------//

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

beatles.members.forEach(member => {
    console.log(`${member.name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${member.birth}. He contributed heavily to the ${beatles.albums[0]} Album.`);
});
