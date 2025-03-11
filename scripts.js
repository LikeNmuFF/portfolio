        // JavaScript for mode toggling
        function setMode(mode) {
            document.body.className = mode + '-mode';
            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.${mode}-mode-btn`).classList.add('active');
        }

        // JavaScript for mobile menu toggling
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }