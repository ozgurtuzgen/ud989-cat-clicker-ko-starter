var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Toby');
    this.imgSrc = ko.observable('');
    this.imgAttribution = ko.observable('');
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

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }
};

ko.applyBindings(new ViewModel());