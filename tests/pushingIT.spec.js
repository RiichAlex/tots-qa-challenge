import { test, expect } from '@playwright/test';

test('Registro exitoso en Pushing IT', async ({ page }) => {
  await page.goto('https://pushing-it.vercel.app/', { waitUntil: 'domcontentloaded' });

  await page.waitForSelector('#submitForm');

  await page.locator('#user').fill('richardqa' + Date.now());
  await page.locator('#pass').fill('Password123!');
  await page.locator('[data-cy="Male"]').click();

  await page.locator('#day').selectOption('1');
  await page.locator('#month').selectOption('January');
  await page.locator('#year').selectOption('1990');

  await page.locator('#submitForm').click();

  // ✅ Ahora validamos que el mensaje de bienvenida exista y se vea
  await expect(page.getByRole('heading', { name: /Welcome/i })).toBeVisible();
});












