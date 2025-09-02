document.addEventListener('DOMContentLoaded', function() {
    const dockItems = document.querySelectorAll('.dock-item');

    // ===================== AJUSTAR ENLACES DINÁMICOS =====================
    const pathParts = window.location.pathname.split('/');
    const hubIndex = pathParts.lastIndexOf('hub');
    const baseUrl = hubIndex !== -1 
        ? '/' + pathParts.slice(1, hubIndex + 1).join('/') + '/' 
        : '/';

    const links = {
        home: baseUrl + 'index.html',
        proyectos: baseUrl + 'proyectos.html',
        conversor: baseUrl + 'conversor.html',
        sobre_mi: baseUrl + 'sobre_mi.html',
        redes: baseUrl + 'redes_sociales.html'
    };

    // Asignar href dinámicamente
    dockItems.forEach(item => {
        const section = item.dataset.section;
        if (section === 'home') item.href = links.home;
        if (section === 'projects') item.href = links.proyectos;
        if (section === 'about') {
            // Diferenciar entre Conversor y Sobre Mí
            if (item.textContent.includes('Conversor')) item.href = links.conversor;
            else item.href = links.sobre_mi;
        }
        if (section === 'social') item.href = links.redes;
    });

    // ===================== ANIMACIONES EXISTENTES =====================
    dockItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Solo efecto visual, la navegación real la maneja href
            this.style.transform = 'translateY(-3px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Entrada suave del dock
    const dock = document.querySelector('.dock');
    dock.style.opacity = '0';
    dock.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        dock.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        dock.style.opacity = '1';
        dock.style.transform = 'translateY(0)';
    }, 200);

    // Brillo al hover
    dockItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});
