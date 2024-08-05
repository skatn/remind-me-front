const requestNotificationPermission = async () => {
  console.log('Push 알림 권한 요청 중...');

  const permission = await Notification.requestPermission();
  if (permission === 'denied') {
    console.log('알림 권한 허용 안됨');
    return false;
  }

  console.log('알림 권한이 허용됨');
  return true;
};

export default requestNotificationPermission;
