import $ from "jquery";
import { DATA } from "./data";
import { Test } from "./test";

const test = new Test(DATA);

$(() => {

	$(document).ready(function() {
		// Находим кнопку по классу promo__test и добавляем обработчик события click
		$(".promo__test").click(function() {
			// Скрываем блок promo
			$(".promo").hide();
			// Отображаем блок test
			$(".test").show();
		});
	});
	
	test.init();


});
