(() => {
	function addOption(child, key, option) {
		switch (key) {
			case 'class':
				if (!Array.isArray(option)) {
					option = option.split(' ');
				}

				option.forEach(item => {
					if (item !== '') {
						child.classList.add(item);
					}
				});
				break;
			case 'on':
				Object.keys(option).forEach(eventName => {
					child.addEventListener(eventName, option[eventName]);
				});
				break;
			case 'children':
				child.addCustomElements(option);
				break;
			case 'style':
				for (const optionKey in option) {
					child[key][optionKey] = option[optionKey];
				}
				break;
			default:
				child[key] = option;
				break;
		}
	}

	Element.prototype.addCustomElements = function (elements) {
		elements.forEach(element => {
			if (element instanceof Element) {
				this.appendChild(element);
			} else {
				this.addCustomElement(element[0], element[1]);
			}
		});
	};

	Element.prototype.addCustomElement = function (tag, options = undefined) {
		let child = document.createCustomElement(tag, options);
		this.appendChild(child);
		return child;
	};

	Document.prototype.createCustomElement = function (tag, options = undefined) {
		let child = tag instanceof Element ? tag : document.createElement(tag);
		if (typeof options == 'object') {
			Object.keys(options).forEach(key => addOption(child, key, options[key]));
		}
		return child;
	};
})();