document.addEventListener('DOMContentLoaded', () => {
    const segments = document.querySelectorAll('.lens-segment');
    const views = document.querySelectorAll('.solution-view');
    const labels = document.querySelectorAll('.curved-label');
    const centerText = document.getElementById('lens-label');
    const lensCoreBtn = document.getElementById('lens-core-btn');
    const viewOrder = ['view-overview', 'view-1', 'view-2', 'view-3'];
    const viewLabels = ['Overview', 'TrueScene', 'My-VMS', 'Analytics'];
    const desktopQuery = window.matchMedia('(min-width: 1101px)');

    let currentViewIndex = 0;

    function setCenterLabel(text) {
        centerText.style.opacity = 0;
        window.setTimeout(() => {
            centerText.textContent = text;
            centerText.style.opacity = 1;
        }, 160);
    }

    function goToIndex(index) {
        if (index < 0 || index >= viewOrder.length || index === currentViewIndex) return false;

        currentViewIndex = index;

        views.forEach(view => view.classList.remove('active'));
        segments.forEach(seg => seg.classList.remove('active'));
        labels.forEach(label => label.classList.remove('active'));
        lensCoreBtn.classList.toggle('active', index === 0);

        document.getElementById(viewOrder[index])?.classList.add('active');

        if (index === 0) {
            setCenterLabel(viewLabels[0]);
        } else {
            document.getElementById(`seg-${index}`)?.classList.add('active');
            document.getElementById(`curved-label-${index}`)?.classList.add('active');
            setCenterLabel(viewLabels[index]);
        }

        return true;
    }

    segments.forEach((segment, i) => {
        segment.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                goToIndex(i + 1);
            }
        });
    });

    lensCoreBtn.addEventListener('click', () => {
        if (currentViewIndex !== 0) {
            goToIndex(0);
        }
    });

    let wheelAccumulator = 0;
    let wheelDirection = 0;
    let wheelResetTimer = null;
    let lastNavigationTime = 0;
    const wheelThreshold = 36;
    const wheelCooldown = 720;

    function normalizeWheelDelta(event) {
        if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
        if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
        return event.deltaY;
    }

    function navigateByDirection(direction) {
        const nextIndex = (currentViewIndex + direction + viewOrder.length) % viewOrder.length;

        lastNavigationTime = Date.now();
        return goToIndex(nextIndex);
    }

    window.addEventListener('wheel', (e) => {
        if (!desktopQuery.matches) {
            return;
        }

        e.preventDefault();

        const deltaY = normalizeWheelDelta(e);
        const direction = Math.sign(deltaY);

        if (direction === 0) return;

        if (direction !== wheelDirection) {
            wheelAccumulator = 0;
            wheelDirection = direction;
        }

        wheelAccumulator += Math.abs(deltaY);

        window.clearTimeout(wheelResetTimer);
        wheelResetTimer = window.setTimeout(() => {
            wheelAccumulator = 0;
            wheelDirection = 0;
        }, 240);

        if (wheelAccumulator < wheelThreshold || Date.now() - lastNavigationTime < wheelCooldown) {
            return;
        }

        navigateByDirection(direction);
        wheelAccumulator = 0;
        wheelDirection = 0;
    }, { passive: false });

    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;

        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        if (!desktopQuery.matches || !touchStartY) return;

        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        touchStartX = 0;
        touchStartY = 0;

        if (Math.abs(deltaY) < 52 || Math.abs(deltaY) < Math.abs(deltaX) * 1.2) return;

        navigateByDirection(deltaY < 0 ? 1 : -1);
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
        if (['ArrowDown', 'PageDown'].includes(e.key)) {
            e.preventDefault();
            navigateByDirection(1);
        }

        if (['ArrowUp', 'PageUp'].includes(e.key)) {
            e.preventDefault();
            navigateByDirection(-1);
        }

        if (e.key === 'Home') {
            e.preventDefault();
            goToIndex(0);
        }

        if (e.key === 'End') {
            e.preventDefault();
            goToIndex(viewOrder.length - 1);
        }
    });
});
