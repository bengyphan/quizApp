var questions = [
	{
		question: "What is the name of the oakland football team?",
		answer: "raiders"
	},
	{
		question: "What data type is an element?",
		answer: "object"
	},
	{
		question: "What is the grass type pokemon that you start out with as a new trainer?",
		answer: "bulbasaur"
	},
	{
		question: "Finish the saying: Life is like a box of ________",
		answer: "chocolates"
	},
	{
		question: "MVP stands for",
		answer: "most valuable player"
	},
	{
		question: "how many stars are there on the American flag?",
		answer: 50
	},
	{
		question: "What plant is tequila derived from?",
		answer: "agave"
	},
	{
		question: "how many classes are there in maplestory?",
		answer: 5
	},
]

for(i = 0; i < questions.length; i++) {
	var question = questions[i].question
	var qel = document.getElementById("question" + [i]);
	console.log(question, qel);
	qel.textContent = question;
 }

function checkAnswers() {

	var correct = 0
	var incorrect = 0

	for(i = 0; i < questions.length; i++) {

		var answer = questions[i].answer;
		var ael = document.getElementById("input" + [i]).value.trim().toLowerCase();
		var questionText = document.getElementById("question" + [i]);

		if(ael == answer) {
			questionText.className = "correct";
			correct++;
		} else {
			questionText.className = "incorrect";
			incorrect++;
		};
	};
	document.getElementById("correct").textContent = correct;
	document.getElementById("incorrect").textContent = incorrect;
};