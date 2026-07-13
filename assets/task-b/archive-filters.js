(() => {
	const LABELS_BY_PATH = {
		'/simboli-del-tachigrafo-guida-pratica-per-conducenti-e-flotte/': {
			categories: ['Normative'],
			tags: ['Tachigrafo', 'Flotte'],
		},
		'/topfly-a-transpotec-soluzioni-telematiche-e-geolocalizzazione/': {
			categories: ['Eventi'],
			tags: ['Transpotec', 'Telematica'],
		},
		'/carta-tachigrafica-cose-come-richiederla-e-quali-dati-registra/': {
			categories: ['Normative'],
			tags: ['Tachigrafo'],
		},
		'/topfly-rinnova-la-partnership-con-an-bti/': {
			categories: ['Azienda'],
			tags: ['Partnership', 'Trasporto persone'],
		},
		'/tachigrafo-di-seconda-generazione-2-5-3-5-t-obbligo-e-normativa/': {
			categories: ['Normative'],
			tags: ['Tachigrafo'],
		},
		'/gruppi-elettrogeni-come-monitorarli-da-remoto/': {
			categories: ['Soluzioni'],
			tags: ['Gruppi elettrogeni', 'Monitoraggio'],
		},
		'/rentri-e-gps-per-flotte-cat-5/': {
			categories: ['Normative'],
			tags: ['RENTRI', 'GPS'],
		},
		'/obbligo-gps-mezzi-categoria-5-scadenza-rentri-31-dicembre/': {
			categories: ['Normative'],
			tags: ['RENTRI', 'GPS'],
		},
		'/topfly-a-ecomondo-rotta-chiara-verso-il-rentri/': {
			categories: ['Eventi'],
			tags: ['Ecomondo', 'RENTRI'],
		},
		'/topfly-partecipa-a-ibe-driving-experience-rimini/': {
			categories: ['Eventi'],
			tags: ['IBE', 'Trasporto persone'],
		},
		'/rimborso-ritardi-al-carico-cosa-cambia-con-la-nuova-normativa/': {
			categories: ['Normative'],
			tags: ['Logistica'],
		},
		'/topfly-partecipa-a-translogistica-romania/': {
			categories: ['Eventi'],
			tags: ['Logistica'],
		},
	};

	const slugify = (value) =>
		value
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');

	const archive = document.querySelector('.posts_wrraper');
	const widget = archive?.querySelector('.elementor-element-9e26021');
	const list = widget?.querySelector('.elementor-posts-container');
	const cards = Array.from(list?.querySelectorAll('article.elementor-post') || []);
	if (!archive || !widget || !list || cards.length === 0) return;

	const records = cards.map((card) => {
		const titleLink = card.querySelector('.elementor-post__title a');
		const href = titleLink?.getAttribute('href') || card.querySelector('a[href]')?.getAttribute('href') || '';
		const labels = LABELS_BY_PATH[href] || { categories: ['Articoli'], tags: [] };
		const categories = labels.categories.map((label) => ({ label, slug: slugify(label) }));
		const tags = labels.tags.map((label) => ({ label, slug: slugify(label) }));
		card.dataset.topflyCategories = categories.map((item) => item.slug).join(' ');
		card.dataset.topflyTags = tags.map((item) => item.slug).join(' ');

		const text = card.querySelector('.elementor-post__text');
		if (text && !text.querySelector('.topfly-archive-card-labels')) {
			const labelList = document.createElement('ul');
			labelList.className = 'topfly-archive-card-labels';
			[...categories, ...tags].slice(0, 3).forEach((item) => {
				const chip = document.createElement('li');
				chip.textContent = item.label;
				labelList.append(chip);
			});
			const readMore = text.querySelector('.elementor-post__read-more');
			text.insertBefore(labelList, readMore || null);
		}

		return { card, categories, tags };
	});

	const collectOptions = (key) => {
		const options = new Map();
		records.forEach((record) => {
			record[key].forEach((item) => {
				const current = options.get(item.slug) || { label: item.label, slug: item.slug, count: 0 };
				current.count += 1;
				options.set(item.slug, current);
			});
		});
		return Array.from(options.values()).sort((left, right) => left.label.localeCompare(right.label, 'it'));
	};

	const categories = collectOptions('categories');
	const tags = collectOptions('tags');
	if (categories.length === 0 && tags.length === 0) return;

	const panel = document.createElement('section');
	panel.className = 'topfly-archive-filters';
	panel.setAttribute('aria-labelledby', 'topfly-archive-filters-title');

	const header = document.createElement('div');
	header.className = 'topfly-archive-filters__header';
	const title = document.createElement('h2');
	title.id = 'topfly-archive-filters-title';
	title.className = 'topfly-archive-filters__title';
	title.textContent = 'Esplora gli articoli';
	const count = document.createElement('p');
	count.className = 'topfly-archive-filters__count';
	header.append(title, count);

	const groups = document.createElement('div');
	groups.className = 'topfly-archive-filters__groups';

	const makeButton = (type, option, active = false) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = `topfly-archive-filter${active ? ' is-active' : ''}`;
		button.dataset.filterType = type;
		button.dataset.filterValue = option.slug;
		button.setAttribute('aria-pressed', String(active));
		button.textContent = `${option.label} (${option.count})`;
		return button;
	};

	const makeGroup = (label, type, options, includeAll = false) => {
		const group = document.createElement('div');
		group.className = 'topfly-archive-filters__group';
		const groupLabel = document.createElement('span');
		groupLabel.className = 'topfly-archive-filters__label';
		groupLabel.textContent = label;
		const chips = document.createElement('div');
		chips.className = 'topfly-archive-filters__chips';
		if (includeAll) chips.append(makeButton('all', { label: 'Tutti', slug: 'all', count: records.length }, true));
		options.forEach((option) => chips.append(makeButton(type, option)));
		group.append(groupLabel, chips);
		return group;
	};

	groups.append(makeGroup('Categorie', 'category', categories, true));
	if (tags.length > 0) groups.append(makeGroup('Tag', 'tag', tags));
	panel.append(header, groups);
	widget.parentNode.insertBefore(panel, widget);

	const buttons = Array.from(panel.querySelectorAll('.topfly-archive-filter'));
	const setActive = (activeButton) => {
		buttons.forEach((button) => {
			const active = button === activeButton;
			button.classList.toggle('is-active', active);
			button.setAttribute('aria-pressed', String(active));
		});
	};

	const updateCount = () => {
		const visible = records.filter((record) => !record.card.hidden).length;
		count.textContent = `${visible} articoli`;
	};

	const applyFilter = (type, value) => {
		records.forEach(({ card }) => {
			const match =
				type === 'all' ||
				(type === 'category' && card.dataset.topflyCategories.split(' ').includes(value)) ||
				(type === 'tag' && card.dataset.topflyTags.split(' ').includes(value));
			card.hidden = !match;
			card.setAttribute('aria-hidden', String(!match));
		});
		updateCount();
	};

	panel.addEventListener('click', (event) => {
		const button = event.target.closest('.topfly-archive-filter');
		if (!button) return;
		setActive(button);
		applyFilter(button.dataset.filterType, button.dataset.filterValue);
	});

	updateCount();
})();
