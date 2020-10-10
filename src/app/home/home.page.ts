import { Component, ɵCodegenComponentFactoryResolver } from "@angular/core";
import { Device } from "@ionic-native/device/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  UUID = "";
  constructor(private device: Device, private social: SocialSharing) {}

  getUUID() {
    this.UUID = this.device.uuid;
  }

  shareUUIDviaWhatsapp() {
    this.social.shareViaWhatsApp(this.UUID).then((res) => {});
  }

  shareUUIDViaMail() {
    this.social.shareViaEmail(this.UUID, "Device UUID", [""]).then((res) => {
      console.log(res);
    });
  }
}
