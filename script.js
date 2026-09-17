const lessons = {
    Greetings: [
        {
            word: "Hello",
            translation: "Hola",
            pronunciation: "OH-lah"
        },
        {
            word: "Good morning",
            translation: "Buenos días",
            pronunciation: "BWEH-nos DEE-ahs"
        },
        {
            word: "Thank you",
            translation: "Gracias",
            pronunciation: "GRAH-see-ahs"
        }
    ],

    Food: [
        {
            word: "Water",
            translation: "Agua",
            pronunciation: "AH-gwah"
        },
        {
            word: "Bread",
            translation: "Pan",
            pronunciation: "PAHN"
        },
        {
            word: "Milk",
            translation: "Leche",
            pronunciation: "LEH-cheh"
        }
    ],

    Travel: [
        {
            word: "Airport",
            translation: "Aeropuerto",
            pronunciation: "ah-eh-roh-PWEHR-toh"
        },
        {
            word: "Hotel",
            translation: "Hotel",
            pronunciation: "oh-TEL"
        },
        {
            word: "Ticket",
            translation: "Boleto",
            pronunciation: "boh-LEH-toh"
        }
    ],

    "Daily Life": [
        {
            word: "House",
            translation: "Casa",
            pronunciation: "KAH-sah"
        },
        {
            word: "Friend",
            translation: "Amigo",
            pronunciation: "ah-MEE-goh"
        },
        {
            word: "School",
            translation: "Escuela",
            pronunciation: "eh-SKWEH-lah"
        }
    ]
};


let savedCategory =
    localStorage.getItem("languageCategory");

let savedIndex =
    localStorage.getItem("languageIndex");

let currentCategory =
    savedCategory && lessons[savedCategory]
        ? savedCategory
        : "Greetings";

let currentIndex =
    savedIndex !== null
        ? Number(savedIndex)
        : 0;

let score =
    Number(localStorage.getItem("quizScore")) || 0;


const wordElement =
    document.getElementById("word");

const translationElement =
    document.getElementById("translation");

const showAnswerButton =
    document.getElementById("showAnswer");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizOptions =
    document.getElementById("quizOptions");

const quizResult =
    document.getElementById("quizResult");

const scoreElement =
    document.getElementById("score");

const categoryButtons =
    document.querySelectorAll(".category");

let optionSelected = false;


scoreElement.textContent =
    "Score: " + score;


function saveProgress() {

    localStorage.setItem(
        "languageCategory",
        currentCategory
    );

    localStorage.setItem(
        "languageIndex",
        currentIndex
    );

    localStorage.setItem(
        "quizScore",
        score
    );
}


function displayCard() {

    const card =
        lessons[currentCategory][currentIndex];

    wordElement.textContent =
        card.word;

    translationElement.textContent =
        "Select an option first";

    showAnswerButton.disabled = true;

    showAnswerButton.textContent =
        "Show Answer";

    optionSelected = false;

    createQuiz();
}


showAnswerButton.addEventListener(
    "click",
    function() {

        if (!optionSelected) {
            return;
        }

        const card =
            lessons[currentCategory][currentIndex];

        translationElement.textContent =
            card.translation +
            " (" +
            card.pronunciation +
            ")";

        showAnswerButton.textContent =
            "Answer Shown";
    }
);


document.getElementById("next")
    .addEventListener("click", function() {

        currentIndex++;

        if (
            currentIndex >=
            lessons[currentCategory].length
        ) {
            currentIndex = 0;
        }

        saveProgress();

        displayCard();
    });


document.getElementById("previous")
    .addEventListener("click", function() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex =
                lessons[currentCategory].length - 1;
        }

        saveProgress();

        displayCard();
    });


categoryButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            categoryButtons.forEach(
                function(btn) {
                    btn.classList.remove("active");
                }
            );

            button.classList.add("active");

            currentCategory =
                button.textContent;

            currentIndex = 0;

            saveProgress();

            displayCard();
        }
    );
});


function createQuiz() {

    const cards =
        lessons[currentCategory];

    const correctCard =
        cards[currentIndex];

    quizQuestion.textContent =
        'What is the meaning of "' +
        correctCard.word +
        '"?';

    quizOptions.innerHTML = "";

    quizResult.textContent = "";

    optionSelected = false;

    showAnswerButton.disabled = true;


    const options =
        cards.map(function(card) {
            return card.translation;
        });


    options.sort(function() {
        return Math.random() - 0.5;
    });


    options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.textContent =
            option;


        button.addEventListener(
            "click",
            function() {

                optionSelected = true;

                showAnswerButton.disabled = false;


                if (
                    option ===
                    correctCard.translation
                ) {

                    score++;

                    localStorage.setItem(
                        "quizScore",
                        score
                    );

                    scoreElement.textContent =
                        "Score: " + score;

                    quizResult.textContent =
                        "Correct! 🎉";

                } else {

                    quizResult.textContent =
                        "Wrong! Try Show Answer.";
                }

            }
        );


        quizOptions.appendChild(button);
    });
}


categoryButtons.forEach(function(button) {

    if (
        button.textContent ===
        currentCategory
    ) {
        button.classList.add("active");
    } else {
        button.classList.remove("active");
    }

});


displayCard();