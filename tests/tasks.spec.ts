import { expect, test } from "@playwright/test";
import { TaskModel } from "./fixtures/task.model";
import { deleteTaskByHelper, postTask } from "./support/helpers";
import { TasksPage } from "./support/pages/tasks/index";

import data from './fixtures/tasks.json'

let tasksPage: TasksPage

test.beforeEach(({ page }) => {
  tasksPage = new TasksPage(page)
})

test.describe('register', () => {
  test("should add a new task", async ({ request }) => {
    const task = data.success as TaskModel

    await deleteTaskByHelper(request, task.name);



    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.shouldHaveText(task.name);

  });

  test("should not allow duplicate tasks", async ({ request }) => {
    const task = data.duplicate as TaskModel

    await deleteTaskByHelper(request, task.name);
    await postTask(request, task);


    await tasksPage.go();
    await tasksPage.create(task);
    await tasksPage.alertHaveText('Task already exists!');

  });

  test('required field', async () => {
    const task = data.required as TaskModel

    await tasksPage.go()
    await tasksPage.create(task)

    const validationMessage = await tasksPage.inputTaskName.evaluate(e => (e as HTMLInputElement).validationMessage)
    expect(validationMessage).toEqual('This is a required field')
  })
})

test.describe('update', () => {
  test('should complete a task', async ({ request }) => {
    const task = data.update as TaskModel

    await deleteTaskByHelper(request, task.name)
    await postTask(request, task)

    await tasksPage.go()
    await tasksPage.toggle(task.name)
    await tasksPage.shouldBeDone(task.name)
  })
})

test.describe('delete', () => {
  test.only('should delete a task', async ({ request }) => {
    const task = data.delete as TaskModel

    await deleteTaskByHelper(request, task.name)
    await postTask(request, task)

    await tasksPage.go()
    await tasksPage.remove(task.name)
    await tasksPage.shouldNotExist(task.name)
  })
})



