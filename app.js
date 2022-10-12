const panels = document.querySelectorAll('.panel')

for (const panel of panels) {
	panel.addEventListener('click', () => {
		panel.classList.toggle('active')
	})
}