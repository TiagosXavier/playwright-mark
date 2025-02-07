import { expect, Locator, Page } from "@playwright/test";
import { TaskModel } from "../../../fixtures/task.model";

export class TasksPage {
    static toggle(name: string) {
        throw new Error("Method not implemented.");
    }
    static go() {
        throw new Error("Method not implemented.");
    }
    readonly page: Page
    readonly inputTaskName: Locator

    constructor(page: Page) {
        this.page = page
        this.inputTaskName = page.locator("input[class*=InputNewTask]")
    }

    async go() {
        await this.page.goto('/');
    }

    async create(task: TaskModel) {
        await this.inputTaskName.fill(task.name);

        await this.page.click("css=button >> text=Create");
    }

    async toggle(taskName: string) {
        const target = this.page.locator(`//p[text()="${taskName}"]/..//button[contains(@class, "Toggle")]`)
        await target.click();
    }

    async remove(taskName: string) {
        const target = this.page.locator(`//p[text()="${taskName}"]/..//button[contains(@class, "Delete")]`)
        await target.click();
    }

    async shouldHaveText(taskName: string) {
        const target = this.page.locator(`css=.task-item p >> text=${taskName}`);
        await expect(target).toBeVisible();
    }

    async alertHaveText(text: string) {
        const target = this.page.locator('.swal2-html-container')
        await expect(target).toHaveText(text);
    }

    async shouldBeDone(taskName: string) {
        const target = this.page.getByText(taskName)
        await expect(target).toHaveCSS('text-decoration-line', 'line-through')
    }

    async shouldNotExist(taskName: string) {
        const target = this.page.locator(`css=.task-item p >> text=${taskName}`);
        await expect(target).not.toBeVisible();
    }
}


