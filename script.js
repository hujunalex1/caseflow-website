(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------------- reveal */
  const reveals = Array.from(document.querySelectorAll('.reveal'));

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* --------------------------------------------------------- header / menu */
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuToggle && mobileNav) {
    const menuLabel = menuToggle.querySelector('.sr-only');

    const setMenu = (open) => {
      menuToggle.setAttribute('aria-expanded', String(open));
      if (menuLabel) menuLabel.textContent = open ? '关闭菜单' : '打开菜单';
      mobileNav.hidden = !open;
    };

    menuToggle.addEventListener('click', () => {
      setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) setMenu(false);
    });
  }

  /* ----------------------------------------------------------- view switch */
  const stage = document.querySelector('.mechanism-stage');

  if (stage) {
    const buttons = Array.from(document.querySelectorAll('.switch-btn'));
    const hint = document.getElementById('switch-hint');
    const stateLabel = stage.querySelector('[data-state-label]');
    const caption = stage.querySelector('[data-stage-caption]');

    const copy = {
      design: {
        hint: '当前：设计视图 · 显示优先级与标签',
        state: '设计视图',
        caption: '设计视图：优先级、标签、用例结构'
      },
      exec: {
        hint: '当前：执行视图 · 显示通过、失败、阻塞与未测',
        state: '执行视图',
        caption: '执行视图：通过、失败、阻塞、未测'
      }
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const view = button.dataset.view;
        if (!copy[view]) return;

        stage.dataset.stageView = view;
        buttons.forEach((other) => {
          const active = other === button;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', String(active));
        });

        if (hint) hint.textContent = copy[view].hint;
        if (stateLabel) stateLabel.textContent = copy[view].state;
        if (caption) caption.textContent = copy[view].caption;

        if (!reduceMotion.matches) {
          stage.classList.remove('is-switching');
          void stage.offsetWidth;
          stage.classList.add('is-switching');
          window.setTimeout(() => stage.classList.remove('is-switching'), 380);
        }
      });
    });
  }

  /* ------------------------------------------------------------------ copy */
  const copyText = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand('copy');
      area.remove();
      return ok;
    } catch (error) {
      return false;
    }
  };

  document.querySelectorAll('[data-copy]').forEach((button) => {
    const label = button.querySelector('.copy-label');
    const original = label ? label.textContent : '';
    let timer = 0;

    button.addEventListener('click', async () => {
      const ok = await copyText(button.dataset.copy);
      if (!label) return;

      label.textContent = ok ? '已复制' : '复制失败';
      button.classList.toggle('is-copied', ok);

      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        label.textContent = original;
        button.classList.remove('is-copied');
      }, 1800);
    });
  });

  /* ---------------------------------------------------------- collab replay */
  const room = document.querySelector('.room');
  const replay = document.getElementById('replay');

  if (room) {
    const play = () => {
      room.classList.remove('is-playing');
      void room.offsetWidth;
      room.classList.add('is-playing');
    };

    if ('IntersectionObserver' in window && !reduceMotion.matches) {
      const roomObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          play();
          roomObserver.disconnect();
        });
      }, { threshold: 0.35 });

      roomObserver.observe(room);
    } else {
      room.classList.add('is-playing');
    }

    if (replay) replay.addEventListener('click', play);
  }
})();
