import { Ref, ref, UnwrapRef } from "vue";

export function gameTimer() {
  const seconds: Ref<UnwrapRef<number>> = ref(0);
  const milliseconds: Ref<UnwrapRef<number>> = ref(0);
  const totalTime: any = ref(0);
  function timer() {
    if ((milliseconds.value += 10) == 1000) {
      milliseconds.value = 0;
      seconds.value++;
    }
  }

  function start() {
    pause();
    totalTime.value = setInterval(() => {
      timer();
    }, 10);
  }

  function pause() {
    clearInterval(totalTime.value);
  }

  start();

  return { seconds, milliseconds };
}
