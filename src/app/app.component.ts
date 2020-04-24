import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css", "./responsive.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  menus: any = new Array();
  testimonials: any = new Array();
  testimonial_message: any = new Object();
  constructor() {
    this.menus.push("About", "Services", "Solutions", "Blog", "Get In Touch");
    this.testimonial_message.client_msg =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
    this.testimonial_message.client_name = "CLIENT NAME";
    this.testimonial_message.client_position = "ORG";

    for (var i = 0; i < 3; i++) {
      this.testimonials.push(this.testimonial_message);
    }
  }
  openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
    document.getElementById("mobile-menu").style.display = "block";
  }
  closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
    document.getElementById("mobile-menu").style.display = "none";
    // $("#mobile-menu ul li").hide();
  }
}
