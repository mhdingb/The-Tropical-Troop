const characterObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenSections = document.querySelectorAll(".hidden");
hiddenSections.forEach((el) => characterObserver.observe(el));