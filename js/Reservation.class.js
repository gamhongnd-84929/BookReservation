

class Reservation {
    _name = 0; 
    _phone = 0;
    _childCount = 0;
    _adultCount = 0;
    _startDate = 0;
    _endDate = 0;
    _subTotal = 0;
    _tax = 0;
    _total = 0;

    constructor(name, phone, childCount, adultCount, startDate, endDate)
    {
         this._name = name;
         this._phone = phone;
         this._childCount = childCount;
         this._adultCount = adultCount;
         this._startDate = startDate; 
         this._endDate = endDate;
    }
    getName()
    {
        return this._name;
    }
    getPhone() {
        return this._phone;
    }
    getChildCount() {
        return this._childCount;
    }
    getAdultCount()
    {
        return this._adultCount;
    }
    getStartDate() {
        return this._startDate;
    }
    getEndDate() {
        return this._endDate;
    }
    calculateSubtotal() {
        this._subTotal = this._childCount*11.55 + this._adultCount*15.55;
        return this._subTotal;
    }
    calculateTax() {
        this._tax = this._subTotal*0.12;
        return  this._tax;
    }
    calculateTotal() {
        this._total = this._subTotal + this._tax;
        return this._total;
    }
    


}