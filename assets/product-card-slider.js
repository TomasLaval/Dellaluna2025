(function () {
	const initSlider = () => {
		const sliders = document.querySelectorAll(".product-card-js");

		sliders.forEach((slider, index) => {
			const productSlider = new Swiper(slider, {
				pagination: {
					el: slider.querySelector(".product-pagination .swiper-pagination"),
					clickable: true,
				},
				navigation: {
					nextEl: ".product-button-group .swiper-button-next",
					prevEl: ".product-button-group .swiper-button-prev",
				},
				allowTouchMove: true,
				990: {
					allowTouchMove: false,
				},
				on: {
					slideChange: function () {
						console.log("Slide index changed to:", this.activeIndex);

						if (this.pagination && this.pagination.render && this.pagination.update) {
							this.pagination.render();
							this.pagination.update();
						}
					},
				},
			});
		});
	};

	initSlider();

	document.addEventListener("shopify:section:load", function () {
		initSlider();
	});
})();
