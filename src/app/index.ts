import './style.styl';
import { View, html } from 'rune-ts';
import { RuneAlert } from './types';

export class AlertView extends View<RuneAlert> {
    override template({ name }: RuneAlert) {
        return html` <button type="button">${name}</button> `;
    }

    override onRender() {
        this.element().addEventListener('click', () => {
            alert(this.data.message);
        });
    }
}

const colorView = new AlertView({
    name: 'Hello Rune! 😎',
    message: 'Hello Ruuuuuune~~😎',
});

document.body.appendChild(colorView.render());
