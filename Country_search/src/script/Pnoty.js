import { error, alert } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";

export default function showError() {
  alert({
    text: "Уточните поиск",
    animation: "fade",
    delay: 4000,
  });
}