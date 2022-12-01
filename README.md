# dom-extention

Создание dom элементов
```javascript
let video = document.createCustomElement('video', {
  style: "background: black;",
  width: 800,
  height: 400,
  controls: true,
  playsinline: true,
});
let moderAnswer = document.createCustomElement('textarea');
```

Добавление элемента в родительский элемент offer
```javascript
offer.addCustomElement('button', {
    text: 'В РЕЗЕРВ',
    class: ['btn', 'btnAdd'],
    on: {click: (e) => addReserve(accountId, dealId)}
});
```

Добавление элементов в родительский элемент #root
```javascript
document.getElementById('root').addCustomElements([
  ['div', {innerText: `id: ${task.id}`,}],
  ['div', {innerText: `name: ${task.name}`,}],
  ['div', {innerText: `about: ${task.about}`,}],
  ['div', {innerText: `price: $${task.priceInt / 100}`,}],
  ['div', {innerText: `creator: ${task.creator.firstname} ${task.creator.lastname} (${task.creator.username})`,}],
  ['div', {innerText: `duration: ${task.duration / 60} min`,}],
  ['div', {innerText: `startOn: ${new Date(task.startOn * 1000)}`,}],
  ['div', {innerText: `isPublic: ${task.isPublic}`,}],
  ['br'],
  ['div', {innerText: `Total watchers: ${task.watchers?.length}`}],
  ['div', {innerText: `Viewed watchers: ${watchers?.length}`}],
  ['div', {innerText: `Approve: ${watchers?.filter(item => item.isReportConfirmed === true).length}`}],
  ['div', {innerText: `Decline: ${watchers?.filter(item => item.isReportConfirmed === false).length}`}],
  ['br'],
  video,
  ['h3', {innerText: 'Streamer comments'}],
  ...(task.reports?.map(item => ['p', {innerText: item.textReport}]) ?? []),
  ['h3', {innerText: 'Watchers comments'}],
  ...(watchers?.filter(item => item.isReportConfirmed === false).map(item => ['p', {innerText: item.textReport}]) ?? []),
  ['br'],
  moderAnswer,
  ['br'],
  ['button', {innerText: 'Accept', on: {click: (e) => acceptReport(e, task, true)}}],
  ['button', {innerText: 'Denied', on: {click: (e) => acceptReport(e, task, false)}}],
]);
```


Поддержка сложной вложености
```javascript
parent.addCustomElements([
    ["div", {
        class: ["master"], on: {click: e => onClickMaster(e, params)}, children: [
            ["div", {
                class: ["d-flex", "masterHeader", rateClass], children: [
                    ["div", {
                        class: ["col-12", "d-flex", "justify-content-center"], children: [
                            ["span", {
                                text: params.name + ' - ' + params.rate,
                                title: "Название клиента - рейтинг",
                                class: ["w-100"]
                            }]
                        ]
                    }]
                ]
            }],
            ["div", {
                class: ["d-flex"], children: [
                    ["div", {
                        class: ["col-4", "d-flex", "justify-content-center"], children: [
                            ["span", {
                                text: params.dealsInWork + '',
                                title: "Кол-во сделок на сегодня",
                                class: ["w-100", dealsClass]
                            }]
                        ]
                    }],
                    ["div", {
                        class: ["col-4", "d-flex", "justify-content-center"], children: [
                            ["span", {
                                text: params.dealsInDay + '',
                                title: "Макс. на день",
                                class: ["w-100", dealsClass]
                            }]
                        ]
                    }],
                    ["div", {
                        class: ["col-4", "d-flex", "justify-content-center"], children: [
                            ["span", {
                                text: params.dealsActive + '',
                                title: "Общее кол-во активных, число",
                                class: ["w-100"]
                            }]
                        ]
                    }],
                ]
            }],
            ["div", {
                class: ["d-flex"], children: [
                    ["div", {
                        class: ["col-12", "d-flex", "justify-content-center"], children: [
                            ["span", {text: params.avgCheck + " ₽", title: "Средний чек", class: ["w-100"]}]]
                    }],
                ]
            }]
        ]
    }]
]);
```
