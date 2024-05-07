class HomePage {
    async getTitle(): Promise<string> {
        const selector =
            'new UiSelector().text("WEBDRIVER").className("android.widget.TextView")';
        const title = await $(`android

        =
        ${selector}`);
        return await title.getText();
    }
}

export default new HomePage();