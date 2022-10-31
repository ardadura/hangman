import { computed, Ref, ref, UnwrapRef, watch } from "vue";
import { useHangmanStore } from "@/store/HangmanStore";

export function gameTimer() {
  const store = useHangmanStore();
  const isGameRunning = computed(() => {
    return store.getGameStatus;
  });

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
      if (!isGameRunning.value) {
        pause();
        return false;
      }
      timer();
    }, 10);
  }

  function pause() {
    clearInterval(totalTime.value);
  }

  start();

  watch(isGameRunning, (newValue) => {
    if (newValue) {
      seconds.value = 0;
      milliseconds.value = 0;
      start();
    }
  });

  return { seconds, milliseconds, isGameRunning };
}
