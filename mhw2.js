document.addEventListener('DOMContentLoaded', function() {
    // VARIABILI //
    const navbar = document.querySelector('.navbar');
    const dropdownContainer = document.querySelector('.dropdown-container');
    const navItems = document.querySelectorAll('.nav-item');
    const navIcons = document.querySelectorAll('.nav-icon');
    const appleLogo = document.querySelector('.apple-logo');
    const scrollerTracks = document.querySelectorAll('.scroller-track');
    
    let isOriginalLogo = true;
    const originalLogoPath = appleLogo.src;
    const alternateLogoPath = "icona_apple_colore.png";
  
    // LOGO APPLE //
    appleLogo.addEventListener('click', function() {
      if (isOriginalLogo) {
        this.src = alternateLogoPath;
      } else {
        this.src = originalLogoPath;
      }
      isOriginalLogo = !isOriginalLogo;
    });
  
    // NAVBAR //
    function setupNavItemHover(item) {
      item.addEventListener('mouseenter', () => {
        item.classList.add('nav-item-highlight');
        if (item.id === 'icona_ricerca' || item.id === 'icona_bag') {
          item.style.transform = 'scale(1.1)';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        item.classList.remove('nav-item-highlight');
        if (item.id === 'icona_ricerca' || item.id === 'icona_bag') {
          item.style.transform = 'scale(1)';
        }
      });
    }
  
    navItems.forEach(setupNavItemHover);
    navIcons.forEach(setupNavItemHover);
  
    // DROPDOWN //
    const dropdownGenerators = {
      store: createStoreDropdown,
      mac: createMacDropdown,
      ipad: createIpadDropdown,
      iphone: createIphoneDropdown,
      watch: createWatchDropdown,
      vision: createVisionDropdown,
      airpods: createAirpodsDropdown,
      tv: createTvDropdown,
      entertainment: createEntertainmentDropdown,
      accessories: createAccessoriesDropdown,
      support: createSupportDropdown,
      search: createSearchDropdown,
      bag: createBagDropdown
    };
  
    // FUNZIONI DROPDOWN //
    function createStoreDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Shop';
      
      const ul = document.createElement('ul');
      ['Shop the latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'Accessories'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createMacDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Shop Mac';
      
      const ul = document.createElement('ul');
      ['Explore All Mac', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac Mini', 'Mac Studio', 'Mac Pro', 'Displays'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createIpadDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore iPad';
      
      const ul = document.createElement('ul');
      ['Explore All iPad', 'iPad Pro', 'iPad Air', 'iPad', 'iPad Mini', 'Apple Pencil', 'Keyboards'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createIphoneDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore iPhone';
      
      const ul = document.createElement('ul');
      ['Explore All iPhone', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 16e', 'iPhone 15'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createWatchDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore Watch';
      
      const ul = document.createElement('ul');
      ['Explore All Apple Watch', 'Apple Watch Series 10', 'Apple Watch Ultra 2', 'Apple Watch SE', 'Apple Watch Nike', 'Apple Watch Hermès'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createVisionDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore Vision';
      
      const ul = document.createElement('ul');
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = 'Explore Apple Vision Pro';
      li.appendChild(a);
      ul.appendChild(li);
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createAirpodsDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore AirPods';
      
      const ul = document.createElement('ul');
      ['Explore All AirPods', 'AirPods 4', 'AirPods Pro 2', 'AirPods Max'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createTvDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore TV & Home';
      
      const ul = document.createElement('ul');
      ['Explore All TV & Home', 'Apple TV', 'HomePod', 'Accessories'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createEntertainmentDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore Entertainment';
      
      const ul = document.createElement('ul');
      ['Explore Entertainment', 'Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'Apple Store'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createAccessoriesDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Shop Accessories';
      
      const ul = document.createElement('ul');
      ['Shop All Accessories', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'AirPods', 'TV & Home'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createSupportDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore Support';
      
      const ul = document.createElement('ul');
      ['iPhone', 'Mac', 'iPad', 'Watch', 'Apple Vision Pro', 'AirPods', 'Music', 'TV'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createSearchDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      dropdownContent.dataset.dropdownContent = 'search';
      
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Search apple.com';
      input.className = 'search-input';
      
      dropdownContent.appendChild(input);
      return dropdownContent;
  }
  
  function createBagDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      dropdownContent.dataset.dropdownContent = 'bag';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Your Bag is Empty';
      
      const p = document.createElement('p');
      p.textContent = 'Start shopping to add items to your bag.';
      
      dropdownContent.append(h3, p);
      return dropdownContent;
  }
  
    // GESTIONE DEI DROPDOWN //
    function handleDropdown(item) {
      item.addEventListener('mouseenter', () => {
        const dropdownType = item.dataset.dropdown;
        if (dropdownGenerators[dropdownType]) {
          dropdownContainer.innerHTML = '';
          const dropdownContent = dropdownGenerators[dropdownType]();
          dropdownContainer.appendChild(dropdownContent);
          dropdownContainer.style.display = 'block';
          
          if (item.id === 'icona_ricerca' || item.id === 'icona_bag') {
            dropdownContainer.dataset.keepOpen = 'true';
          }
        }
      });
  
      item.addEventListener('mouseleave', (e) => {
        setTimeout(() => {
          if (!dropdownContainer.contains(document.querySelector(':hover')) && 
              dropdownContainer.dataset.keepOpen !== 'true') {
            dropdownContainer.style.display = 'none';
          }
        }, 100);
      });
    }
  
    navItems.forEach(handleDropdown);
    navIcons.forEach(handleDropdown);
  
    dropdownContainer.addEventListener('mouseleave', () => {
      dropdownContainer.dataset.keepOpen = 'false'; 
      dropdownContainer.style.display = 'none';
    });
    
// BLUR //
function handleDropdown(item) {
    item.addEventListener('mouseenter', () => {
      const dropdownType = item.dataset.dropdown;
      if (dropdownGenerators[dropdownType]) {
        dropdownContainer.innerHTML = '';
        const dropdownContent = dropdownGenerators[dropdownType]();
        dropdownContainer.appendChild(dropdownContent);
        dropdownContainer.style.display = 'block';
        
        document.body.classList.add('dropdown-active');
  
        if (item.id === 'icona_ricerca' || item.id === 'icona_bag') {
          dropdownContainer.dataset.keepOpen = 'true';
        }
      }
    });
  
    item.addEventListener('mouseleave', (e) => {
      setTimeout(() => {
        if (!dropdownContainer.contains(document.querySelector(':hover'))) {
          dropdownContainer.style.display = 'none';
          // Rimuovi il blur quando il dropdown si chiude
          document.body.classList.remove('dropdown-active');
        }
      }, 100);
    });
  }
  
  // RIMUOVE IL BLUR //
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item') && !e.target.closest('.dropdown-container')) {
      dropdownContainer.style.display = 'none';
      document.body.classList.remove('dropdown-active');
    }
  });

    // SCROLLER AUTOMATICO //
    scrollerTracks.forEach(track => {
      const originalImages = track.querySelectorAll('img:not(.clone)');
      
      originalImages.forEach(img => {
        const clone = img.cloneNode(true);
        clone.classList.add('clone');
        track.appendChild(clone);
      });
  
      track.addEventListener('animationiteration', () => {
        track.style.animation = 'none';
        requestAnimationFrame(() => {
          track.style.animation = 'scroll 70s linear infinite';
        });
      });
    });
// FOOTER
    // MOSTRA/NASCONDI DETTAGLI //
const toggleFooterButton = document.getElementById('toggle-footer-details');
const footerDetails = document.getElementById('footer-details');

toggleFooterButton.addEventListener('click', () => {
  footerDetails.classList.toggle('footer-details-hidden');
  footerDetails.classList.toggle('footer-details-visible');
  
  // CAMBIA IL PULSANTE DEL TESTO //
  if (footerDetails.classList.contains('footer-details-visible')) {
    toggleFooterButton.textContent = 'Hide Details ▲';
  } else {
    toggleFooterButton.textContent = 'Show Details ▼';
  }
});
});