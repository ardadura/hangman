import { appService } from "@/services/AppService";

export function getUser() {
  return appService.get("users");
}
