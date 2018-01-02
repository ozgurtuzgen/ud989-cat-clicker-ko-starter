var initialCats = [
    {
        name: 'Toby',
        clickCount: 0,
        imgSrc: '',
        imgAttribution: '',
        nicknames: ['a', 'b', 'c']
    },
    {
        name: 'Teddy',
        clickCount: 0,
        imgSrc: '',
        imgAttribution: '',
        nicknames: ['dd', 'b', 'c']
    },
    {
        name: 'Tikky',
        clickCount: 0,
        imgSrc: '',
        imgAttribution: '',
        nicknames: ['ss', 'b', 'c']
    },
    {
        name: 'Tony',
        clickCount: 0,
        imgSrc: '',
        imgAttribution: '',
        nicknames: ['ff', 'b', 'c']
    },
    {
        name: 'Puppy',
        clickCount: 0,
        imgSrc: '',
        imgAttribution: '',
        nicknames: ['gg', 'b', 'c']
    }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.level = ko.computed(function () {
        if (this.clickCount() < 10) {
            return 'newbie';
        }
        else if (this.clickCount() >= 10 && this.clickCount() < 20) {
            return 'normal';
        }
        else if (this.clickCount() >= 20) {
            return 'pro';
        }
    }, this);
    this.nicknames = ko.observableArray(data.nicknames);
};

var ViewModel = function () {
    var self = this;

    this.catList = ko.observableArray([]);
    initialCats.forEach(element => {
        self.catList.push(new Cat(element));
    });

    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCurrentCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());