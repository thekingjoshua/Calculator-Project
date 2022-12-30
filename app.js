'use strict';
// function for manipulating the theme toggling functionality
(function () {
	const toggleThemeContainer = document.querySelector('.toggle__container'),
		toggleBtns = document.querySelectorAll('.theme__btn'),
		container = document.querySelector('.container'),
		calcText = document.querySelector('h2'),
		themeText = document.querySelector('h5'),
		themeNumText = document.querySelectorAll('span'),
		screenContainer = document.querySelector('.screen__container'),
		screenText = document.querySelector('.screen__container h1'),
		equalBtn = document.querySelector('.equal'),
		resetBtn = document.querySelector('.reset'),
		deleteBtn = document.querySelector('.del'),
		buttons = document.querySelectorAll('.btn'),
		buttonContainer = document.querySelector('.keypad__container'),
		attribution = document.querySelector('.attribution'),
		attributionLinks = document.querySelectorAll('.attribution a');

	toggleThemeContainer.addEventListener('click', e => {
		let clickedBtn = e.target.closest('.theme__btn');
		toggleBtns.forEach(btn => btn.classList.remove('active'));
		if (!clickedBtn) return;
		clickedBtn.classList.add('active');

		const toggleTheme = function (
			themeNum,
			containerBG,
			themeNumColor,
			themeTextColor,
			calcTextColor,
			themeContainerBG,
			screenContainerBG,
			screenTextColor,

			delBtnBG,
			resetBtnBG,
			equalBtnBG,

			delTextColor,
			resetTextColor,
			equalTextColor,

			delBtnShadow,
			resetBtnShadow,
			equalBtnShadow,

			btnBG,
			btnShadow,
			btnTextColor,
			btnContainerBG,
			attrColor,
			attrLink
		) {
			if (clickedBtn.dataset.theme === themeNum) {
				container.style.backgroundColor = containerBG;
				themeNumText.forEach(num => {
					num.style.color = themeNumColor;
				});
				themeText.style.color = themeTextColor;
				calcText.style.color = calcTextColor;

				toggleThemeContainer.style.backgroundColor = themeContainerBG;
				screenContainer.style.backgroundColor = screenContainerBG;

				screenText.style.color = screenTextColor;

				deleteBtn.style.backgroundColor = delBtnBG;
				resetBtn.style.backgroundColor = resetBtnBG;
				equalBtn.style.backgroundColor = equalBtnBG;

				deleteBtn.style.color = delTextColor;
				resetBtn.style.color = resetTextColor;
				equalBtn.style.color = equalTextColor;

				deleteBtn.style.boxShadow = delBtnShadow;
				resetBtn.style.boxShadow = resetBtnShadow;
				equalBtn.style.boxShadow = equalBtnShadow;

				buttons.forEach(btn => {
					btn.style.backgroundColor = btnBG;
					btn.style.boxShadow = btnShadow;
					btn.style.color = btnTextColor;
				});
				buttonContainer.style.backgroundColor = btnContainerBG;
				attribution.style.color = attrColor;
                attributionLinks.forEach(link => {
                    link.style.color = attrLink;
                })
			}
		};

		// Theme 1
		toggleTheme(
			'1', // data theme num
			'var(--mainBackground)', // container BG
			'var(--white)', // theme number color
			'var(--white)', // theme text color
			'var(--white)', // calc text color
			'var(--toggleBackground)', // theme container color
			'var(--screenBackground)', // screen BG
			'var(--white)', // screen Text Color
			'var(--keyBackground)', // delete btn BG
			'var(--keyBackground)', // reset btn BG
			'var(--redKeyBackground)', // equal btn BG
			'var(--white)', // delete text color
			'var(--white)', // reset text color
			'var(--white)', // equal text color

			'0px 3px 2px 1px var(--keyShadow)', // delete button shadow
			'0px 3px 2px 1px var(--keyShadow)', // reset button shadow
			'0px 3px 2px 1px var(--darkRedKeyBackground)', // equal button shadow
			'var(--lightGrayishOrange)', // keypad buttons BG
			'0px 3px 2px 1px var(--grayishOrange)', // keypad buttons shadow
			'var(--keypadBackground)', // keypad text color
			'var(--keypadBackground)', // keypad Container Background
            'var(--white)', // attribution text color
			'var(--white)' // attribution text link
		);
		// Theme 2
		toggleTheme(
			'2', // data theme num
			'var(--lightGray)', // container BG
			'var(--veryDarkGray)', // theme number color
			'var(--veryDarkGray)', // theme text color
			'var(--veryDarkGray)', // calc text color
			'var(--grayishRed)', // theme container color
			'var(--lightRed)', // screen BG
			'var(--veryDarkGray)', // screen Text Color
			'var(--darkModerateCyan)', // delete btn BG
			'var(--darkModerateCyan)', // reset btn BG
			'var(--orange)', // equal btn BG
			'var(--white)', // delete text color
			'var(--white)', // reset text color
			'var(--white)', // equal text color
			'0px 3px 2px 1px var(--veryDarkCyan)', // delete button shadow
			'0px 3px 2px 1px var(--veryDarkCyan)', // reset button shadow
			'0px 3px 2px 1px var(--darkOrange)', // equal button shadow
			'var(--lightGrayish)', // keypad buttons BG
			'0px 3px 2px 1px var(--darkGrayish)', // keypad buttons shadow
			'var(--keypadBackground)', // keypad text color
			'var(--lightGrayish)', // keypad Container Background
			'var(--toggleBackground)', // attribution text color
			'var(--toggleBackground)' // attribution text link
		);
		// Theme 3
		toggleTheme(
			'3', // data theme num
			'var(--veryDarkViolet)', // container BG
			'var(--lightYellow)', // theme number color
			'var(--lightYellow)', // theme text color
			'var(--lightYellow)', // calc text color
			'var(--veryDarkViolet3)', // theme container color
			'var(--veryDarkViolet3)', // screen BG
			'var(--lightYellow)', // screen Text Color
			'var(--veryDarkViolet2)', // delete btn BG
			'var(--veryDarkViolet2)', // reset btn BG
			'var(--pureCyan)', // equal btn BG
			'var(--white)', // delete text color
			'var(--white)', // reset text color
			'var(--keypadBackground)', // equal text color
			'0px 3px 2px 1px var(--veryDarkViolet)', // delete button shadow
			'0px 3px 2px 1px var(--veryDarkViolet)', // reset button shadow
			'0px 3px 2px 1px var(--softCyan)', // equal button shadow
			'var(--darkViolet)', // keypad buttons BG
			'0px 3px 2px 1px var(--veryDarkViolet)', // keypad buttons shadow
			'var(--white)', // keypad text color
			'var(--veryDarkViolet3)', // keypad Container Background
            'var(--white)', // attribution text color
			'var(--white)' // attribution text link
		);
	});
})();

// function for manipulating the calculation functionality
(function () {
	// Storing all elements in variables for calculation
	const buttons = document.querySelectorAll('.btn'),
		screenText = document.querySelector('.screen__container h1'),
		equalBtn = document.querySelector('.equal'),
		resetBtn = document.querySelector('.reset'),
		deleteBtn = document.querySelector('.del');

	buttons.forEach(button => {
		button.addEventListener('click', e => {
			let btnValue = e.target.dataset.num;
			// adding numbers clicked to screen
			screenText.textContent = screenText.textContent + btnValue;
		});
	});
	equalBtn.addEventListener('click', () => {
		// checking if the screen is blank, then exits the code if true
		if (screenText.textContent === '') {
			return;
		} else {
			// calculating the values of the values on the screen
			let answer = eval(screenText.textContent);
			screenText.textContent = answer; // pushing the result to the screen
		}
	});
	resetBtn.addEventListener('click', () => {
		screenText.textContent = ''; // clearing the value on the screen
	});
	deleteBtn.addEventListener('click', () => {
		// cloning the value on the screen
		let array = [...screenText.textContent];
		array.pop(); // deleting the last value on the screen
		screenText.textContent = array.join(''); // joining the values on the screen
	});
})();
