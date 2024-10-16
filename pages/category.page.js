class CategoryPage {
    get categoryTab() {
        return $('//a[@href="/categories"]')
    }
    get addBtn() {
        return $('//a[@href="/categories/create"]')
    }
    get namaCategory() {
        return $('#nama');
    }
    get deskripsiCategory() {
        return $('//input[@id="deskripsi"]');
    }
    
    get saveBtn() {
        return $('//button[@class="chakra-button css-l5lnz6"]');
    }
    get popupSuccess() {
        return $('//div[@class="chakra-alert__desc css-zycdy9"]'); //li[@class="chakra-toast"]
        
    }
    get alertCategory() {
        return $('//div[@class="chakra-alert css-qwanz3"]')
         
    }

    async category() {
        await this.categoryTab.click()
    }
    async add() {
        await this.addBtn.click()
    }
    async save() {
        await this.saveBtn.click()
    }


    async isiData(nama, deskripsi) {
        await this.namaCategory.setValue(nama);
        await this.deskripsiCategory.setValue(deskripsi);
    }
    async assertAlertMessage(expectedAlertMessage) {
        await expect(this.alertCategory).toHaveText(expectedAlertMessage);
      }
      async assertSuccessMessage(expectedSuccessMessage) {
        await expect(this.popupSuccess).toHaveText(expectedSuccessMessage);
      }
}
module.exports = new CategoryPage();