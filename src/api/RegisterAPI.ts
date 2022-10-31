import { appService } from "@/services/AppService";

export function registerUser(payload) {
  return appService.post("users", payload);
}
