export class Test {
	constructor(data) {
		this.data = data;
		this.questions = data.questions;
		this.results = data.results;
		this.activeIndex = 0;
		this.answers = {
			А: 0,
			Б: 0,
			В: 0,
		};

		this.$questionCounter = $(".test__counter-text");
		this.$questionTitle = $(".test__title");
		this.$questionImg = $(".test__img-question");
		this.$answerItem = $(".test__item");
		this.$answer = $(".test__answer");
		this.$resultFrameTitle = $(".result__answer-title");
		this.$resultFrameText = $(".result__answer-text");
		this.$resultFrameImg = $(".result__wrap__result-img");
	}

	init() {
		this.handleEvents();
		this.renderQuestion();
	}

	handleEvents() {
		this.$answerItem.on("click", (e) => {
			const id = $(e.target).closest(".test__item").data("id");
			this.answers[id] += 1;
			this.activeIndex += 1;
			if (this.activeIndex === this.questions.length) {
				this.renderResults();
			} else {
				this.renderQuestion();
			}
		});
	}

	renderQuestion() {
		if (this.activeIndex >= this.questions.length) {
			return;
		}

		const currentQuestion = this.questions[this.activeIndex];
		const { title, answers } = currentQuestion;
		this.$questionCounter.text(this.activeIndex + 1);
		this.$questionTitle.html(title);
		this.$answerItem.each((id, item) => {
			$(item).find(".test__answer-text").text(answers[id].text);
		});
		if ($(window).width() < 768){
			this.$questionImg.html(
				`<img src="/images/test-image-mobile-${this.activeIndex + 1}.png" />`
			);  
		}
		else{
			this.$questionImg.html(
				`<img src="/images/test-image-${this.activeIndex + 1}.png" />`
			);
		}
	}

	getWinner() {
		let count = 0;
		let winner = "";
		for (let key in this.answers) {
			if (this.answers[key] > count) {
				count = this.answers[key];
				winner = key;
			}
		}
		return winner;
	}

	renderResults() {
		const winner = this.getWinner();
		$(".test").hide();
		$(".result").show();
		$("body").removeClass("show-test");
		$("body").addClass("show-result");
		const currentResult = this.results.find((item) => item.id === winner);
		const { title, info, image, imageMobile } = currentResult;
		this.$resultFrameTitle.text(title);
		this.$resultFrameText.text(info);
		if ($(window).width() < 768){
			this.$resultFrameImg.html(
				`<img src="${imageMobile}" />`
			); 
		}
		else{
			this.$resultFrameImg.html(
				`<img src="${image}" />`
			);
		}
	}
}
