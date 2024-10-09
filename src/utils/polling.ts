// function usePolling(action: () => void, interval: number = 30, expire: number = 180, initStatus: boolean = false) {
//     const switcher = ref(initStatus);
//     const isWindowFocus = ref(false);
//     const isActive = ref(false);

//     const isPolling = computed(() => switcher.value && isWindowFocus.value && isActive.value);
//     const pollingInterval = ref<any>();

//     const activeInterval = ref<any>();
//     // 移动端可增加touchstart事件
//     const ACTIVE_ACTIONS = ['mousemove', 'mousedown', 'wheel', 'keydown'];

//     const POLLING_INTERVAL = interval * 1000;
//     const EXPIRE_INTERVAL = expire * 1000;

//     const onActive = () => {
//         isActive.value = true;
//         activeInterval.value = setTimeout(() => {
//             isActive.value = false;
//         }, EXPIRE_INTERVAL);
//     };

//     const onWindowFocus = () => {
//         isWindowFocus.value = true;
//     };

//     const onWindowBlur = () => {
//         isWindowFocus.value = false;
//     };

//     const visibilityListener = () => {
//         if (document.visibilityState === 'visible') {
//             onWindowFocus();
//         } else {
//             onWindowBlur();
//         }
//     };

//     const addActiveListener = () => {
//         document.addEventListener('visibilitychange', visibilityListener);
//         window.addEventListener('focus', onWindowFocus);
//         window.addEventListener('blur', onWindowBlur);
//         ACTIVE_ACTIONS.forEach((event: string) => {
//             window.addEventListener(event, onActive);
//         });
//     };

//     const removeActiveListener = () => {
//         document.removeEventListener('visibilitychange', visibilityListener);
//         window.removeEventListener('focus', onWindowFocus);
//         window.removeEventListener('blur', onWindowBlur);
//         ACTIVE_ACTIONS.forEach((event: string) => {
//             window.removeEventListener(event, onActive);
//         });
//     };

//     const changePolling = (current: boolean) => {
//         if (current) {
//             pollingInterval.value = setInterval(action, POLLING_INTERVAL);
//         } else {
//             clearInterval(pollingInterval.value);
//         }
//     };

//     watch(
//         () => isPolling.value,
//         (val) => {
//             changePolling(val);
//         }
//     );

//     return {
//         switcher,
//         isActive,
//         addActiveListener,
//         removeActiveListener
//     };
// }