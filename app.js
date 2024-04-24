//обработка уведомлений 
async function subscribeToPushNotifications() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'YOUR_PUBLIC_KEY' // Замените на ваш публичный ключ сервера для отправки уведомлений
      });
      console.log('Подписка на уведомления:', subscription);
      // Отправьте подписку на ваш сервер для дальнейшей отправки уведомлений
      sendSubscriptionToServer(subscription);
    } else {
      console.error('Service Worker не поддерживается в вашем браузере.');
    }
  }

  // Отправка подписки на сервер
  function sendSubscriptionToServer(subscription) {
    // Отправьте объект подписки на ваш сервер для сохранения
    // Например, используя AJAX запрос или другой механизм передачи данных
  }

  // Вызов функции подписки на уведомления
  subscribeToPushNotifications();