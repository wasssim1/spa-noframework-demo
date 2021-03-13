import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Not Found 404");
    }

    async getHtml() {
        return `
            <h3>Not Found 404</h3>
        `
    }
}
