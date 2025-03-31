// simple.test.js
import { getSwingBlockVelocity } from "../utils";

describe("Simple Tests", () => {
  test("getSwingBlockVelocity should return a number", () => {
    // Создаем моковый объект engine
    const engine = {
      getVariable: (key) => {
        if (key === "successCount") return 5; // Пример значения
        if (key === "gameScore") return 100; // Пример значения
        if (key === "gameUserOption") {
          return {
            hookSpeed: null, // Имитируем отсутствие hookSpeed
          };
        }
        if (key === "hardMode") return false; // Имитируем режим игры
        return null; // Для всех остальных ключей возвращаем null
      },
      utils: {
        random: (min, max) => (min + max) / 2, // Простая реализация random
      },
    };

    const time = 1000; // Время в миллисекундах
    const velocity = getSwingBlockVelocity(engine, time);

    // Проверяем, что результат является числом
    expect(typeof velocity).toBe("number");
  });
});
