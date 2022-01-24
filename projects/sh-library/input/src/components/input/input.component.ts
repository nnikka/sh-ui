import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sh-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }]
})
export class InputComponent implements ControlValueAccessor {
    @Input() label!: string;
    @Input() placeHolder!: string;

    private _value!: string;
    private _onChange: (_: any) => void = (_) => { };
    private _onTouch: () => void = () => { };

    set value(value: string) {
        if (value !== undefined && this._value !== value) {
            this._value = value;
            this._onChange(value);
            this._onTouch();
        }
    }

    get value() {
        return this._value;
    }

    constructor() { }

    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouch = fn;
    }
}
