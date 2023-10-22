import $ from "jquery";
import slick from "slick-carousel";
import WOW from "wowjs";
import { DATA } from "./data";
import { Test } from "./test";

const test = new Test(DATA);

$(() => {
	const wow = new WOW.WOW({
		live: false,
		boxClass: "wow",
	});

	wow.init();
	test.init();

	$(".test-intro__btn").on("click", () => {
		$("body").addClass("show-test");
		$("html, body").animate(
			{
				scrollTop: $(".test").offset().top,
			},
			500
		);
	});

	$(".slider__container").slick();

	$(".banner__link").on("click", () => {
		$("html, body").animate(
			{
				scrollTop: $(".slider").offset().top,
			},
			500
		);
	});

	$(".slider__link").on("click", () => {
		$("html, body").animate(
			{
				scrollTop: $(".test-intro").offset().top,
			},
			500
		);
	});

	new fullpage("#fullpage", {
		licenseKey: "DB3EE7EC-94FE42A9-B0CA39EF-B4289CFF",
		scrollOverflow: true,
		scrollOverflowReset: true,
	});

	$(".banner__button").on("click", () => {
		$("html, body").animate(
			{
				scrollTop: $(".slider__slide").offset().top,
			},
			500
		);
	});

	$(".result__description-btn").on("click", () => {
		$("html, body").animate(
			{
				scrollTop: $(".promo__wrap").offset().top,
			},
			500
		);
	});
});
