document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('surprise-btn');
    const msg = document.getElementById('message');
    const music = document.getElementById('music'); // Corregido el ID
    const container = document.querySelector('.container');
    
    // Efecto inicial de confeti
    launchConfetti(30);
    
    btn.addEventListener('click', () => {
        // Mostrar mensaje
        msg.style.display = 'block';
        msg.classList.add('animate__animated', 'animate__fadeInUp');
        
        // Reproducir música con manejo de errores
        music.play().catch(error => {
            console.error("Error al reproducir música:", error);
        });
        
        // Lanzar globos
        launchBalloons(25);
        
        // Más confeti
        launchConfetti(50);
        
        // Efecto en el botón
        btn.classList.remove('animate__pulse', 'animate__infinite');
        btn.textContent = '¡Sorpresa activada! 🎉';
        btn.style.backgroundColor = '#4CAF50';
        
        // Mostrar elementos ocultos
        document.querySelector('.wishes-container').style.display = 'block';
        
        // Efecto de latido en el mensaje
        setInterval(() => {
            msg.style.transform = 'scale(1.02)';
            setTimeout(() => {
                msg.style.transform = 'scale(1)';
            }, 300);
        }, 2000);
    });
    
    function launchBalloons(count) {
        const colors = ['#ff99cc', '#ffcc99', '#99ccff', '#ccffcc', '#ffff99', '#ffb3e6', '#c2c2f0'];
        
        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
            balloon.style.animationDelay = `${Math.random() * 2}s`;
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.width = `${40 + Math.random() * 30}px`;
            balloon.style.height = `${60 + Math.random() * 30}px`;
            
            if (Math.random() > 0.5) {
                balloon.style.borderRadius = '50% 50% 40% 40%';
            }
            
            document.body.appendChild(balloon);
            
            setTimeout(() => balloon.remove(), 10000);
        }
    }
    
    function launchConfetti(count) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            confetti.style.left = `${Math.random() * 100}vw`;
            const size = 5 + Math.random() * 10;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            
            const colors = ['#ff99cc', '#ffcc99', '#99ccff', '#ccffcc', '#ffff99', '#ffb3e6'];
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            confetti.style.animationDuration = `${3 + Math.random() * 4}s`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    }
    
    // Efecto de movimiento con el mouse para el pastel
    document.addEventListener('mousemove', (e) => {
        const cake = document.querySelector('.cake');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cake.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset cake position when mouse leaves container
    container.addEventListener('mouseleave', () => {
        const cake = document.querySelector('.cake');
        cake.style.transform = 'rotateY(0) rotateX(0)';
    });
    
    // Efecto de escritura para el nombre
    const nameElement = document.querySelector('.name');
    const name = "Nicolle Pernilla";
    let i = 0;
    
    nameElement.textContent = '';
    const typingEffect = setInterval(() => {
        if (i < name.length) {
            nameElement.textContent += name.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 150);
});